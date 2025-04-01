<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WcController;


Route::get('/mosdok', [WcController::class, 'index']);
Route::get('/mosdok/{id}', [WcController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);
