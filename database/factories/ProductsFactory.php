<?php
namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductInventory;
use App\Models\Discount;
use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductsFactory extends Factory
{
    protected $model = Products::class;

    public function definition()
    {
        return [
            'img' => $this->faker->imageUrl($width = 640, $height = 480),
            'name' => $this->faker->word,
            'desc' => $this->faker->sentence,
            'SKU' => $this->faker->unique()->numerify('SKU-#####'),
            'category_id' => ProductCategory::factory(),
            'inventory_id' => ProductInventory::factory(),
            'discount_id' => Discount::factory(),
            'price' => $this->faker->randomFloat(2, 1, 1000),
        ];
    }
}
