<?php

use App\Http\Controllers\Config\TemplateController;
use Illuminate\Support\Facades\Route;


Route::get('config/template', [TemplateController::class, 'template'])->name('config.template');
Route::post('config/template/store', [TemplateController::class, 'store'])->name('config.template.store');
