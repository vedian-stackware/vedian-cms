<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'author_id',
        'parent_id',
        'status',
        'template',
        'featured_image',
        'excerpt',
        'slug_override',
        'published_at',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo(Article::class, 'parent_id');
    }

    protected function casts()
    {
        return [
            'published_at' => 'timestamp',
        ];
    }
}
