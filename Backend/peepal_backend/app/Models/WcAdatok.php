<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WcAdatok extends Model
{
    use HasFactory;

    protected $table = 'wc_adatok';

    protected $fillable = ['nev', 'kerulet', 'kozeli_megall', 'akadalym', 'ar', 'nyitva', 'hossz_koord', 'szel_koord', 'utvonal'];
}
