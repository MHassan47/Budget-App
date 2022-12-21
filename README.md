# Budget App

A budgeting app that allows users to securely track their finances at a glance using wonderful visual libraries that make viewing data simple

# Features

Users are able to:

Sign up, login and logout  
Add credit cards on file  
Add transactions such as expenditures or income  
View a graph on their month-to-month income/expense
View a calendar- add/delete events  
Edit their personal details

# Setup

Clone repo
Rename the .envexample to .env and add your MONGO_URI

The project is made up of two running servers:

Client Server:

Cd into client directory
Install dependencies using npm install (some dependencies will require --legacy-peer-deps so include it in the command)  
Start the server with `npm start` command

Backend Server:

Cd into server directory
Install dependencies using npm install
Setup .env file using example.env as a refence
Start the server with `npm run start`

# Dependencies

react: 18.2.0  
redux: ^4.2.0,  
@mui/x-data-grid: ^5.17.14",  
@fullcalendar/react: ^5.11.3,  
react-router-dom:6.3.0  
@material-ui/core: 4.12.4  
node-sass: ^7.0.3,  
react-circular-progressbar: ^2.1.0,  
react-credit-cards: ^0.8.3,  
moment: ^2.29.4,  
axios: ^0.27.2  
express: 4.18.1  
cors: ^2.8.5  
jsonwebtoken: ^8.5.1  
bcryptjs: ^2.4.3  
dotenv: ^16.0.3  
mongoose: ^6.8.0  
nodemon: 2.0.19  
morgan: 1.10.0  
ws: 7.5.8
