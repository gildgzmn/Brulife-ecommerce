<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Orders;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class CartController extends Controller
{
    public function index(): JsonResponse
    {
        // Retrieve the authenticated user's cart items
        $userId = Auth::id();
        $cartItems = CartItem::where('user_id', $userId)->get();

        return response()->json([
            'cartItems' => $cartItems,
        ]);
    }

    //Add a product to the user's cart or update its quantity if it already exists
    public function addToCart(Request $request, $product): JsonResponse
    {

        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        //stocks
        if ($product->stock < $request->quantity) {
            return response()->json(['message' => 'Out of Stock'], 400);
        }

        $userId = Auth::id();
        //Check if the product already exists in the user's cart
        $cartItem = CartItem::where('user_id', $userId)
            ->where('product_id', $request->product_id)
            ->first();
        //If yes, update the quantity
        if ($cartItem) {
            $newQuantity = $cartItem->quantity + $request->quantity;
            if ($product->stock < $newQuantity) {
                return response()->json(['message' => 'Insufficient stock available'], 400);
            }
            $cartItem->update(['quantity' => $newQuantity]);
        } else {
            CartItem::create([
                'user_id' => $userId,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }

        // Decrease the product stock
        $product->decreaseStock($request->quantity);

        return response()->json(['message' => 'Product added to cart successfully']);
    }

    public function removeFromCart(Request $request): JsonResponse
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $userId = Auth::id();
        $cartItem = CartItem::where('user_id', $userId)
            ->where('product_id', $request->product_id)
            ->first();

        if ($cartItem) {
            $product = Products::find($request->product_id);
            $product->stock += $cartItem->quantity; // Return the stock
            $product->save();

            $cartItem->delete();
        }

        return response()->json(['message' => 'Product removed from cart successfully']);
    }

    public function placeOrder(Request $request): JsonResponse
    {
        $userId = Auth::id();
        $cartItems = CartItem::where('user_id', $userId)->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'No items in cart'], 400);
        }

        foreach ($cartItems as $item) {
            $product = Products::find($item->product_id);

            if ($product->stock < $item->quantity) {
                return response()->json(['message' => 'Out of Stock! :('], 400);
            }

            $totalPrice = $product->price * $item->quantity;

            Orders::create([
                'user_id' => $userId,
                'product_id' => $item->product_id,
                'payment_id' => $request->payment_id,
                'quantity' => $item->quantity,
                'price' => $product->price,
                'total_price' => $totalPrice,
                'status' => 'Pending',
            ]);

            $product->stock -= $item->quantity;
            $product->save();

            // Remove item from cart after ordering
            $item->delete();
        }

        return response()->json(['message' => 'Order placed successfully']);
    }
}

