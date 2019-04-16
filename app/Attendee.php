<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attendee extends Model
{
    protected $primaryKey = null;
    public $incrementing = false;

    protected $fillable = [
      'event_id',
      'user_id',
    ];
}
