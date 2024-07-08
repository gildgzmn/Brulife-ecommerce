<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show($id)
    {
        //Retrieves a product by its id from the database
        $product  = Products::findOrFail($id);
        return response()->json(['products' => $product ]);


    }
}
