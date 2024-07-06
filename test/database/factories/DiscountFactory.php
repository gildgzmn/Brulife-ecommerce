<?php
namespace Database\Factories;

use App\Models\Discount;
use Illuminate\Database\Eloquent\Factories\Factory;

class DiscountFactory extends Factory
{
    protected $model = Discount::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'desc' => $this->faker->sentence,
            'discount_percent' => $this->faker->randomFloat(2, 0, 100),
            'active' => $this->faker->boolean,
        ];
    }
}
