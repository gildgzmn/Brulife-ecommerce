<?php

namespace App\Http\Controllers;

use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ($this->loginService->validateLogin($credentials)) {
            // Login successful, redirect to intended page
            return redirect()->intended('products');
        }

        // Login failed, redirect back with errors
        return redirect()->back()->withErrors([
            'The provided credentials do not match our records.',
        ]);
    }
}
