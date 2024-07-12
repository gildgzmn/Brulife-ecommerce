<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use App\Models\Orders;

class OrderController extends Controller
{
    public function store(Request $request){
        $user = auth()->user();
        $cartItems = CartItem::where('user_id', $user->id)->get();
        $totalPrice = 0;

        foreach($cartItems as $cartItem){
            $product = $cartItem->product;
            $price = $product->price;
            $quantity = $cartItem->quantity;
            $totalPrice += $price * $quantity;

            Orders::create([
                'user_id' => $user->id,
                'product_id' => $product->id,
                'payment_id' => $request->payment_id,
                'quantity' => $quantity,
                'price' => $price,
                'total_price' => $totalPrice,
                'status' => 'pending',

            ]);
        }

        CartItem::where('user_id', $user->id)->delete();
        return response()->json(['message' => 'Order placed successfully'], 201);

    }
}
