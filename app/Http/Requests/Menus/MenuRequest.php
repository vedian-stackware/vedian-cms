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
            'items' => ['required', 'array'],
            'items.*.article_id' => ['required', 'exists:articles,id'],
            'items.*.title' => ['required'],
            'items.*.slug' => ['required'],
            'items.*.href' => ['required'],
            'items.*.icon' => ['nullable'],
        ];
    }

    public function authorize()
    {
        return true;
    }
}
