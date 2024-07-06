<?php
namespace Database\Factories;

use App\Models\ProductInventory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductInventoryFactory extends Factory
{
    protected $model = ProductInventory::class;

    public function definition()
    {
        return [
            'quantity' => $this->faker->numberBetween(0, 1000),
        ];
    }
}
