<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;


Route::get('/example', function ($id) {
    $user = User::findOrFail($id);
    $token = $user->createToken('auth_token')->plainTextToken;
    return response()->json(['message' => $token]);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/newlogin', [LoginController::class, 'login']);
Route::post('/newregister', [RegisterController::class, 'register']);
Route::post('/newlogout', [LoginController::class, 'logout'])->name('logout');
Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit')->middleware('auth:sanctum');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update')->middleware('auth:sanctum');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy')->middleware('auth:sanctum');

Route::post('/products', [ProductController::class, 'index']);
Route::post('/products/{id}', [ProductController::class, 'show']);
Route::post('/products/{id}/add', [ProductController::class, 'addToCart'])->middleware('auth:sanctum');
Route::post('/cart', [CartController::class, 'index'])->middleware('auth:sanctum');
Route::post('/order', [OrderController::class, 'createOrder'])->middleware('auth:sanctum');

