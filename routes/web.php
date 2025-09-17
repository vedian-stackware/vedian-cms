<?php

use App\Http\Controllers\Articles\ArticleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomepageController;

Route::get('/{slug?}', [HomepageController::class, 'index'])->name('home');

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

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
