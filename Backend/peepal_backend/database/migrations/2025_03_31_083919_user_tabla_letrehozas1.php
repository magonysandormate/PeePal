<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create("users_table", function (Blueprint $t){
            $t -> id();
            $t -> string("nev");
            $t -> string("email");
            $t -> string("felh_nev");
            $t -> string('jelszo');
            $t -> boolean('is_admin')->default(false);
            $t -> timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("users_table");
    }
};
