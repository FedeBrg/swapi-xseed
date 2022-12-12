
# Xseed Frontend Challenge 

Solution for the React challenge using the Star Wars API described [here](https://github.com/XseedSF/Frontend-challenge).



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
## GIF Demo

![Demo Gif](https://s9.gifyu.com/images/SWAPI-demo.gif)
