<?php

namespace App\Services;

use App\Models\CartItem;
use App\Models\Orders;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;

class OrderService
{
    public function createOrder(int $userId, string $shippingAddress, string $paymentMethod)
    {
        // Retrieve the user's cart items
        $cartItems = CartItem::where('user_id', $userId)->get();

        if ($cartItems->isEmpty()) {
            return [
                'success' => false,
                'message' => 'Cart is empty.'
            ];
        }

        // Calculate the total price
        $totalPrice = 0;
        foreach ($cartItems as $item) {
            $totalPrice += $item->quantity * $item->product->price;
        }

        // Create the order within a transaction
        DB::beginTransaction();

        try {
            // Create the order
            $order = Orders::create([
                'user_id' => $userId,
                'shipping_address' => $shippingAddress,
                'payment_method' => $paymentMethod,
                'total_price' => $totalPrice,
                'status' => 'pending'
            ]);

            // Add order items
            foreach ($cartItems as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'price' => $item->product->price,
                ]);
            }

            // Clear the cart items
            CartItem::where('user_id', $userId)->delete();

            DB::commit();

            return [
                'success' => true,
                'message' => 'Order created successfully.',
                'order' => $order
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false,
                'message' => 'Order creation failed. Please try again.',
                'error' => $e->getMessage()
            ];
        }
    }
}
