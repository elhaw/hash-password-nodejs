# Hashing password in node js app

This project shows how to hasg password before saving them in your database.



## Running project

## Manual

You need to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed.


# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.

### Structure

<pre> 
/resources/
|-- admin
|   |-- admin.controller.js
|   |-- admin.model.js
|   |-- admin.route.js
|   `-- routers
|
|-- config
|   |-- dev.js //database url
|   
|-- util
|   |-- db.js  // database connect
|
`-- index.js
</pre> 

# API Endpoints

```
GET http://localhost:3000/admin/register //add admin 
GET http://localhost:3000/admin/login // admin login 

```
