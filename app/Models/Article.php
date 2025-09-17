<?php

namespace App\Models;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\HasCollection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use function is_array;
use App\Utils\ArticleLink;

class Article extends Model
{
    use HasFactory, SoftDeletes, HasCollection;

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

    public static function findBySlug(string $slug)
    {
        return self::where('slug', $slug)->firstOrFail();
    }

    public function getHrefAttribute()
    {
        return url($this->slug);
    }

    public static function linkables()
    {
        return ArticleLink::collect();
    }

    public function linkable()
    {
        return ArticleLink::from($this);
    }

    protected function casts()
    {
        return [
            'published_at' => 'timestamp',
            'content' => 'json',
            'status' => \App\Enumerations\Status::class,
        ];
    }
}
