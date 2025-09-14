<?php

namespace App\Http\Controllers\Articles;

use App\Enumerations\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Articles\ArticleRequest;
use App\Models\Article;
use App\Models\User;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('articles', []);
    }

    public function create()
    {
        return Inertia::render('articles/create', [
            'authors' => User::all(),
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function store(ArticleRequest $request)
    {
        $article = Article::create($request->validated());
        return redirect(route('articles.create'));
    }
}
