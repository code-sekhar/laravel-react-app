<?php
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/service', function () {
    return Inertia::render('Service');
});

Route::get('/blog',  [PostController::class, 'index']);

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('admin/Dashboard/Dashboard');
});

//backend
// Route::get(uri: '/posts', [PostController::class, 'index']);



