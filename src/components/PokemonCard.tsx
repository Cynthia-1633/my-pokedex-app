const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];
  /*return (
    <article className="pokemonCard">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
    </article>
  );*/

  /*if (pokemon.imgSrc) {
    return <img src={pokemon.imgSrc}/>;
    }
  else {
    return <p>{"???"}</p>; 
}*/
  return pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );
}

/*Modifie ton code pour afficher l'image du Pokémon seulement si pokemon.imgSrc est défini. 
Si l'image est disponible, utilise une balise <img> pour l'afficher. 
Sinon, affiche un paragraphe <p> avec "???" en texte. Utilise l'opérateur ternaire ?: pour cela.*/

export default PokemonCard;
