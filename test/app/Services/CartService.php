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

}

