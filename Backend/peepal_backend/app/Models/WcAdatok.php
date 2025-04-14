<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WcAdatok extends Model
{
    use HasFactory;

    public function kerulet(){
        return $this->belongsTo(Keruletek::class);
    }

    public function felhasznalo(){
        return $this->belongsTo(User::class);
    }

    protected $table = 'wc_adatok';

    protected $fillable = [
        'nev',
        'kerulet_id',
        'kozeli_megall',
        'akadalym',
        'ar',
        'nyitva',
        'hossz_koord',
        'szel_koord',
        'utvonal',
        'felhasznalo_id'
    ];
    
}
