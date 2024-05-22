import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "../App.css";

// LikedPokemon Component: Displays the user's liked Pokémon.
const LikedPokemon = ({ likedPokemon }) => (
  <Box mt={5}>
    {/* Title for the section */}
    <Typography variant="h4" gutterBottom>
      Your Pokémon Dream Team
    </Typography>
    {/* Container for displaying liked Pokémon */}
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {/* Map through each liked Pokémon and display as a card */}
      {likedPokemon.map((pokemon) => (
        <Card
          key={pokemon.id} // Unique key for each card
          sx={{ maxWidth: 150, margin: 2 }} // Styling for the card
          className="liked-card" // Additional CSS class for styling
        >
          {/* Pokémon image */}
          <CardMedia
            component="img"
            alt={pokemon.name}
            height="140"
            // Image source using Pokémon ID
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
          {/* Pokémon name */}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {pokemon.name.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default LikedPokemon; // Exporting the component
