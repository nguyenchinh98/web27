const ControlSong = (({ next, prev, playPause}) => {
    return (
      <div className="control">
        <button><i className="bi bi-shuffle"></i></button>
        <button onClick={ prev }><i className="bi bi-caret-left-square-fill"></i></button>
        <button onClick={ playPause }><i className="bi bi-play"></i></button>
        <button onClick={ next }><i className="bi bi-caret-right-square-fill"></i></button>
        <button><i className="bi bi-arrow-repeat"></i></button>
      </div>
    );
})