<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wc_adatok', function (Blueprint $table) {
            $table->id();
            $table->string('nev', 250);
            $table->string('kerulet', 250);
            $table->string('kozeli_megall', 250);
            $table->boolean('akadalym')->nullable();
            $table->integer('ar')->nullable();
            $table->string('nyitva', 250)->nullable();
            $table->double('hossz_koord');
            $table->double('szel_koord');
            $table->string('utvonal', 1000);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wc_adatok');
    }
};
