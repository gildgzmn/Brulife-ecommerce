<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\RegistrationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class RegisterController extends Controller
{
    protected $registrationService;

    public function __construct(RegistrationService $registrationService)
    {
        $this->registrationService = $registrationService;
    }

    public function register(Request $request)
    {
        $data = $request->only(
            "first_name",
            "middle_initial",
            "last_name",
            "email",
            "username",
            "contact_number",
            "password",
            "password_confirmation"
        );
        $result = $this->registrationService->validateAndCreateUser($data);

        if($result['success']){
            Auth::login($result['user']);
            return response()->json(['message' => 'Registration successful', 'user' => $result['user']], 201);
    }
    return response()->json(['message' => 'Registration failed', 'errors' => $result['errors']], 422);

}
}
