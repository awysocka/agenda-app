# agenda-app
This web application displays the agenda of the particular event. 
The main goal of this project is to learn React.

## technologies
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Backend server is mocked with [json-server](https://github.com/typicode/json-server)
* Styled with [Styled Components](https://styled-components.com/)

## screenshots
* Workshops are grouped by day (choose using select element) and time. Each workshop can be assigned a tag (level).
![dashboard](https://github.com/awysocka/agenda-app/blob/master/readme-img/Dashboard.jpg)

* When element is expanded more details is visible.
![shows open elements](https://github.com/awysocka/agenda-app/blob/master/readme-img/Open-elements.jpg)

## setup
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/awysocka/agenda-app.git
# Go into the repository
$ cd agenda-app

# Go into server folder
$ cd server
# Run mocked backend server
$ json-server --watch db.json

# Go into user-app folder
$ cd ../user-app
# Instal dependencies 
$ npm install
# Run the project 
$ npm start

```

## status
* in progress
* in the future I have plan to add admin-app to manage the presanted data
