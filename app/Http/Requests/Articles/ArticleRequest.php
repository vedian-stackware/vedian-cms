<?php

namespace App\Http\Requests\Articles;

use App\Models\Article;
use Illuminate\Foundation\Http\FormRequest;
use App\Enumerations\Status;

class ArticleRequest extends FormRequest
{
    public function rules()
    {
        $statuses = implode(',', Status::values());

        return [
            'title' => ['required'],
//            'slug' => ['nullable', 'unique:articles,slug'],
            'content' => ['nullable'],
            'author_id' => ['required', 'exists:users,id'],
//            'parent_id' => ['nullable'],
            'status' => ['required', "in:{$statuses}"],
//            'template' => ['nullable'],
//            'featured_image' => ['nullable'],
//            'excerpt' => ['nullable'],
//            'slug_override' => ['nullable'],
//            'published_at' => ['required', 'timestamp'],
        ];
    }

    public function authorize()
    {
        return true;
    }
}
