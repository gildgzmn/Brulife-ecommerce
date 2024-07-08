<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\User;
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
        //$user = User::find($userId);

        return response()->json([
            'cartItems' => $cartItems,
            //'user' => $user,
        ]);
    }

    //Add a product to the user's cart or update its quantity if it already exists
    public function addToCart(Request $request): JsonResponse
    {

        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $userId = Auth::id();
        //Check if the product already exists in the user's cart
        $cartItem = CartItem::where('user_id', $userId)
            ->where('product_id', $request->product_id)
            ->first();
        //If yes, update the quantity
        if ($cartItem) {
            $cartItem->update([
                'quantity' => $cartItem->quantity + $request->quantity,
            ]);
        } else {
            //Else no, create a new cart item
            CartItem::create([
                'user_id' => $userId,
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
        }
        return response()->json(['message' => 'Product added to cart successfully']);
    }

    //Removes a product from the user's cart
    public function removeFromCart(Request $request): JsonResponse
    {

        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);
        $userId = Auth::id();
        CartItem::where('user_id', $userId)
            ->where('product_id', $request->product_id)
            ->delete();
        return response()->json(['message' => 'Product removed from cart successfully']);
    }
}
