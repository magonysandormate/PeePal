<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('keruletek', function (Blueprint $t) {
            $t -> id();
            $t -> string('kerulet_nev');
        });

        Schema::create("felhasznalok", function (Blueprint $t){
            $t -> id();
            $t -> string("nev");
            $t -> string("email");
            $t -> string("felh_nev");
            $t -> string('jelszo');
            $t -> boolean('is_admin')->default(false);
            $t -> timestamps();
        });

        Schema::create('wc_adatok', function (Blueprint $table) {
            $table->id();
            $table->string('nev', 250);
            $table->foreignId('kerulet_id') -> references('id') -> on('keruletek');
            $table->string('kozeli_megall', 250);
            $table->boolean('akadalym')->nullable();
            $table->integer('ar')->nullable();
            $table->string('nyitva', 250)->nullable();
            $table->double('hossz_koord');
            $table->double('szel_koord');
            $table->string('utvonal', 1000);
            $table->foreignId('felhasznalo_id')->nullable()->references('id')->on('felhasznalok');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
