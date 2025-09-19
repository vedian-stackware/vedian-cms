<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuItem extends Model
{
    protected $fillable = ['article_id', 'title', 'slug', 'href', 'icon', 'is_action'];

    public function scopeIsAction($query) {
        return $query->where('is_action', 1);
    }

    public function scopeIsNotAction($query) {
        return $query->where('is_action', 0);
    }

    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class);
    }

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(MenuItem::class, 'parent_id', 'id');
    }
}
