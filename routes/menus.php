<?php

use App\Http\Controllers\Menus\MenuController;
use Illuminate\Support\Facades\Route;

Route::get('menus/create', [MenuController::class, 'create'])->name('menus.create');
Route::post('menus/store', [MenuController::class, 'store'])->name('menus.store');
Route::get('menus/{menu}', [MenuController::class, 'show'])->name('menus.show');
Route::get('menus/{menu}/edit', [MenuController::class, 'edit'])->name('menus.edit');
Route::get('menus/{menu}/update', [MenuController::class, 'update'])->name('menus.update');
Route::get('menu/page-list', [MenuController::class, 'pageList'])->name('menus.pageList');
