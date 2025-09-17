<?php

use App\Http\Controllers\Menus\MenuController;
use Illuminate\Support\Facades\Route;

Route::get('menus/create', [MenuController::class, 'create'])->name('menus.create');
Route::get('menus/{article}', [MenuController::class, 'show'])->name('menus.show');
Route::post('menus/store', [MenuController::class, 'store'])->name('menus.store');
