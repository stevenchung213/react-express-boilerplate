# react-express-boilerplate

Basic boilerplate with current packages as of 3/5/2019.

** If using at a later date than the mentioned here, I recommend doing manual 'npm install (package name)' in terminal to retrieve the most current versions.  Please be aware of possible webpack configuration changes and account for them accordingly.**


1.  Run 'npm install' in root directory.
2.  Run 'npm run build' to compile React code into bundle.js via webpack.
    * webpack will watch for changes realtime so just keep this terminal open to continually compile.
    * 'npm run build:prod' is also usable to compile a production version (smaller file) of the build.
3.  Run 'npm start' to start Express server.



#troubleshooting

* if there are problems with 'npm start' it is likely due to not having nodemon installed.
    * you can either install nodemon in the project directory or globally to resolve this issue.
    * or you can simply go into package.json and change "start": "nodemon server/index.js" to "start": "node server/index.js" 
