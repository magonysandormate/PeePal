<?php

namespace App\Http\Controllers;

use App\Models\WcAdatok;
use Illuminate\Http\Request;

class HozzaadasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request -> validate([
            'nev' => 'required|string',
            'kerulet' => 'required|string',
            'kozeli_megall' => 'required|string',
            'akadalym' => 'nullable|boolean',
            'ar' => 'nullable|numeric',
            'nyitva' => 'nullable|string',
            'utvonal' => 'required|string',
            'koordinatak' => 'required|string'
        ]);

        try {
            $szelesseg = null;
            $hosszusag = null;

            if (!empty($validatedData['koordinatak'])) {
                $koordinatak = explode(',', $validatedData['koordinatak']);

                if (count($koordinatak) == 2) {
                    $szelesseg = trim($koordinatak[0]);
                    $hosszusag = trim($koordinatak[1]);

                    if (!is_numeric($szelesseg) || !is_numeric($hosszusag)) {
                        return response() -> json([
                            'message' => 'Érvénytelen a koordináták formátuma'
                        ], 422);
                    }
                }
            }

            $mosdo = WcAdatok::create([
                'nev' => $validatedData['nev'],
                'kerulet' => $validatedData['kerulet'],
                'kozeli_megall' => $validatedData['kozeli_megall'],
                'akadalym' => $validatedData['akadalym'],
                'ar' => $validatedData['ar'],
                'nyitva' => $validatedData['nyitva'],
                'utvonal' => $validatedData['utvonal'],
                'szel_koord' => $szelesseg,
                'hossz_koord' => $hosszusag
            ]);
    
            return response() -> json([
                'message' => 'Sikeres rögzítés',
                'data' => $mosdo
            ], 201);
        } catch (\Exception $e) {
            return response() -> json([
                'message' => 'Hiba történt a mentés során',
                'error' => $e -> getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
