<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
        'date',
        'description'
    ];
    
    public function users(){

        return $this->belongsToMany(User::class, 'user_event');
    }
}