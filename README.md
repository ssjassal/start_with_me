# Start With Me

Start With Me is an app for a Not For Profit organzation.  This organzation wants to enable children to provide kindness and help across their communities.  This app allows children to register for their volunteer activities as well as associated school and accumulate points based on their value and time commitment.  They are able to view other activities to attend as well as other members to befriend and plan events.

## Getting Started

These instructions will help you access the site should you not wish to download a copy of the project. **You can access the app on my live site here: [Soniya Jassal (SSJassal) Live Site](https://mysterious-cove-64478.herokuapp.com/)**


Should you want to see the code and modify, these instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Please clone my repository for **start_with_me** from there you can download the package and install the modules too make modifications of your own. **You can access the respository here: [SSJassal Start With Me](https://github.com/ssjassal/start_with_me)**


### Prerequisites

For normal view of the app without a copy of the project you will need the following:

```
1. Working Browser(IE, Chrome, Mozilla, Firefox)
```

For editing while having a copy of the project for development you will the following:
```
1. Sublime Text or Atom (A text editor)
2. Github repository
3. Terminal prompt to work with Github 
4. Working Browser(IE, Chrome, Mozilla, Firefox)
5. Some knowledge of JavaScript, Jquery, HTML, CSS, Mongo, Mongoose, Yarn, NPM
6. Modules: Express, Express-Session, Body-Parser, Mongoose, Method-Overide, BCrypt
```
### Installing

Here are the steps to get a development environment up and running


1. Create a local development folder on your computer.
2. Go to github.com to create a Github profile and repository.
   Instructions can be found here: [Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
3. Configure your github profile in Terminal. 
   Instructions can be found here: [Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
4. Clone the wdir-projects repository above
5. Pull the wdir-projects folder into your local folder.
6. Open wdir-projects folder with your text editor
7. Open the index.html and open in browser
8. Open app.js and style.css to make further modifications
9. Save and add, commit, and push to your Github repository
   Instructions can be found here: [Recording Changes to a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

## Extended Features

This app could have various extended features, however these two are the in the forefront of updating:

* Google Map Integration
* Dynamic Progress Bar


The session portion of the app was the most difficult to implement, ensure menus and user visibility was correct, while updating the DB correctly.

### Google Map Integration

Adding Google Maps would make this app more robust for the location of the events for members to see how close they are in relation to where they are located.  Being able to search for events near their location or near a location they may be visiting.

### Dynamic Progress Bar

```<div class="progress">
				  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
				  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
				    50% Complete
			  		</div>
		  		</div>
```
The progress bar currently needs the amount and total value entered in. The app needs to be upgraded to dynamically add the points from each event for each user and show the progress.

## Built With

* [JavaScript](https://www.javascript.com/) - Language Used
* [JQuery](https://jquery.com/) - Language Used
* [Sublime Text](https://www.sublimetext.com/) - Text Editor
* [Apple Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) - Access to the Github Repository
* [Google Chrome](https://www.google.com/chrome/) - Used to display game
* [Github](https://github.com/) - Repository
* [NPM] (https://www.npmjs.com/) - Modules 

## Authors

* **Soniya Jassal** - *Initial work* - [SSJassal](https://github.com/ssjassal)

## Acknowledgments

* Hat tip to Amanda Capella, who aided in the build out of sessions.
