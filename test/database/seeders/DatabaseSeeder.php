<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\ProductCategory;
use App\Models\ProductInventory;
use App\Models\Discount;
use App\Models\Products;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        //...

        // Create product categories
        ProductCategory::factory()->count(10)->create();

        // Create product inventories
        ProductInventory::factory()->count(10)->create();

        // Create discounts
        Discount::factory()->count(10)->create();

        // Create products
        Products::factory()->count(50)->create();
    }
}
