<?php
namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\ProductInventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        // Validate the request to ensure 'user_id' and 'cart_items_ids' are provided
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'cart_items' => 'required|array',
            'cart_items.*.id' => 'required|exists:cart_items,id',
            'cart_items.*.quantity' => 'required|integer|min:1',
        ]);

        $userId = $request->input('user_id');
        $cartItemsData = $request->input('cart_items');

        // Retrieve the specified cart items for the user
        $cartItems = CartItem::whereIn('id', array_column($cartItemsData, 'id'))->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'No valid cart items found'], 400);
        }

        DB::beginTransaction();

        try {
            // Create the order
            $order = Order::create([
                'user_id' => $userId,
                'total_price' => collect($cartItemsData)->sum(function ($item) use ($cartItems) {
                    $cartItem = $cartItems->where('id', $item['id'])->first();
                    return $cartItem->product->price * $item['quantity'];
                }),
                'status' => 'pending',
            ]);

            // Create order items and update inventory
            foreach ($cartItemsData as $itemData) {
                $cartItem = $cartItems->where('id', $itemData['id'])->first();
                if ($cartItem) {
                    $orderQuantity = $itemData['quantity'];

                    OrderItem::create([
                        'order_id' => $order->id,
                        'product_id' => $cartItem->product_id,
                        'quantity' => $orderQuantity,
                        'price' => $cartItem->product->price,
                    ]);

                    // Update inventory
                    $productInventory = ProductInventory::where('id', $cartItem->product->inventory_id)->first();
                    if ($productInventory) {
                        $productInventory->quantity -= $orderQuantity;
                        $productInventory->save();
                    } else {
                        // Handle the case where the product inventory is not found
                        throw new \Exception("Product inventory not found for product ID {$cartItem->product_id}");
                    }

                    // Remove the processed quantity from the cart item
                    if ($cartItem->quantity > $orderQuantity) {
                        $cartItem->quantity -= $orderQuantity;
                        $cartItem->save();
                    } else {
                        $cartItem->delete();
                    }
                }
            }

            DB::commit();

            return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to create order', 'error' => $e->getMessage()], 500);
        }
    }
}
