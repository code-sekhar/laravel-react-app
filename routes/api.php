<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BannerController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/post', [App\Http\Controllers\PostController::class, 'create']);
Route::delete('/banner/{id}', [BannerController::class, 'destroy'])->name('banner.destroy');

