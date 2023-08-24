import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pokemondetails: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonDetailsList: (state, action) => {
      state.pokemondetails = action.payload;
    },
    selectPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { selectPokemon, setPokemonDetailsList } = pokemonSlice.actions;

export const fetchPokemonList = () => async (dispatch) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    dispatch(fetchPokemonDetailsList(response.data.results));

  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
};

const fetchPokemonDetailsList = (pokemonList = []) => async (dispatch) => {
  try {
    let pokemonDetailsList = pokemonList.map(async (pokemonData) => {
      try {
        const data = await axios.get(pokemonData.url);
        return data.data;
      } catch (err) {
        return console.log("unable to fetch POKE Details");
      }
    })

    Promise.all(pokemonDetailsList).then(values => {
      console.log(values);
      
      dispatch(setPokemonDetailsList(values));
    })

  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
};

export default pokemonSlice.reducer;
