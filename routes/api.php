<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'ApiAuthController@logout');
    Route::post('refresh', 'ApiAuthController@refresh');
    Route::get('user', 'ApiAuthController@user');
    Route::post('events/create', 'EventController@store')->name('events.store');

    //Route::get('events/search', 'EventController@search');
    Route::put('events/{event}/inscription', 'EventController@inscription')->name('events.inscription');
    Route::get('events', 'EventController@index')->name('events.index');
    Route::get('events/search/{offset}/{limit}', 'EventController@search')->name('events.search');
    Route::delete('events/{event}', 'EventController@destroy')->name('events.destroy');
    Route::put('events/{event}', 'EventController@update')->name('events.update');
    Route::get('events/{event}', 'EventController@show')->name('events.show');
// });
Route::post('login', 'ApiAuthController@login');
