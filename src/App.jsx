import React, { useState, useMemo } from "react";
import { CssBaseline, Container, Snackbar } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import WelcomeScreen from "./components/WelcomeScreen";
import PokemonCard from "./components/PokemonCard";
import LikedPokemon from "./components/LikedPokemon";
import DarkModeToggle from "./components/DarkModeToggle";
import { lightTheme, darkTheme } from "./theme";
import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";
import "./App.css";

// This is the main component for our application.
const App = () => {
  // State variables for managing application state.
  const [started, setStarted] = useState(false); // Indicates whether the user has started the application.
  const [likedPokemon, setLikedPokemon] = useState([]); // Array to store liked Pokémon.
  const [darkMode, setDarkMode] = useState(false); // Indicates whether dark mode is enabled.
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Controls the visibility of the snackbar.
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message to display in the snackbar.

  // Handler function to start the application.
  const handleStart = () => setStarted(true);

  // Handler function to add a Pokémon to the liked list.
  const handleLike = (pokemon) => {
    setLikedPokemon([...likedPokemon, pokemon]);
    setSnackbarMessage(`${pokemon.name} was liked!`);
    setSnackbarOpen(true);
  };

  // Handler function to remove a Pokémon from the liked list.
  const handleDislike = (pokemon) => {
    setSnackbarMessage(`${pokemon.name} was disliked!`);
    setSnackbarOpen(true);
  };

  // Handler function to toggle dark mode.
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.dataset.theme = darkMode ? "light" : "dark"; // Sets the theme for the body based on dark mode status.
  };

  // Memoized custom theme based on dark mode status.
  const customTheme = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode]
  );

  // Handler function to close the snackbar.
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Render the application UI.
  return (
    <MUIThemeProvider theme={customTheme}>
      <CssBaseline /> {/* Reset CSS for consistent styling across browsers. */}
      <div className="app">
        {/* Application AppBar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Pokémon
            </Typography>
            {/* Dark mode toggle button */}
            <DarkModeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Toolbar>
        </AppBar>
        {/* Render either WelcomeScreen or main content based on application state */}
        {!started ? (
          <WelcomeScreen onStart={handleStart} />
        ) : (
          <Container>
            {/* Main content of the application */}
            <PokemonCard onLike={handleLike} onDislike={handleDislike} />
            <LikedPokemon likedPokemon={likedPokemon} className="liked-card" />
          </Container>
        )}
        {/* Snackbar for displaying messages to the user */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
        />
      </div>
    </MUIThemeProvider>
  );
};

export default App;
