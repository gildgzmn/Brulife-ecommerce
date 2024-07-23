<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['string', 'max:255'],
            'middle_initial' => ['string', 'max:255'],
            'last_name' => ['string', 'max:255'],
            'email' => ['string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'contact_number' => ['numeric', Rule::unique(User::class)->ignore($this->user()->id)],
            'address' => ['string', 'max:255'],
            'zip_code' => ['string', 'max:255'],
            'password' => ['string', 'min:8', 'confirmed'],
        ];
    }
}
