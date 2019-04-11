<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'name'        => $faker->sentence($nbWords = 3, $variableNbWords = true),
        'date'        => $faker->dateTimeAD(),
        'description' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'image'       => $faker->imageUrl($width = 600, $height = 250),
        'reminder'    => $faker->dateTimeAD(),
        'u too late'  => $faker->boolean,
        'author'      => factory ('App\User')->create()->id
    ];
});
