<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

    class ProfileController extends Controller
{
    public function edit(Request $request)
    {
        return response()->json([
            'profileUser' => $request->user(),
            //'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function update(ProfileUpdateRequest $request)
    {
        $user = $request->user();
        $validatedData = $request->validated();

        $user->fill($validatedData);

        if ($user->isDirty()) {
            if ($user->isDirty('email')) {
                $user->email_verified_at = null;
            }

            $user->save();

            return response()->json([
                'message' => 'Profile updated successfully',
            ]);
        }

        return response()->json([
            'message' => 'No changes were made to the profile',
        ]);
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Account deleted successfully',
        ]);
    }
}
