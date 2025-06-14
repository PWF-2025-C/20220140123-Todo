<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\TodoController;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user', function (Request $request) {
    return $request->user();
})-> middleware('auth:api');

// Login route (tidak perlu auth)
Route::post('/login', [AuthController::class, 'login']);

// Routes yang memerlukan autentikasi JWT
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [App\Http\Controllers\API\AuthController::class, 'logout']);
    Route::get('/todos/search', [TodoController::class, 'search']);
    Route::apiResource('/todos', App\Http\Controllers\API\TodoController::class);
});