## First Step (Unit test for server)

Before start running, you need to install Node.js and install node packages for node command.

    npm install

Next, you have to install node packages for server.

    cd .\server\

    npm install

You can test api server with the following command.

    npm run test

## Seconed Step (Interact with fron-end)

  you have to install node packages for front-end.

      cd .\client\

      npm install

  If you want to interact with server and front-end app, you have to start running the server.

  You can start running the server with the following command.

      npm run start

## project description

This project is an application to calcalate sum, average, standard deviation of the requst data from csv file format.

 --Front-end
Font-end(app) made by using create-react-app and mui library.

It works on default port 3000.

--Server

Server made by using Node.js and express.

It works on port 5000

There are two Restful api such as "api/auth/signin" and "api/calculate".
