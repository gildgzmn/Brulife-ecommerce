<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Models\Products;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        //return response()->json([
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
//test new login and register (w/o auth?)
Route::get('/newlogin', [LoginController::class, 'login']);
Route::get('/newregister', [RegisterController::class,'register']);

Route::post('/orders', [OrderController::class, 'store']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::get('/cart/add', [CartController::class, 'addToCart'])->name('cart.addToCart');


//unessessary ata
Route::get('/dashboard', function () {
    $products = Products::all();
    return response()->json([
        'products' => $products
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // Route::post('/cart', [CartController::class, 'add'])->name('cart.add');
    // Route::put('/cart/{id}', [CartController::class, 'update'])->name('cart.update');
    // Route::delete('/cart/{id}', [CartController::class, 'remove'])->name('cart.remove');
    // Route::post('/cart/place-order', [CartController::class, 'placeOrder']);
});

require __DIR__ . '/auth.php';