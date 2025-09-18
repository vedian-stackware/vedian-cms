<?php

namespace App\Http\Controllers;

use App\Enumerations\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Articles\ArticleRequest;
use App\Models\Article;
use App\Models\User;
use Illuminate\Support\Str;
use Inertia\Inertia;
use function dd;
use function json_decode;
use function redirect;
use function response;

class HomepageController extends Controller
{
    public function index(?string $slug = '')
    {
        $slug = Str::slug($slug, '-');

        // TODO: This should be retrieved from settings
        if (empty($slug))
            $article = Article::first();
        else
            $article = Article::findBySlug($slug);

        if (
            !$article instanceof Article || $article->status !== Status::PUBLISHED
        ) {
            return redirect(route('home'));

        }

        return Inertia::render('home', [
            'id' => $article->id,
            'article' => $article,
            'data' => $article->content
        ]);
    }
}
