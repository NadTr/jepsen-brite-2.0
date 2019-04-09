<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_Event extends Model
{
    protected $fillable = [
        'user_id',
        'event_id',
        
    ];
}
