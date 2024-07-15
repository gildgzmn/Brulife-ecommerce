<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CartService;
use Illuminate\Http\Request;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    protected $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function index()
    {
        $userId = Auth::user()->id;
        $cartItems = CartItem::where("user_id", $userId)->get();
        return response()->json(['cartItems' => $cartItems], 200);
    }

    public function addToCart(Request $request)
    {
        $user = Auth::user();
        $data = [
            'user_id' => $user->id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ];

        $result = $this->cartService->addToCart($data);

        if ($result['success']) {
            return response()->json(['message' => 'Product added to cart successfully', 'cart' => $result['cart']], 201);
        }

        return response()->json(['errors' => $result['errors']], 422);
    }

}
