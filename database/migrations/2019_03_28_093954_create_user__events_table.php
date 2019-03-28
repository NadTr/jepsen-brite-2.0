<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user__events', function (Blueprint $table) {
            $table->integer('users_id')->unsigned();
            $table->integer('events_id')->unsigned();
            //$table->integer pour rappeler avant l'event
            $table->foreign('users_id')->references('id')->on('users')
                  ->onDelete('cascade');
            $table->foreign('events_id')->references('id')->on('events')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user__events');
    }
}
