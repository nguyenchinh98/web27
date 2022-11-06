const PokemonList = (({ pokemons}) => {
    const list = pokemons.map((pokemon) => {return <Pokemon a={pokemon} key={pokemon.id}/>})
    return <div>{list}</div>
})
const handlingEvent = () => {
    const handleClick = (e, name) => {
        console.log("Clicked")
    }
    return (
        <button onClick={(e) => handleClick(e, "Chinh")}> Click e đi</button>
    )
}
PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PokemonType)
}