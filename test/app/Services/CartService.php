<?php

namespace App\Services;

use App\Models\CartItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CartService
{
    public function addToCart(array $data)
    {
        // Validate
        $validator = Validator::make($data, [
            'user_id' => ['required', 'exists:users,id'],
            'product_id' => ['required', 'exists:products,id'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        if ($validator->fails()) {
            return [
                'success' => false,
                'errors' => $validator->errors()
            ];
        }

        //If item exists in cart, update quantity
        $existingCartItem = CartItem::where('user_id', $data['user_id'])
            ->where('product_id', $data['product_id'])
            ->first();

        if ($existingCartItem) {
            $existingCartItem->quantity += $data['quantity'];
            $existingCartItem->save();
            return [
                'success' => true,
                'cart' => $existingCartItem
            ];
        } else {
            // Create if the item does not exist in the cart
            $cart = CartItem::create($data);

            return [
                'success' => true,
                'cart' => $cart
            ];
        }
    }

    public function checkout(int $userId)
    {
        // Retrieve the user's cart items
        $cartItems = CartItem::where('user_id', $userId)->get();

        if ($cartItems->isEmpty()) {
            return [
                'success' => false,
                'message' => 'Cart is empty.'
            ];
        }

        // Calculate the total price (assuming Products model has a price attribute)
        $totalPrice = 0;
        foreach ($cartItems as $item) {
            $totalPrice += $item->quantity * $item->product->price;
        }

        // Example transaction handling (this should be expanded for actual order processing)
        DB::beginTransaction();

        try {
            // Clear the cart items (in a real app, you would also create an order record)
            CartItem::where('user_id', $userId)->delete();

            DB::commit();

            return [
                'success' => true,
                'message' => 'Checkout successful.',
                'total_price' => $totalPrice,
                'items' => $cartItems
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false,
                'message' => 'Checkout failed. Please try again.'
            ];
        }
    }
}

