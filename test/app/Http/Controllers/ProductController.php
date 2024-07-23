<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Services\CartService;
use Illuminate\Database\Eloquent\Relations\Relation;

class ProductController extends Controller
{
    protected $cartService;

    public function __construct(CartService $cartService){
        $this->cartService = $cartService;
    }

    public function index(Request $request)
    {
        $categoryFilter = $request->query('category');
        $searchQuery = $request->query('search');

        $productsQuery = Products::with(['category', 'inventory']);

        if ($categoryFilter) {
            $productsQuery->whereHas('category', function ($query) use ($categoryFilter) {
                $query->where('name', $categoryFilter);
            });
        }

        if ($searchQuery) {
            $productsQuery->where(function($query) use ($searchQuery) {
                $query->where('name', 'LIKE', "%{$searchQuery}%");
                      //->orWhere('desc', 'LIKE', "%{$searchQuery}%");
            });
        }

        $products = $productsQuery->get()->map(function ($product) {
            return [
                'id' => $product->id,
                'image' => $product->img,
                'name' => $product->name,
                'description' => $product->desc,
                'price' => $product->price,
                'category' => $product->category->name,
                'inventory' => $product->inventory->quantity,
            ];
        });

        return response()->json(['products' => $products]);
    }

    public function show($id)
    {
        $product = Products::with(['category', 'inventory'])->findOrFail($id);
        $productData = [
            'id' => $product->id,
            'image' => $product->img,
            'name' => $product->name,
            'description' => $product->desc,
            'price' => $product->price,
            'category' => $product->category->name,
            'inventory' => $product->inventory->quantity,
        ];

        return response()->json(['products' => $productData]);
    }
    public function addToCart(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $result = $this->cartService->addToCart($data);

        if ($result['success']) {
            return response()->json(['message' => 'Product added to cart successfully', 'cart' => $result['cart']], 201);
        }

        return response()->json(['errors' => $result['errors']], 422);
    }
}
