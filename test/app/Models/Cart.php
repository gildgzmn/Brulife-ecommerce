<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cart extends Model
{
    use HasFactory;


    public function cartItems() {
        return $this->hasMany(CartItem::class);
    }

    public function removeItem($itemId)
    {
        return $this->hasOne(CartItem::class)->where('id', $itemId)->delete();
    }
}
