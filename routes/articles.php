<?php

use App\Http\Controllers\Articles\ArticleController;
use Illuminate\Support\Facades\Route;

// Articles overview page

Route::get('articles/{status?}', [
    ArticleController::class, 'index'
])->name('articles');



Route::get('article/create', [ArticleController::class, 'create'])->name('articles.create');
Route::get('article/{article}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
Route::put('article/{article}/update', [ArticleController::class, 'update'])->name('articles.update');
Route::get('article/{article}', [ArticleController::class, 'show'])->name('articles.show');
Route::post('article/store', [ArticleController::class, 'store'])->name('articles.store');
