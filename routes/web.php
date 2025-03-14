<?php
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BannerController;
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
//Add Banner
Route::get('/add-banner', function (){
    return Inertia::render('admin/AddBanner/AddBanner');
});
Route::get('/banner', [BannerController::class, 'index']);
Route::delete('/banner/{id}', [BannerController::class, 'destroy'])->name('banner.destroy');
//backend

// Route::get(uri: '/posts', [PostController::class, 'index']);
Route::post('/banner', [BannerController::class, 'create'])->name('banner.store');;



