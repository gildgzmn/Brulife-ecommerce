<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Log\Logger;
use Illuminate\Http\Request;
use App\Services\LoginService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
{
    protected $logger;
    protected $loginService;

    public function __construct(LoginService $loginService, Logger $logger)
    {
        $this->loginService = $loginService;
        $this->logger = $logger;
    }

    public function login(Request $request)
    {
        //return response()->json(['message' => 'Login successful'], 200);
        try {
            $user = User::where('email', $request->input('email'))->first();

            if (!$user) {
                return response()->json(['message' => 'User not found!!!'], 404);
            }

            if (Hash::check($request->input('password'), $user->password)) {
                $token = $user->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'message' => 'Login successful',
                    'id' => $user->id,
                    'token' => $token
                ], 200);
            } else {
                return response()->json(['message' => 'Login failed'], 401);
            }
        } catch (\Exception $e) {
            $this->logger->error('Login error: ' . $e->getMessage());
            return response()->json(['message' => 'Login failed. Please try again later.'], 500);
        }
    }

    public function logout()
    {
        //add revoke token
        Auth::logout();
        return response()->json(['message' => 'User Logged Out'], 200);
    }
}
