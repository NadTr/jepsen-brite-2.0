# Jepsen-Brite-2.0

You can see the website on [heroku](https://food-event-2.herokuapp.com/)

This project follow directly the project [Jepsen-Brite](https://github.com/NadTr/jepsen-brite) but we had to take the finished project of another team : you can see it [here](https://github.com/MonticelliRomain/jepsen-brite)

To see [the instructions](https://github.com/NadTr/jepsen-brite-2.0/blob/master/Instructions.md)


## Install
<!-- ### Comment these line:

App>Console>Kernel.php
 line 30 to 51

Config>database.php
 line 76 to 85 -->

### Make command:

* ` composer install`
* ` php artisan key:generate `
* ` php artisan jwt:secret  `
* ` npm install  `
* ` npm run watch  `



## Database
copy paste file ..env.exemple and rename .env
change date for your database connect

make command :
*  ` docker-compose up  `
*  ` php artisan migrate  ` create the user table

## application

 ` php artisan serve  `
