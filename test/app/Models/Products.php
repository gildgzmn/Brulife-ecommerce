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
        'SKU',
        'desc',
        'category_id',
        'inventory_id',
        'discount_id',
        'price'
    ];
    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'category_id');
    }

    public function inventory()
    {
        return $this->belongsTo(ProductInventory::class, 'inventory_id');
    }

    public function discount()
    {
        return $this->belongsTo(Discount::class, 'discount_id');
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
