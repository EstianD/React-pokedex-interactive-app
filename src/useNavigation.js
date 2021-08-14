import React, { useState, useEffect } from "react";

// pokemonsArrayCopy.slice(
//   (page - 1) * PER_PAGE,
//   (page - 1) * PER_PAGE + PER_PAGE
// );

function useNavigation(pokemonAll) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [page, setPage] = useState();
  const [totalPages, setTotalPages] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const searchResults = [];
    //   Check the state of the input
    if (searchInput !== "") {
      pokemonAll.map((pokemon) => {
        if (pokemon.name.includes(searchInput)) {
          searchResults.push(pokemon);
        }
      });
    } else {
      // Figure out how to filter this later
    }

    setFilteredPokemon(searchResults);
  }, [searchInput]);

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

  return {
    page,
    filteredPokemon,
    setSearchInput,
    searchInput,
    totalPages,
    setPage,
  };
}

export default useNavigation;
