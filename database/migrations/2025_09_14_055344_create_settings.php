<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();


            // Basic site identity
            $table->string('title');                  // Site title
            $table->string('tagline')->nullable();    // Short tagline
            $table->string('logo')->nullable();       // Logo image URL
            $table->string('favicon')->nullable();    // Favicon URL
//
//            // Contact info
//            $table->string('email')->nullable();
//            $table->string('phone')->nullable();
//            $table->string('address')->nullable();

            // SEO defaults
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('og_image')->nullable();
            $table->string('og_site_name')->nullable();

            // Social links
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('youtube')->nullable();

            // Site behavior / appearance
//            $table->string('theme')->nullable();       // e.g., default, dark, custom
            $table->boolean('maintenance_mode')->default(false);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('site_settings');
    }
};
