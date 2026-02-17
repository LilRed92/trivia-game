# Trivia Game

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&logoSize=%C2%A0auto&style=for-the-badge) ![Vite](https://img.shields.io/badge/vite-%239135FF.svg?style=for-the-badge&logo=vite&logoColor=black) ![NodeJS](https://img.shields.io/badge/node.js-%235FA04E.svg?style=for-the-badge&logo=node.js&logoColor=black) ![Express.js](https://img.shields.io/badge/express.js-%2361DAFB.svg?style=for-the-badge&logo=express&logoColor=black) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=black) ![License: MIT](https://img.shields.io/badge/MIT-blue.svg?&style=for-the-badge)

A full-stack trivia application that allows users to test their knowledge across various categories and difficulty levels. This project utilizes a React frontend and a Node.js/Express backend to interface with the Open Trivia Database.

## Features

- **Customizable Gameplay**: Add number of questions then select from multiple categories (e.g., Film, Music, Video Games), difficulty levels, and question types.
- **Dynamic Question Retrieval**: Fetches questions in real-time from the Open Trivia Database API.
- **Score Calculation**: Tracks user performance (logic in development).
- **Game Setup**: Interactive form to configure the game session.
- **Developer Tools**: Includes a custom commit reminder notification system for local development.

## Screenshots

![App Screenshot](path/to/screenshot.png)

## GIF



## Tech Stack

**Frontend**
* [React](https://reactjs.org/) (v19)
* [Vite](https://vitejs.dev/) - Build tool and development server

**Backend**
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/) - Web framework
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing request bodies
* [Cors](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing
* [Nodemon](https://nodemon.io/) - Development utility

## API Reference

### Get Trivia Questions
Fetches a list of trivia questions from the Open Trivia Database API based on user parameters.

* [API configuration URL](https://opentdb.com/api_config.php)
* [API base URL](https://opentdb.com/api.php?)

```http
GET /trivia/game
```

| Parameter  | Type   | Description                               |
| :----------| :----- | :---------------------------------------- |
| amount     | string | Number of questions to retrieve           |
| category   | string | ID of the category (e.g., "10" for Books) |
| difficulty | string | Difficulty level (easy, medium, hard)     |
| type       | string | Type of question (multiple, boolean)      |


### Get Categories Questions
* Current version: Fetches the categories available from hard code in ```categories.js```.
* Future feature: Will fetch the categories available from the Open Trivia Database API Helper Tool
for Category Lookup found at [Open Trivia API Category Lookup](https://opentdb.com/api_category.php)

```http
GET /trivia/categories
```

## Environment Variables
To run this project, you may need to add the following environment variables to your .env file in the server directory:

```PORT``` - The port the server should run on (defaults to 3000)

## Run Locally
Clone the project
```bash 
git clone [https://github.com/LilRed92/trivia-game.git](https://github.com/LilRed92/trivia-game.git)
```

### Backend Setup
Go to the backend directory
```bash
cd server
```

Install dependencies
```bash
npm install
```

Start the server
```bash
npm start
# OR for development with hot-reload
npm run dev
```

### Frontend Setup
Open a new terminal and go to the frontend directory
```bash
cd client
```

Install dependencies
```bash
npm install
```

Start the client
```bash
npm run dev
```

## License
Distributed under the MIT License. See LICENSE for more information.