<?php

namespace App\Http\Controllers\Config;

use App\Enumerations\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Menus\MenuRequest;
use App\Models\Article;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use function array_merge;
use function collect;
use function dd;
use function json_decode;
use function redirect;
use function response;

class TemplateController extends Controller
{
    public function template()
    {
        return Inertia::render('config/template', [
            'pages' => Article::linkables(Status::PUBLISHED),
            'statuses' => Status::cases(),
            'defaultStatus' => Status::draft()
        ]);
    }

    public function store(Request $request)
    {

    }
}
