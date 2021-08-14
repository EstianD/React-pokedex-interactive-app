import { useEffect, useState } from "react";
import axios from "axios";

// URLS
// pokemons: https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000
// Sprites: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<id>.png
// Pokemon desc: https://pokeapi.co/api/v2/pokemon-species/<id/name>

const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898";
const POKEMONS_DESC_URL = "https://pokeapi.co/api/v2/pokemon-species";
const PER_PAGE = 20;

export default function usePokeDex() {
  const [pokemonAll, setPokemonAll] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [pokemonLoading, setPokemonLoading] = useState(false);

  // Function for calculating the max number of pages in filter
  function calculateNumPage(arrayLength) {
    let numPages = 0;

    for (let p = 890; p >= 20; p = p - 20) {
      numPages++;
    }
    // Check for any remainder after page loop
    if (arrayLength % 20 !== 0) {
      numPages++;
    }

    return numPages;
  }

  useEffect(() => {
    console.log("effect");
    async function getAllPokemon() {
      const response = await axios.get(POKEMONS_URL);
      console.log("RESULTS: ", response.data.results);
      return response.data.results;
    }
    getAllPokemon().then((res) => {
      setPokemonAll(res);
      // setPage(1);
      setFilteredPokemon(res);
      // setTotalPages(calculateNumPage(res.length));
    });
  }, []);

  useEffect(() => {
    //  console.log(searchInput);
    //  const pokemonArrayCopy = [...pokemonAll];
    const searchResults = [];
    pokemonAll.map((pokemon) => {
      if (pokemon.name.includes(searchInput)) {
        searchResults.push(pokemon);
      }
    });
    setFilteredPokemon(searchResults);
  }, [searchInput]);

  async function handlePokemonSelect(id) {
    setPokemonLoading(true);
    setSelectedPokemon({});
    console.log("id: ", id);
    const response = await axios.get(`${POKEMONS_DESC_URL}/${id}`);
    if (response) {
      setSelectedPokemon(response.data);
      setPokemonLoading(false);
    }
  }

  return {
    filteredPokemon,
    searchInput,
    setSearchInput,
    totalPages,
    page,
    setPage,
    handlePokemonSelect,
    selectedPokemon,
    pokemonLoading,
  };
}
