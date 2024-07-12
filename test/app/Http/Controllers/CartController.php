<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CartService;
use Illuminate\Http\Request;

use App\Models\CartItem;
use App\Models\Orders;
use App\Models\Products;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class CartController extends Controller
{
    protected $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function addToCart(Request $request)
    {
        $data = $request->only('user_id', 'product_id', 'quantity');

        $result = $this->cartService->addToCart($data);

        if ($result['success']) {
            return response()->json(['message' => 'Product added to cart successfully', 'cart' => $result['cart']], 201);
        }

        return response()->json(['errors' => $result['errors']], 422);
    }
}
