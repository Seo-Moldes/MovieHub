# MovieHub

![web-capture.png](client/src/assets/img/web-capture.png)

## Project Description


MovieHub is a versatile application designed to streamline your movie management needs. Within this platform, you can effortlessly handle a curated list of movies. Each movie entry is enriched with essential details like its title, poster image, rating, and genre. MovieHub empowers you with a full range of operations, allowing you to Create, Read, Update, and Delete movies at your convenience.

While the frontend of MovieHub is skillfully crafted using a tech stack that includes React, Vite, and TypeScript, our primary focus lies in the backend architecture. Here, we delve deep into the realm of backend technologies such as Node.js, Express, MongoDB, Prisma, PostgreSQL, Auth0, and Cloudinary.

The frontend interface provides users with an intuitive way to view the entire movie collection. Every movie is showcased with its title, poster image, rating, and genre. You can seamlessly add new movies via a modal or a dedicated page. Simply input the movie's title, upload a poster image, specify its rating, and pick a genre. The power to update existing movie data or remove entries from the list is also right at your fingertips.

In essence, MovieHub delivers a comprehensive solution that harmoniously combines frontend and backend technologies to provide a delightful user experience, making movie management a breeze.
You can show it at https://github.com/Seo-Moldes/MovieHub


`#react` `#express` `#vite` `#node` `#typescript` `#postgres` `#prisma` `#cloudinary` `#backend` `#assembler-institute-of-technology` `#master-in-software-engineering` `#eliseomoldesdev.com` 

## Requirements

- Install Node.js and npm on your local machine, and Code Editor like Visual Code.
1. **NODE**: https://nodejs.org/es/download
2. **NPM**:  https://www.npmjs.com/package/npm
3. **Visual Code**: https://code.visualstudio.com/download

- Have basic knowledge of JavaScript and TypeScript.
- Familiarity with the MVC design pattern.
- Basic knowledge of MongoDB and Mongoose.
- Familiarity with Prisma.
- Basic knowledge of MongoDB.
- Familiarity with Prisma.
- Basic knowledge of PostgreSQL and MongoDB.
- Understanding of one-to-many and many-to-many relationships.
- Familiarity with Auth0.
- Basic knowledge of Express middleware.
- Familiarity with Cloudinary.
- Basic knowledge of file handling in Node.js.


## Installation

To get the MovieHub project up and running on your local machine, follow these steps:

Clone the repository from GitHub:


```bash
git clone https://github.com/Seo-Moldes/MovieHub
```

```bash
cd MovieHub

```

```bash
cd client

```

```bash
cd server

```

Install the project dependencies:

```bash
npm install
```
or 
```bash
npm i
```
or 
```bash
pnpm install
```
or 
```bash
yarn install
```
## How to use

```bash
npm run test
```

test: This script is used to run automated tests. In this case, it seems that no specific tests have been specified, and instead, it displays an error message and exits the process with an exit code of 1. You can add your automated tests here if you have any.

```bash
npm run commit
```
commit: This script adds all changes in the current directory to the staging area of Git and makes a commit. You can use this command to quickly commit all the changes you made. For example, you would run npm run commit to stage and commit the changes.

```bash
npm run dev
```
dev: This script is for local development. It uses nodemon to watch the .ts files in the src folder and restarts the server whenever it detects changes. ts-node executes the index.ts file, which means your application runs in development mode with TypeScript. To run this script, simply type npm run dev in your terminal.

```bash
npm run build
```

build: This script is responsible for compiling your TypeScript code into JavaScript. It uses rimraf to delete the dist folder (if it exists) and then uses tsc (TypeScript Compiler) to compile the TypeScript files in the src folder and generate the dist folder with the compiled JavaScript files. You can execute this script using npm run build.

```bash
npm run start
```

start: This script first runs the npm run build command, which compiles the TypeScript files into JavaScript in the dist folder. Then, it executes the index.js file located in the dist folder using node. In short, this script starts your application in production mode. To run this script, simply type npm start in your terminal.

Remember that to be able to run these scripts, you need to be in the directory of your project and have Node.js installed. Then, simply type the corresponding command in your terminal to execute each script according to your needs. For example, npm run dev for development mode or npm start for production mode.

```bash

PORT="YourPORT" 
MONGO_DB_URI="mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase"

MONGO_CLUSTER_URI="mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase"
SQL_CLUSTER_URI="postgresql://postgres:yourPasswordPGAdmin@localhost:5432/yourDatabase?schema=public"

DATA_SOURCE="mongodb??or/postgresql"

#auth0
APP_ORIGIN= "http://yourlocalhost/"
VITE_AUTH0_AUDIENCE="http://yourlocalhost/"
VITE_AUTH0_ISSUER=https://yourauth0issuer.us.auth0.com/

#CLOUDINARY
CLOUDINARY_NAME="yourCloudinaryName"
CLOUDINARY_API_KEY="yourCloudinaryApiKey"
CLOUDINARY_API_SECRET="yourCloudinaryApiSecret"

```

## Dependencies

The MovieHub project utilizes several libraries and technologies. Below are the main dependencies used in the project:


### Frontend Dependencies:

React: A popular JavaScript library for building user interfaces.
Vite: Vite is a development environment for modern web applications based on JavaScript and TypeScript. It stands out for its speed and efficiency in the process of development and construction of frontend projects.
Auth0 React SDK: An SDK that integrates Auth0 authentication into the React application.
React Router: A library for handling routing within the React application.


### Backend Dependencies:

Express: A fast and minimal web application framework for Node.js.
Prisma: An ORM used for database access and migration.
Auth0 Express Middleware: Middleware for Express to handle Auth0 authentication.
Cloudinary: A cloud-based service for storing and transforming media content.


#### Database:

MongoDB: A NoSQL database used to store movie data (prior to PostgreSQL migration).
#### Dev Dependencies:

TypeScript: A typed superset of JavaScript used to add type safety.
Nodemon: A utility that automatically restarts the Node.js server on file changes (for development).
ESLint: A tool for identifying and reporting on patterns found in JavaScript code.
Prettier: A code formatter used to enforce code style consistency.

## Social Media 


You can find me on LinkedIn, Facebook, and view my other projects on GitHub using the following links:

1. **LinkedIn**: https://www.linkedin.com/in/eliseomoldesdominguez/
3. **GitHub**: https://github.com/Seo-Moldes


## Support Resources


- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Auth0](https://auth0.com/)
- [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)

Always keep in mind that the primary objective of this project is to enhance your learning and practical skills. Embrace the opportunity to seek assistance whenever you encounter challenges.

Wishing you the best of luck as you embark on this journey!
