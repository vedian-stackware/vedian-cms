<?php

namespace App\Http\Controllers\Menus;

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

class MenuController extends Controller
{
    public function index()
    {
        return Inertia::render('menus', [
            'articles' => Article::linkables()
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('menus/show', [
            'id' => $article->id,
            'article' => $article,
            'data' => ['content' => $article->content]
        ]);
    }

    public function create()
    {
        return Inertia::render('menus/create', [
            'authors' => User::all(),
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function store(ArticleRequest $request)
    {

        $data = array_merge($request->validated(), $request->all());
        $data['slug'] = Str::slug($data['title'], '-');
        $data['content'] = (object)json_decode($data['content']);

        $article = Article::create($data);

        return redirect()->route('menus.create');
    }
}
