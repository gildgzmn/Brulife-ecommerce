<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $categoryFilter = $request->query('category');

        $productsQuery = Products::with(['category', 'inventory']);

        if ($categoryFilter) {
            $productsQuery->whereHas('category', function($query) use ($categoryFilter) {
                $query->where('name', $categoryFilter);
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

        return response()->json(['product' => $productData]);
    }
}
