# poke-shake-react
 A React API where you can search a Pokemon's name and it will return it's Pokedex description as if written by Shakspeare.

To get the front end of this app running locally:
* Download this project by heading to the main page and clicking "Code" > "Download Zip"
* Make sure to unzip the file 
* Open either Terminal on Mac or Console on Windows
* Use the cd command to chnage directories into the folder you just downloaded. An example would be: cd /Users/{your username}/Downloads/poke-shake-react-main
* Use the command: npm install
* Use the command: npm start

This should open up Chrome, or your default browser, to http://localhost:3000/. From here simply search a Pokemon's name to get going!

Please do note due to the Shakespeare translator API I am using there is a rate limit of 5 calls per hour. This means you will only be able to search for 5 different pokemon species per hour.
The APIs used to build this app are:
https://pokeapi.co & https://funtranslations.com/api/shakespeare
