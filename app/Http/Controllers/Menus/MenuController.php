<?php

namespace App\Http\Controllers\Menus;

use App\Enumerations\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Menus\MenuRequest;
use App\Models\Article;
use App\Models\Menu;
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
            'menus' => Article::linkables(Status::PUBLISHED)
        ]);
    }

    public function pageList()
    {
        return response()->json(Article::linkables(Status::PUBLISHED));
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
            'pages' => Article::linkables(Status::PUBLISHED),
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function store(MenuRequest $request)
    {
        $menu = Menu::with('menu_items')->create($request->validated());
        $menuItems = $menu->menu_items()->createMany($request->validated()['items']);

        dd($menu->menu_items->toArray(), $menu->toArray());
        return redirect()->route('menus.create');
    }

    public function edit(Article $article)
    {
        return Inertia::render('menus/edit', [
            'article' => $article,
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function update(MenuRequest $request, Article $article)
    {

        $data = array_merge($request->validated(), $request->all());
        $data['slug'] = Str::slug($data['title'], '-');
        $data['content'] = (object)json_decode($data['content']);

        $article->fill($data);

        $article->save();

        return redirect()->route('menus');
    }
}
