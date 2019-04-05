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

<<<<<<< HEAD
// Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'ApiAuthController@logout');
    Route::post('refresh', 'ApiAuthController@refresh');
    Route::get('user', 'ApiAuthController@user');
    Route::post('events/create', 'EventController@store')->name('events.store');
    Route::put('events/{event}/inscription', 'EventController@inscription')->name('events.inscription');
    Route::get('events', 'EventController@index')->name('events.index');
    Route::get('events/search/{offset}/{limit}', 'EventController@search')->name('events.search');
    Route::delete('events/{event}', 'EventController@destroy')->name('events.destroy');
    Route::put('events/{event}', 'EventController@update')->name('events.update');
// });
Route::post('login', 'ApiAuthController@login');
Route::get('events/{event}', 'EventController@show')->name('events.show');
Route::get('events/{offset}/{limit}', 'EventController@pastEvent')->name('events.pastevent');
=======
Route::middleware('auth:api')->group(function () {
    
    Route::post('/logout', 'ApiAuthController@logout');
    Route::post('/refresh', 'ApiAuthController@refresh'); 
    Route::post('/events/create', 'EventController@store')->name('events.store');
    Route::get('/events', 'EventController@index')->name('events.index');
    Route::put('/events/{event}/inscription', 'EventController@inscription')->name('events.inscription');
    Route::get('/events/search/{offset}/{limit}', 'EventController@search')->name('events.search');
    Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');
    Route::put('/events/{event}', 'EventController@update')->name('events.update');
    Route::get('/events/{event}', 'EventController@show')->name('events.show');
    //Route::get('/events/userslist/{event}', 'EventController@usersList')->name('events.userlist');
    Route::get('/events/{offset}/{limit}', 'EventController@pastEvent')->name('events.pastevent');
});

Route::post('/register','Auth\RegisterController@register');

Route::post('/login','ApiAuthController@login')->name('events.login');
Route::get('/user','ApiAuthController@user')->name('app.user');
// Auth::routes();
>>>>>>> dev
