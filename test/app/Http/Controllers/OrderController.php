<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Models\CartItem;
use Illuminate\Http\Request;
use App\Services\OrderService;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    // public function index()
    // {
    //     $userId = Auth::user()->id;
    //     $orders = Orders::where('user_id', $userId)->get();

    //     return response()->json(['orders' => $orders], 200);
    // }

    public function store(Request $request)
    {
        $userId = Auth::user()->id;
        $shippingAddress = $request->input('shipping_address');
        $paymentMethod = $request->input('payment_method');

        $order = $this->orderService->createOrder($userId, $shippingAddress, $paymentMethod);

        if ($order['success']) {
            return response()->json(['message' => 'Order placed successfully', 'order' => $order['order']], 201);
        }

        return response()->json(['message' => $order['message'], 'error' => $order['error']], 400);
    }
}
