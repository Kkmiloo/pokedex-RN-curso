import { View, Text } from "react-native";
import { getPokemonsAPI } from "../api/pokemon";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
