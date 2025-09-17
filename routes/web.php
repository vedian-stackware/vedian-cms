<?php

use App\Http\Controllers\Articles\ArticleController;
use App\Http\Controllers\Menus\MenuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomepageController;


Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard overviewpage
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Articles overview page
    Route::get('articles', [
        ArticleController::class, 'index'
    ])->name('articles');

    require __DIR__ . '/articles.php';

    // Articles overview page
    Route::get('menus', [
        MenuController::class, 'index'
    ])->name('menus');

    require __DIR__ . '/menus.php';

});
Route::get('/{slug?}', [HomepageController::class, 'index'])->name('home');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
