<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Keruletek extends Model
{
    public function wcAdatok(){
        return $this->hasMany(WcAdatok::class);
    }

    protected $table = 'keruletek';
}
