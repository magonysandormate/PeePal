<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
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
            'nev' => 'requierd|string',
            'email' => 'requierd|email',
            'felh_nev' => 'requierd|string',
            'jelszo' => 'requierd|password',
            'is_admin' => 'required|boolean'
        ]);

        try {
            $felhasznalo = User::create([
                'nev' => $validatedData['nev'],
                'email' => $validatedData['email'],
                'felh_nev' => $validatedData['felh_nev'],
                'jelszo' => $validatedData['jelszo'],
                'is_admin' => $validatedData['is_admin']
            ]);

            return response() -> json([
                'message' => 'Sikeres rögzítés',
                'data' => $felhasznalo
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
