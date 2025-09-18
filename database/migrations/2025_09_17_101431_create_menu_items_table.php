<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('href');
            $table->string('icon')->nullable();
//            $table->string('type')->nullable();

            $table->foreignId('menu_id')->constrained('menus');
            $table->foreignId('article_id')->nullable()->constrained('articles');
            $table->foreignId('parent_id')->nullable()->constrained('menu_items');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
