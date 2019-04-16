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

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'ApiAuthController@login');

Route::get('/homepage', 'EventController@homepage')->name('events.homepage');
Route::get('/events', 'EventController@index')->name('events.index');
Route::get('/pastevents', 'EventController@past')->name('events.past');
// Route::get('/search', 'EventController@search')->name('events.search');
Route::get('/event/{event}', 'EventController@show')->name('events.show');
Route::get('/confirm/{token}', 'ApiAuthController@confirm');
Route::get('/sendreminders', 'AttendeeController@sendReminders');
//if authenticated
Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    //Authentication routes
    Route::post('logout', 'ApiAuthController@logout');
    Route::post('refresh', 'ApiAuthController@refresh');
    Route::post('me', 'ApiAuthController@me');
    // routes related to events
    Route::post('/events', 'EventController@store')->name('events.store');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
    // route that deal with attending or not
    Route::post('/attend/{event}', 'AttendeeController@store')->name('attendee.store');
    Route::delete('/attend/{event}', 'AttendeeController@destroy')->name('attendee.destroy');

});
