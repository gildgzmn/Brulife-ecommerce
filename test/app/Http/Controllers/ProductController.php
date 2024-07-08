<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show($id)
    {
        $product  = Products::findOrFail($id);
        return response()->json(['products' => $product ]);


    }
}
