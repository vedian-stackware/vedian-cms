<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = ['name'];
    protected $with = ['nav_items', 'action_items'];

    public function menu_items()
    {
        return $this->hasMany(MenuItem::class);
    }

    public function nav_items()
    {
        return $this->menu_items()->where('is_action', 0);
    }

    public function action_items()
    {
        return $this->menu_items()->where('is_action', 1);
    }
}
