# agenda-app
Agenda-app is React web application. 

The app presents agenda of the event. Workshops are grouped by days (choosed using select element) and time. Each workshop can be assigned a tag (level). When particular workshop element is expanded more details is visible.

The application has a CRUD admin panel to manage data. After login it's possible to add, edit or delete particular workshop or tag and modify the basic event information like title or tags label.

The main goal of this project is to know React better.

![agenda-app](https://github.com/awysocka/agenda-app/blob/master/readme-img/Agenda-app.jpg)

## live demo
https://agenda-app-aw.netlify.app/

## technologies
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Styled with [Styled Components](https://styled-components.com/)
* Uses:
  - [React Hook Form](https://react-hook-form.com/)
  - [React Router](https://reactrouter.com/)
* Admin panel authenticated and authorized with [Auth0](https://auth0.com/)
* Deployed on [Netlify](https://www.netlify.com/)

## backend 
https://github.com/awysocka/agenda-app-backend

## local setup
1. Run backend server from that repository 
https://github.com/awysocka/agenda-app-backend
2. Clone this repository
  ```bash
  $ git clone https://github.com/awysocka/agenda-app.git
  ```
3. Go into the repository
  ```bash
  $ cd agenda-app
  ```
4. Instal dependencies
  ```bash
  $ npm install
  ```
5. Create account in [www.auth0.com](https://auth0.com/)
* Useful article which shows how to add user authentication to React and how to configure your account. [The Complete Guide to React User Authentication with Auth0](https://auth0.com/blog/complete-guide-to-react-user-authentication/?utm_source=pocket_mylist)
6. Create .env file in project root directory, paste the code below and set your Auth0 data
  ```bash
    REACT_APP_AUTH0_DOMAIN='ENTER YOUR DOMAIN'
    REACT_APP_AUTH0_CLIENT_ID='ENTER YOUR CLIENT ID'
    REACT_APP_AUTH0_AUDIENCE='ENTER YOUT AUDIENCE'
    REACT_APP_SERVER_URL=http://localhost:3003
    REACT_APP_ADMIN_URL=http://localhost:3000/admin
  ```
7. Run a local development environment
  ```bash
  $ npm start
  ```

## status
* in progress
* In the future I have plan to add tests and add more features.
