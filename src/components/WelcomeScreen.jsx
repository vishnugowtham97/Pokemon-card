import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for the background container
const BackgroundContainer = styled(Box)({
  height: "100vh", // Sets the height to full viewport height
  width: "100%", // Sets the width to full viewport width
  display: "flex", // Displays items in a flex container
  alignItems: "center", // Aligns items vertically at the center
  justifyContent: "center", // Aligns items horizontally at the center
  backgroundImage:
    "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg)", // Sets the background image
  backgroundSize: "contain", // Sets how the background image is scaled and displayed
  backgroundPosition: "center", // Sets the starting position of the background image
  backgroundRepeat: "no-repeat", // Prevents the background image from repeating
});

// Styled component for the overlay
const Overlay = styled(Box)({
  backgroundColor: "rgba(0, 0, 0, 0.90)", // Adds a dark overlay with 90% opacity
  padding: "20px", // Adds padding around the overlay content
  borderRadius: "10px", // Adds rounded corners to the overlay
  textAlign: "center", // Aligns text content at the center
});

// Styled component for the start button
const StartButton = styled(Button)({
  marginTop: "20px", // Adds top margin to the start button
});

// WelcomeScreen Component: Displays a welcome message and a start button
const WelcomeScreen = ({ onStart }) => (
  <BackgroundContainer>
    {/* Overlay with welcome message and start button */}
    <Overlay>
      <Typography variant="h2" component="h1" color="white" gutterBottom>
        Welcome to Pokémon
      </Typography>
      <Typography variant="h5" component="p" color="white" gutterBottom>
        Discover and choose your favorite Pokémon!
      </Typography>
      <Typography variant="body1" component="p" color="white" gutterBottom>
        Swipe through random Pokémon and decide which ones you like or dislike.
        Build your dream team and explore the amazing world of Pokémon!
      </Typography>
      {/* Start button */}
      <StartButton variant="contained" color="primary" onClick={onStart}>
        Start
      </StartButton>
      {/* Loader animation */}
      <Box className="loader_home">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </Box>
    </Overlay>
  </BackgroundContainer>
);

export default WelcomeScreen; // Exporting the component
