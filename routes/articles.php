<?php

use App\Http\Controllers\Articles\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::get('articles/{article}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
Route::put('articles/{article}/update', [ArticleController::class, 'update'])->name('articles.update');
Route::get('articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
Route::post('articles/store', [ArticleController::class, 'store'])->name('articles.store');
