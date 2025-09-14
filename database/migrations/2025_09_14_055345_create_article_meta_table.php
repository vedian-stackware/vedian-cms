<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('article_meta', function (Blueprint $table) {
            $table->id();

            $table->foreignId('article_id')->constrained('articles')->onDelete('cascade');

            // Standard SEO
//            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('keywords')->nullable();
            $table->string('robots')->nullable();
            $table->string('googlebot')->nullable();
            $table->string('content_language')->nullable();

            // Open Graph
            $table->string('og_type')->nullable();
            $table->string('og_url')->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description')->nullable();
            $table->string('og_locale')->nullable();
//            $table->string('og_image')->nullable();
//            $table->string('og_site_name')->nullable();

            // Twitter Cards
//            $table->string('twitter_card')->nullable();
//            $table->string('twitter_url')->nullable();
//            $table->string('twitter_title')->nullable();
//            $table->string('twitter_description')->nullable();
//            $table->string('twitter_image')->nullable();
//            $table->string('twitter_creator')->nullable();

            // Canonical + favicon
            $table->string('canonical')->nullable();
//            $table->string('favicon')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('page_meta');
    }
};
