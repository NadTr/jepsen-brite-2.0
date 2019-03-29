<?php

namespace App\Http\Controllers;

use App\Event;
use App\User;
use App\User_Event;
use Illuminate\Http\Request;
use Illuminate\Foundation\Console\EventMakeCommand;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $event = Event::all();

        return response()->json($event);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'date' => 'required',
            'description' => 'required'
        ]);

        $event = Event::create($request->all());

        return response()->json([
            'message' => 'Great success! New event created',
            'Event' => $event
        ]);
    }

    public function search(Request $request, $offset, $limit){

        if ($request->has('id')) {
            
            $res = Event::find($request->input('id'));
            return $res ? $res : 'raté.';
        }
        
        elseif ($request->has('string')) {
            
            $res = Event::where(
                'name', 'LIKE', '%'.$request->input('string').'%')->orWhere(
                'date', '<=', $request->input('string'))->skip($offset*$limit)->take($limit)->get();
                
            return $res ? $res : 'raté.';
         } 
       
        return 'coucou';
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return $event;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    // public function edit(Event $event, $id)
    // {
    //     $event = Event::find($id);
    //     return view('event.edit', compact('albums'));
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $request->validate([
            'name'       => 'nullable',
            'date' => 'nullable',
            'description' => 'nullable'
         ]);
 
         $event->update($request->all());
 
         return response()->json([
             'message' => 'Great success! Event updated',
             'Event' => $event
         ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Successfully deleted event!'
        ]);
    }

    public function inscription (Request $request, Event $event){

        $userEvent = new User_Event;
        $userEvent['events_id'] = $event->id;
        $userEvent['users_id'] = auth('api')->user()->id;

        $userEvent->save();

        return 'Success';

    }
}
