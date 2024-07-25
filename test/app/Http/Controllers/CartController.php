<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Products;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
{
    if (Auth::check()) {
        $user = Auth::user();
        $userId = $user->id;
    } else {
        return response()->json(['message' => 'User not authenticated'], 401);
    }

    $cartItems = CartItem::where("user_id", $userId)->get();

    $cartItems = $cartItems->map(function ($item) {
        $product = Products::find($item->product_id);
        $item->product_name = $product->name;
        $item->product_price = $product->price;
        $item->product_img = $product->img;
        return $item;
    });

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
