const PokemonList = (({ pokemons}) => {
    const list = pokemons.map((pokemon) => {return <Pokemon a={pokemon}/>})
    return <div>{list}</div>
})

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PokemonType)
}