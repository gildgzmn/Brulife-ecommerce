<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index($id)
    {
        $product  = Products::findOrFail($id);
        return Inertia::render('Products', ['product' => $product ]);


    }
}
