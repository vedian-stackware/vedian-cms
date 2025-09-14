<?php

use App\Http\Controllers\Articles\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::post('articles/create', [ArticleController::class, 'store'])->name('articles.store');
