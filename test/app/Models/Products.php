<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'img',
        'name',
        'desc',
        'category_id',
        'inventory_id',
        'discount_id',
        'price'
    ];
    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function inventory()
    {
        return $this->belongsTo(ProductInventory::class);
    }

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

//     //stocks checker for cart
//  public function decreaseStock($quantity)
//     {
//         if ($this->stock >= $quantity) {
//             $this->stock -= $quantity;
//             $this->save();
//             return true;
//         }
//         return false;
//     }
}
