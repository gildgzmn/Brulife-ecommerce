<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        $userId = Auth::user()->id;
        $cartItems = CartItem::where("user_id", $userId)->get();
        return response()->json(['cartItems' => $cartItems], 200);
    }

    public function checkout(Request $request){

        $userId = Auth::user()->id;

    }

    public function updateCartItem(Request $request, $id){

        $cartItem = CartItem::findOrFail($id);
        $cartItem->quantity = $request->input('quantity');
        $cartItem->save();

        return response()->json(['message' => 'Cart item updated'], 200);
    }

    public function removeFromCart(Request $request, $id){
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();

        return response()->json(['message' => 'Item removed from cart'], 200);
    }





}
