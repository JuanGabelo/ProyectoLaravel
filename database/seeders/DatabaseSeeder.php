<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(AdminUserSeeder::class);

        Category::factory(5)->create();

        Product::factory(50)->create();
    }
}
