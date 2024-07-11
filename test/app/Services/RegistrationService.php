<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistrationService
{
    public function validateAndCreateUser(array $data)
    {
        // Define validation rules
        $validator = Validator::make($data, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'contact_number' => 'required|string|max:11|unique:users,contact_number',
            'password' => ['required', 'same:password_confirmation'],
            'password_confirmation' => ['required', 'same:password'],
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return [
                'success' => false,
                'errors' => $validator->errors()
            ];
        }

        // Create the user
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'contact_number' => $data['contact_number'],
            'password' => Hash::make($data['password']),
        ]);

        return [
            'success' => true,
            'user' => $user
        ];
    }
}
