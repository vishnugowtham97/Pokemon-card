import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import LikeButton from "./Button/LikeButton";
import { motion, AnimatePresence } from "framer-motion";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; // Import the ThumbUp icon from Material Icons
import ThumbDownIcon from "@mui/icons-material/ThumbDown"; // Import the ThumbUp icon from Material Icons
import "../App.css";

// PokemonCard Component: Displays a card with information about a Pokemon
const PokemonCard = ({ onLike, onDislike }) => {
  // State variables to manage Pokemon data and like/dislike status
  const [pokemon, setPokemon] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Function to fetch random Pokemon data
  const fetchPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
  };

  // Fetch Pokemon data on component mount
  useEffect(() => {
    fetchPokemon();
  }, []);

  // Display loader if Pokemon data is not yet fetched
  if (!pokemon) return <div className="loader"></div>;

  // Construct image URL for the Pokemon
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  // Handler for liking a Pokemon
  const handleLike = () => {
    setIsLiked(true);
    setTimeout(() => {
      onLike(pokemon);
      setIsLiked(false);
      fetchPokemon();
    }, 500);
  };

  // Handler for disliking a Pokemon
  const handleDislike = () => {
    setIsDisliked(true);
    setTimeout(() => {
      onDislike(pokemon);
      setIsDisliked(false);
      fetchPokemon();
    }, 500);
  };

  // Render Pokemon card
  return (
    <AnimatePresence>
      {!isLiked && !isDisliked && (
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          key={pokemon.id}
        >
          <Card className="main_card">
            {/* Like button */}
            <LikeButton />
            {/* Pokemon image */}
            <CardMedia
              className="selected_card"
              component="img"
              alt={pokemon.name}
              height="350px"
              image={imageUrl}
            />
            <CardContent>
              {/* Pokemon name */}
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name.toUpperCase()}
              </Typography>
              {/* Pokemon abilities */}
              <Box mt={2}>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {pokemon.abilities.map((ability) => (
                    <Chip
                      className="tags"
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                      }}
                      key={ability.ability.name}
                      label={ability.ability.name}
                    />
                  ))}
                </Box>
              </Box>
              {/* Pokemon types */}
              <Box mt={2}>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {pokemon.types.map((type) => (
                    <Chip
                      className="tags"
                      sx={{
                        backgroundColor: "yellow",
                        color: "black",
                      }}
                      key={type.type.name}
                      label={type.type.name}
                    />
                  ))}
                </Box>
              </Box>
              {/* Like and Dislike buttons */}
              <Box mt={2} display="flex" justifyContent="space-around">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLike}
                >
                  <ThumbUpIcon sx={{ margin: "5px" }} />
                  Like
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDislike}
                >
                  <ThumbDownIcon sx={{ margin: "5px" }} />
                  Dislike
                </Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PokemonCard; // Exporting the component
