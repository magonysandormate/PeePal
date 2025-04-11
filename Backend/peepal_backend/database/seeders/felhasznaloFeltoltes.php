<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FelhasznaloFeltoltes extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('felhasznalok')->insert([
            'nev' => 'Magony Sándor',
            'email' => 'magonys2006@gmail.com',
            'felh_nev' => 'peepal_admin',
            'jelszo' => Hash::make('123456'),
            'is_admin' => true,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
