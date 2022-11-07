const Song = (({ song }) => {
    return (
        <div className="song-item">
            <img src={ song.avatar } alt={ song.name } />
            <div className="info-song">
                <h2>{ song.name }</h2>
                <p>{ song.singer }</p>
            </div>
        </div>
    )
})