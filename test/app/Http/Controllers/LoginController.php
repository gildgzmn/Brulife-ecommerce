<?php
namespace App\Http\Controllers;

use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    protected $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    public function login(Request $request)
    {

        $credentials = $this->loginService->validateLogin($request->all());

        if ($credentials) {
            return response()->json(['message' => 'Login successful', csrf_token()], 200);

        }

        return response()->json(['message' => 'Login failed'], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'User Logged Out'], 200);
    }
}
