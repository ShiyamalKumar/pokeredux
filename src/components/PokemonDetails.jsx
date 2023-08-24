import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/PokemonDetails.css'

const PokemonDetails = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  if (selectedPokemon == null) {
    return null;
  }

  return (
    <div className="pokemon-details">
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(selectedPokemon.id).padStart(3, '0')}.png`} alt={selectedPokemon.name} />
      <div className="details-card">
        <h2>{selectedPokemon.name}</h2>
        <div className="abilities">
          <h3>Abilities</h3>
          <ul>
            {selectedPokemon.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <h3>Base Stats</h3>
          <ul>
            {selectedPokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="details-footer">
          <p>Height: {selectedPokemon.height / 10} m</p>
          <p>Weight: {selectedPokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
