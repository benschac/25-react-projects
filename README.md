# 25-react-projects

This project collection is based off of [25 React Projects](http://sean-smith.me/assets/portfolio/25-react-projects/index.html). Projects are typically started with [create-react-app](https://github.com/facebookincubator/create-react-app) & ES6 unless otherwise specified.  Please follow their documentation to start projects on your local machine.

### Project - Conway's Game of Life (React + Lodash)
This implementation was made with React and LoDash and emmulates the classic game of life. Here's a [link](https://www.youtube.com/watch?v=E8kUJL04ELA) to Conway explaining the game.  Each game is started with a random set of pixels either live or dead and changes the pixels life status with each generation.  Pixels change state based on their neighbors state of dead or alive.
![Conway's Game of Life](http://g.recordit.co/UrUpCMd6wl.gif)

### Project - Todo-List (Styling coming soon!) (React + Redux)
Made with Redux, the application separates concerns and organizes logic from presentation UI.  This application takes full advantage of Redux's store, dispatch and subscribe methods to send actions to state and send new data.

Users Can:
- Create a Todo
- Edit and Update a Todo
- Complete a Todo
- Delete a Todo
- Toggle between completed and active todos

![Todo List](http://g.recordit.co/uoR1VVcGXM.gif)


### Project - Recipe Box (React + LocalStorage API + Bootstrap)
Built with React.js using LocalStorage we can Create, Read, Update and Destroy Recipes.  This application heavily uses React's State and LifeCycle components in order to make this functionality possible.  Want to read more.  Check out my blog post on this project [here](https://medium.com/@benschac/fcc-leaderboard-and-understanding-state-9bb9a46821f#.pu2z15wqe).
![Recipe Box](http://g.recordit.co/c0WSZThWgo.gif)


### Project - Leader Board (React + Fetch API):
This project was built with React.js + Fetch API to pull data from an end point.  Taking advantage of React's, click events I was able to pass down click handlers which requested data from the API to the Users Row Component.
![Leader Board](http://g.recordit.co/esfWwPGZ1D.gif)

### Project - NHL Player Search (React + d3.js):
This project was built with react.js + d3.js to filter players based on age count, firstname, lastname and team.  Taking advantage of React's lifecycle methods users see a realtime update of a histogram while updating input.
![demo of NHL-player-search](http://g.recordit.co/eptjReH5EF.gif)

### Project - Markdown Viewer (React + Marked):
This project was built with React.js + Marked to render markdown.  Taking advantage of React's lifecycle methods users see a realtime update of the DOM.
![Markdown Generator](http://g.recordit.co/w1qaIy9rFn.gif)



