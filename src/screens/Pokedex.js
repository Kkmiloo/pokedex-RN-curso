import { getPokemonsAPI, getPokemonDetailsByUrlApi } from "../api/pokemon";

import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI();

      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons = {pokemons}/>
    </SafeAreaView>
  );
}
