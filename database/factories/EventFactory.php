<?php

use App\User;
use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
  $authors = User::all()->pluck('id')->toArray();

  return [
      'event_title'       => $faker->sentence($nbWords = 3, $variableNbWords = true),
      'event_time'        => $faker->dateTimeBetween('now', '+5 years'),
      'event_description' => $faker->sentence($nbWords = 6, $variableNbWords = true),
      'event_city'        => $faker->city(),
      'event_location'    => $faker->address(),
      'event_image'       => 'http://www.clairiereetcanopee.com/wp-content/uploads/2018/02/for%C3%AAt-clairi%C3%A8re-et-canop%C3%A9e.jpg',
      'event_video'       => null,
      'event_author'      => $faker->randomElement($authors),
      'reminder'          => $faker->date(),
      'reminder_sent'     => $faker->boolean($chanceOfGettingTrue = 50)
  ];
});
