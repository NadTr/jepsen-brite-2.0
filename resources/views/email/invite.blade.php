@component('mail::message')
# Hello dear foodie, <br>
{{$user}} has invited you to its event : **{{$event['event_title']}}** <br>
It will take place in *{{$event['event_location']}}* on {{substr($event['event_time'], 0, -9)}} at {{substr($event['event_time'],11, -3)}}.<br>
We hope to see you there!

@component('mail::button', ['url' => config('app.url') . '/invite/' . $event['id'], 'color' => 'success'])
Confirm your participation here!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
