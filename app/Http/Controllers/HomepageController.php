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
    public function index(?string $slug = null)
    {
        if ($slug !== null)
            $article = Article::findBySlug('asdasda-asd-2345234234');
        else
            $article = Article::all()->last();

        if (!$article instanceof Article) {
            return response('', 404);
        }

        return Inertia::render('home', [
            'id' => $article->id,
            'article' => $article,
            'data' => ['content' => $article->content]
        ]);
    }
}
