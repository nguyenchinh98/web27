const Pokemon = ({ a }) => {
    console.log(a)
    return (
        <div>
            <img src={ a.image} alt="Pokemon" />
            <h2> { a.name} </h2>
            <p> { a.type } </p>
        </div>
    )
}

const PokemonType = PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
})
Pokemon.propTypes = {
    pokemon: PokemonType,
}
