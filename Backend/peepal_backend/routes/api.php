<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WcController;


Route::get('/mosdok', [WcController::class, 'index']);
Route::get('/mosdok/{id}', [WcController::class, 'show']);
