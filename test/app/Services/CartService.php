<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class CartService
{
    public function addToCart(array $data)
    {
        // Define validation rules
        $validator = Validator::make($data, [
            'user_id' => ['required', 'exists:users,id'],
            'product_id' => ['required', 'exists:products,id'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return [
                'success' => false,
                'errors' => $validator->errors()
            ];
        }

        // Add to cart
        $cart = Cart::updateOrCreate(
            [
                'user_id' => $data['user_id'],
                'product_id' => $data['product_id']
            ],
            [
                'quantity' => $data['quantity']
            ]
        );

        return [
            'success' => true,
            'cart' => $cart
        ];
    }
}
