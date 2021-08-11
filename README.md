PULL REQUEST: https://github.com/yazanbaker94/basic-api-server/pull/1

DEPLOYED VERSION ON HEROKU: https://yazan-basic-api-server.herokuapp.com/

DEPLOYED  QUERY: https://yazan-basic-api-server.herokuapp.com/people
https://yazan-basic-api-server.herokuapp.com/animal


![UML](LAB3.png "UML")

How do I install the app or library?

Clone repo on your local machine
Open terminal, run npm i
Run your postgress server
Create a database called 'testing'
Create an .env file and add your PORT='PORTNUMBER' to run the server on
Run ThunderBird, add a POST request localhost:PORT/people with firstName and lastName, and do the same for /animal, but use animalName, and send the POST request. 

After that, go /people and animal and you can see the data.

How do I test the app or library? Run localhost:PORT/people on your localhost to see it working with no errors.

You can add, delete, get, getOne, update.
