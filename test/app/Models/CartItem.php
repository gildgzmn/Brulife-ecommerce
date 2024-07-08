<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'status',
    ];

    public function user()
    {
        //Retrieves the associated User model
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        //Retrieves the associated Products model
        return $this->belongsTo(Products::class);
    }
}
