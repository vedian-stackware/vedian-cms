<?php

namespace App\Utils;

use App\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use App\Enumerations\Status;
use App\Enumerations\ContentType;

class ArticleLink
{

    protected int $id;
    protected string $title;
    protected string $slug;
    protected string $href;
    protected Status $status;
    protected ContentType $type;
    protected Article $model;

    public function __construct(Article $item)
    {
        $this->id = $item->id;
        $this->title = $item->title;
        $this->slug = $item->slug;
        $this->href = $item->href;
        $this->status = $item->status;
        $this->type = $item->type;
        $this->model = $item;
    }

    public static function from(Article $article)
    {
        return (new self($article))->toArray();
    }

    public function model()
    {
        return $this->model;
    }

    public static function collect(?Status $status = null)
    {
        $articles = Article::select(['id', 'title', 'slug', 'status', 'type']);

        if ($status === null) {
            $articles->whereIn('status', [Status::PUBLISHED, Status::DRAFT]);
        }

        if ($status && $status !== Status::ALL) {
            $articles->where('status', $status);
        }

        return $articles
            ->get()
            ->map(function (Article $article) {
                return self::from($article);
            });
    }

    public function toArray()
    {
        return (object)[
            'article_id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'href' => $this->href,
            'status' => $this->status,
            'type' => $this->type,
            'model' => $this->model,
        ];
    }

}
