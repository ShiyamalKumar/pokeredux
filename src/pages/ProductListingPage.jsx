import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../features/pokemonSlice';
import PokemonCard from '../components/PokemonCard';
import '../styles/PokemonList.css'

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const pokemonDetailsList = useSelector((state) => state.pokemon.pokemondetails);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <div className="pokemon-list">
      {pokemonDetailsList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ProductListingPage;
