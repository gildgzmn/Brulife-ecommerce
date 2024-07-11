<?php

namespace App\Http\Controllers;

use App\Services\LoginService;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    protected $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }
    public function login(Request $request){
        try{
            $user = $this->loginService->validateLogin($request->all());
            return response()->json(['user' => $user ]);

        } catch(\Exception $e){

        }


    }
}
