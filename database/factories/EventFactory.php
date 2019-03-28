<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name'        => $faker->name(),
        'date'        => $faker->date($format = 'Y-m-d', $max = 'now'),
        'description' => $faker->name()
    ];
});
