<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create.tsx();

        User::factory()->create([
            'name' => 'Tom van Tilburg',
            'email' => 'tom.vtilburg@outlook.com',
            'password' => Hash::make('12345678'),
        ]);
    }
}
