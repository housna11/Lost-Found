<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Item;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->admin()->create([
            'name'=>'housna',
            'email'=>'housna@gmail.com',
        ]);
        $users= User::factory(9)->create();

        Item::factory(10)->create([
            'user_id' => function () {
                return User::all()->random()->id; 
            }
        ]);
    }
}
