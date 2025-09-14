<?php

use App\Enumerations\Status;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();

            // Core page info
            $table->string('title');
            $table->string('slug')->unique(); // for URL
            $table->longText('articles')->nullable();
            $table->string('type')->default('page'); // page, blog, comment, topic

            // Relations
            $table->foreignId('author_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('parent_id')->nullable()->constrained('articles')->onDelete('cascade'); // hierarchy

            // Page metadata
            $table->enum('status', Status::values())->default(Status::draft()); // draft, published, archived
            $table->string('template')->nullable(); // blade template or layout
            $table->string('featured_image')->nullable();

            // SEO helpers (basic, detailed ones go in page_meta)
            $table->string('excerpt')->nullable();
            $table->string('slug_override')->nullable();

            // Timestamps
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
