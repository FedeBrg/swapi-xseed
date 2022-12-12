
# Xseed Frontend Challenge 

Solution for the React challenge using the Star Wars API described [here](https://github.com/XseedSF/Frontend-challenge).

## Used resources

The main tools used for this project are:

- [Redux Toolkit](https://redux-toolkit.js.org/) for handling redux states, API requests and async chunks for easier cache managment
- [Material UI](https://mui.com/) for styling the application
## Live Demo

The application is currently deployed to a S3 bucket. This is done following CI/CD practices through github actions, each new commit to the code is automatically deployed to AWS.

To access the demo click [here](http://swapi-xseed-cicd.s3-website.us-east-2.amazonaws.com/)


## Installation
The project uses [Vite](https://vitejs.dev/) instead of create-react-app because of its speed in spinning up dev servers and superior build performance.

To install and run the application the process is still the same, after cloning the repository, run:


```bash
  cd swapi-xseed
  npm install
  npm run dev
```
Both install and run dev should finish significantly faster than with an aplication that uses create-react-app    

## Notes and comments
Some decisions were made throughout the development of the app. Among those, we can highlight:
- Inclusion of pagination. Despite not being specified or shown in design files, simple pagination was added to the system.
- Use of SnackBars/Toast messages. Adding and removing charactes from favourites was a little confusing, using these elements helps provide a better user experience

## GIF Demo

![Gif demo](https://media.giphy.com/media/NYLNmd2S4MdJcfokbQ/giphy.gif)
