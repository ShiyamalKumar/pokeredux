import React from 'react';
import { useDispatch } from 'react-redux';
import { selectPokemon } from '../store/slice/pokemonSlice';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectPokemon(pokemon));
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemon.id).padStart(3, '0')}.png`} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
