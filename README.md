# Image Processing API

## Description

***

This project is an image processing API that resizes and saves images when the user adjusts the parameters of the URL and visits the page
* Images are loaded from the full folder
* The size of the images adapts to the parameter specifications of the URL
* Images are saved in the thumb folder
* Images are loaded from the thumb folder and displayed on the page
* The visited URL will be logged

## Using the Server

***

To install and start the Image Process API server, you have to enter the following commands into the terminal of Visual Studio Code in this directory 
* `npm install`
* `npm run start`
* The Image Process API server can be tested with the command `npm run test`
* The code can be customized with prettier and eslint using the commands `npm run prettier` and `npm run lint`

## Supported URLs

***

The names in the curly brackets represent the parameters

|  URL       |`http://localhost:3000/api/images?filename={filename}&width={width}&height={height}`  |
|:-----------:|:-----------:|
|**Parameter**|**filename** : You can select the image encenadaport, fjord or icelandwaterfall. - [string]<br>**width** : The width that is entered must be greater than zero. - [number]<br>**height** : The height that is entered must be greater than zero. - [number]