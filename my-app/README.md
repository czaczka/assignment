# MyApp

## github link
- https://github.com/czaczka/assignment.git


## Running this git repository

Make sure to clone the repository. Once cloned run `npm install` in the root directory and the server directory. Once this is done run command `ng build` in root directory. Lastly run `node server.js` in the server directory. This will start the server on http://localhost:3000

## git layout

The git repository contains the main angular app along with the backend node server directory. Code is committed reguarly when a new feature is implemented and working correctly. A new branch will be initiated for phase 2 of the assignment and then merged back to the main branch. Changes would be pushed after every hour to maintain the integrity of the code.

## Data structures

Currently there are two main data structures. They can be found in /server/data and contain two JSON files. One is named 'users' and the other is named 'extendedUsers'. 'Users' contains an array of users with a username and password that is used for login verification. 'extendedUsers' is an array that contains information on the logged in users which is their 'id, 'email', 'username' and their 'role'. Due to time constraints I was unable to complete the rest of the data sturcture which would be an additional two files called 'groups' and 'channels' which would contain an array of data relating to the chat groups and channels and who is in them and what roles they play.

## REST API

### login route

- Route: /login
- Method: POST
- Parameters: username, pwd
- Return value: if data matches `alert("correct");` if data doesn't match `alert("email or password incorrect");`
- Technical explanation: login route receives a username and password from a login form which is parsed to route login and then checked against users.json to see if data matches. If it does it logs the user in otherwise it gives the user an error message.

### login after

- Route: /loginAfter
- Method: POST
- Parameters: username
- Return Value: id, username, email and role are parsed from the extendedUsers.json file. This route also updates the user details from the profile component

## Angular architecture

### Components

#### Home

This is the default route and contains the nav-bar links for the other components and nothing else.

#### Login

This component is accessed from the home page using the login button which navigates the user to the login screen where they are greeted with a username and password field. The user must enter the correct details and press submit. Once pressed a function 'submit()' is called which activates the route /login via http methods and verifies the users credentials if they are correct they will be redirected to the profile component if they are incorrect they will receive an alert instructing them that their username or password is incorrect.

#### Profile

This component can be accessed from the homepage or after the user is redirected from the login screen. If the user attempts to access the profile component without loggin in they will be given an alert message to login and then will be redirected to the login page. If the user is indeed logged in then they will see their user details such as their id, username, email and role. This data is accessed through the /loginAfter route which retrieves the users data by matching the username to an array of data in the extendedUsers.json file. The user can update their details and once the submit button is pressed the 'editfunc()' will be called which also uses the /loginAfter route to update the data in the extendedUsers.json file. There was plans to allow only certain data to be visible to users with a certain role by hiding DOM elements using ngif statements however this feature could not be successfully implemented.

#### Chat

This is currently an empty component and is reserved for phase two of the assignment

## Other features

### Logout

The user can logout from any page using the logout button on the nav-bar. This calls the `clear() {
  sessionStorage.clear();
  this.router.navigateByUrl("/login");
}` function in the app component and clears the session storage and redirects the user to login again.
