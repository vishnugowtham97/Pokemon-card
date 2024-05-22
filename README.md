# PokéSwipe App
## Description
PokéSwipe is a React-based web application that allows users to swipe through Pokémon cards, like or dislike them, and maintain a list of liked Pokémon. The app supports dark mode and includes a visually appealing welcome screen. Users receive feedback via a Snackbar notification when they like or dislike a Pokémon. The application uses Material-UI for UI components and styling.

## Features
Welcome Screen: A beautiful landing page that transitions to the main app on clicking "Start".
Swipe Functionality: Users can swipe through Pokémon cards and like or dislike them.
Liked Pokémon List: Maintains a list of Pokémon that the user has liked.
Dark Mode: Toggle between light and dark themes.
Snackbar Notifications: Provides feedback when a Pokémon is liked or disliked.
Hover Effects: Adds a hover effect to liked Pokémon cards.
Responsive Design: Works well on both desktop and mobile devices.
URL for Fetching Pokémon Data
The application fetches Pokémon data from the following API:

## URL for Fetching Pokémon Data
The application fetches Pokémon data from the following API:
https://pokeapi.co/api/v2/pokemon?limit=100

## Installation
git clone https://github.com/your-username/pokeswipe.git
cd pokeswipe

## Install dependencies:

npm install

## Start the development server:

npm start

## Open your browser and navigate to:
http://localhost:3000
## Usage:

Start the App: Click the "Start" button on the welcome screen to begin swiping through Pokémon cards.
Swipe through Pokémon: Use the like and dislike buttons to build your list of liked Pokémon.
View Liked Pokémon: Scroll down to see a list of all the Pokémon you have liked.

## Components

WelcomeScreen: Displays the welcome message and start button.
PokemonCard: Displays individual Pokémon cards with like and dislike buttons.
LikedPokemon: Shows a list of Pokémon that the user has liked.
DarkModeToggle: Allows the user to switch between light and dark themes.

## Themes
The application supports both light and dark themes, which can be toggled using the dark mode button in the app bar.
