<?php

namespace App\Http\Controllers;

use App\Models\WcAdatok;
use Illuminate\Http\Request;

class WcController extends Controller
{
    public function index()
    {
        $mosdok = WcAdatok::with('kerulet')->get();
        return response()->json($mosdok);
    }

    public function show($id)
    {
        $wc = WcAdatok::find($id);

        if (!$wc) {
            return response()->json(['message' => 'Nem található'], 404);
        }

        return response()->json($wc);
    }
}
