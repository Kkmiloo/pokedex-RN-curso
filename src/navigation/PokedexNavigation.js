import React from 'react';
import { createStackNavigator}  from '@react-navigation/stack'
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
        <stack.Navigator>
            
           <stack.Screen name= 'Pokedex' component={Pokedex} options ={{title: 'Pokemones'}} /> 
           <stack.Screen name= 'Pokemon' component={Pokemon} /> 

        </stack.Navigator>
  )
}