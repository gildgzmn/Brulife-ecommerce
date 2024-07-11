<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class LoginService
{
    public function validateLogin(array $credentials)
    {
        // Validate the credentials
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return true;
        }

        return false;
    }
}
