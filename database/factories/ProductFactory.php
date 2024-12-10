<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        $name = $this->faker->unique()->words(3, true);
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'stock' => $this->faker->numberBetween(0, 100),
            'brand' => $this->faker->company(),
            'model' => $this->faker->bothify('??###'),
            'processor' => $this->faker->randomElement(['Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7']),
            'ram' => $this->faker->randomElement(['4GB', '8GB', '16GB', '32GB']),
            'storage' => $this->faker->randomElement(['256GB SSD', '512GB SSD', '1TB HDD', '1TB SSD']),
            'graphics' => $this->faker->randomElement(['Integrated', 'NVIDIA GTX 1650', 'NVIDIA RTX 3050', 'AMD Radeon RX 560']),
            'category_id' => Category::factory(),
            'image' => 'products/default.jpg', // Asegúrate de tener una imagen por defecto
        ];
    }
}
