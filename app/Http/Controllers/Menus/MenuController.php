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
            'menus' => Menu::all()
        ]);
    }

    public function pageList()
    {
        return response()->json(Article::linkables(Status::PUBLISHED));
    }

    public function show(Menu $menu)
    {
        return Inertia::render('menus/show', [
            'id' => $menu->id,
            'menu' => $menu,
//            'data' => ['content' => $menu->content]
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

        if (isset($request->items)) {
            $items = $request->validated()['items'];
            $menu->menu_items()->createMany($items);
        }

        return redirect()->route('menus.edit', $menu);
    }

    public function edit(Menu $menu)
    {
        return Inertia::render('menus/edit', [
            'pages' => Article::linkables(Status::PUBLISHED),
            'menu' => $menu,
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function update(MenuRequest $request, menu $menu)
    {
        $menu->update($request->validated());

        if (isset($request->items)) {
            $items = $request->validated()['items'];
            $menu->menu_items()->delete();
            $menu->menu_items()->createMany($items);
        }


        return Back();
//        return redirect()->route('menus');
    }
}
