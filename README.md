# agenda-app
This web application displays the agenda of the particular event. 
The main goal of this project is to learn React.

## technologies
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Fake server was mocking with [json-server](https://github.com/typicode/json-server)
* Styled with [Styled Components](https://styled-components.com/)

## screenshots
* Workshops are grouped by day(choose using select element) and time. Each workshop is assigned a tag (level).
![dashboard](https://github.com/awysocka/agenda-app/blob/master/readme-img/Dashboard.jpg)
* When element is open more information is showing.
![shows open elements](https://github.com/awysocka/agenda-app/blob/master/readme-img/Open-elements.jpg)

## setup
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/awysocka/agenda-app.git

# Go into the repository
$ cd agenda-app
# Go into server folder and run server
$ cd server
$ run server: json-server --watch db.json
# Change to user-app folder
$ cd ../user-app
$ instal dependencies: npm install
$ run project: npm start

```

## status
* in progress
* in the future I have plan to add admin-app to manage event
