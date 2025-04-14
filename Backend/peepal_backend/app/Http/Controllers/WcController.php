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

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nev' => 'required|string',
            'kerulet_id' => 'required|integer|exists:keruletek,id',
            'kozeli_megall' => 'required|string',
            'akadalym' => 'nullable|boolean',
            'ar' => 'nullable|numeric',
            'nyitva' => 'nullable|string',
            'utvonal' => 'required|string',
            'koordinatak' => 'required|string',
            'felhasznalo_id' => 'nullable|numeric'
        ]);

        try {
            $szelesseg = null;
            $hosszusag = null;

            if (!empty($validatedData['koordinatak'])) {
                $koordinatak = explode(',', $validatedData['koordinatak']);

                if (count($koordinatak) == 2) {
                    $hosszusag = trim($koordinatak[0]);
                    $szelesseg = trim($koordinatak[1]);

                    if (!is_numeric($szelesseg) || !is_numeric($hosszusag)) {
                        return response()->json([
                            'message' => 'Érvénytelen a koordináták formátuma'
                        ], 422);
                    }
                }
            }

            $mosdo = WcAdatok::create([
                'nev' => $validatedData['nev'],
                'kerulet_id' => $validatedData['kerulet_id'],
                'kozeli_megall' => $validatedData['kozeli_megall'],
                'akadalym' => $validatedData['akadalym'],
                'ar' => $validatedData['ar'],
                'nyitva' => $validatedData['nyitva'],
                'utvonal' => $validatedData['utvonal'],
                'szel_koord' => $szelesseg,
                'hossz_koord' => $hosszusag,
                'felhasznalo_id' => $validatedData['felhasznalo_id'] ?? null
            ]);

            return response()->json([
                'message' => 'Sikeres rögzítés',
                'data' => $mosdo
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hiba történt a mentés során',
                'error' => $e->getMessage()
            ], 500);
        }
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
