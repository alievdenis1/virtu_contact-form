<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

\Illuminate\Support\Facades\Auth::routes();

Route::group(['middleware' => 'auth'], function() {
    Route::get('/app', function () {
        return view('form');
    })->name('app');

    Route::get('/settings', [App\Http\Controllers\UserSettingsController::class, 'index']);
    Route::post('/settings', [App\Http\Controllers\UserSettingsController::class, 'update']);
});

Route::group(['middleware' => 'role:Admin'], function() {
    Route::get('/admin', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
});

