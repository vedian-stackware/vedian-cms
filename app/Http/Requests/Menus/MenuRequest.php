<?php

namespace App\Http\Requests\Menus;

use App\Models\Article;
use Illuminate\Foundation\Http\FormRequest;
use App\Enumerations\Status;
use App\Enumerations\ContentType;

class MenuRequest extends FormRequest
{
    public function rules()
    {

        return [
            'name' => ['required'],
            'items' => ['nullable', 'array'],
            'items.*.id' => ['nullable'],
            'items.*.article_id' => ['required', 'exists:articles,id'],
            'items.*.title' => ['required'],
            'items.*.slug' => ['required'],
            'items.*.href' => ['required'],
            'items.*.icon' => ['nullable'],


            'actions' => ['nullable', 'array'],
            'actions.*.id' => ['nullable'],
            'actions.*.article_id' => ['required', 'exists:articles,id'],
            'actions.*.title' => ['required'],
            'actions.*.slug' => ['required'],
            'actions.*.href' => ['required'],
            'actions.*.icon' => ['nullable'],
        ];
    }

    public function authorize()
    {
        return true;
    }
}
