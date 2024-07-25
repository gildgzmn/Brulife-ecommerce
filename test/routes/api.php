<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

Route::post('/newlogin', [LoginController::class, 'login']);
Route::post('/newregister', [RegisterController::class, 'register']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit']);
    Route::patch('/profile', [ProfileController::class, 'update']);
    Route::delete('/profile', [ProfileController::class, 'destroy']);
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/order', [OrderController::class, 'createOrder']);
    Route::post('/products/{id}/add', [ProductController::class, 'addToCart']);

    Route::post('/newlogout', [LoginController::class, 'logout']);
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
