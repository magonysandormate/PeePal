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
            'akadalym' => 'required|boolean',
            'ar' => 'required|numeric',
            'nyitva' => 'required|string',
            'utvonal' => 'required|string'
        ]);

        WcAdatok::create([
            'nev' => $validatedData['nev'],
            'kerulet' => $validatedData['kerulet'],
            'kozeli_megall' => $validatedData['kozeli_megall'],
            'akadalym' => $validatedData['akadalym'],
            'ar' => $validatedData['ar'],
            'nyitva' => $validatedData['nyitva'],
            'nyitva' => $validatedData['nyitva']
        ]);

        return response() -> json([
            'message' => 'Sikeres rögzítés'
        ], 201);
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
