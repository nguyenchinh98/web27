const Player = ({ song, next, prev, playPause, }) => {
  return (
    <div>
      <div className="control">
        <button>
          <i className="bi bi-shuffle"></i>
        </button>
        <button onClick={prev}>
          <i className="bi bi-caret-left-square-fill"></i>
        </button>
        <button onClick={playPause}>
          <i className="bi bi-play"></i>
        </button>
        <button onClick={next}>
          <i className="bi bi-caret-right-square-fill"></i>
        </button>
        <button>
          <i className="bi bi-arrow-repeat"></i>
        </button>
      </div>

      <div className="song-item">
        <img src={song.avatar} alt={song.name} />
        <div className="info-song">
          <h2>{song.name}</h2>
          <p>{song.singer}</p>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const songs = [
    {
      id: 1,
      name: "Con tim không đổi thay",
      singer: "Dee Trần",
      path: "../music/song1.mp3",
      avatar:
        "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/4/3/e/e43e4823335c1a3e7e2cef96817c6c40.jpg",
    },
    {
      id: 2,
      name: "Bắt cóc con tim",
      singer: "Lou Hoàng",
      path: "../music/song1.mp3",
      avatar:
        "https://nhachot.vn/wp-content/uploads/2021/01/unnamed-file-170.jpg",
    },
    {
      id: 3,
      name: "Bên anh đêm nay",
      singer: "Binz of",
      path: "../music/song1.mp3",
      avatar:
        "https://vtv1.mediacdn.vn/thumb_w/650/2016/5-nhung-ca-si-tre-duoc-yeu-thich-trong-lang-nhac-viet-nam-2015-1457022827809.jpg",
    },
    {
      id: 4,
      name: "Có chơi có chịu",
      singer: "Karik vs Only C",
      path: "../music/song1.mp3",
      avatar:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/10/10/e/c/0/d/1570677205097_300.jpg",
    },
    {
      id: 5,
      name: "Waiting For You",
      singer: "Mono",
      path: "../music/song1.mp3",
      avatar: "https://dvt.vn/uploads/images/2022/09/14/mono-1-1663136362.jpg",
    },
  ];
  const songRef = React.useRef();
  const [index, setIndex] = React.useState(0);
  const [isPlay, setPlay] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const song = songs[index];

  const nextSong = () => {
    if (index == songs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSong = () => {
    if (index == 0) {
      setIndex(songs.length - 1);
    } else setIndex(index - 1);
  };

  const handleLoadedData = () => {
    setDuration(songRef.current.duration);
    if (isPlay) songRef.current.play();
  };

  const handlePlayPause = () => {
    if (isPlay) {
      songRef.current.pause();
    } else {
      songRef.current.play();
    }
    setPlay(!isPlay);
  };

  return (
    <div className="container">
      <h1 className="">Player Music</h1>
      <audio
        ref={ songRef }
        src={ song.path }
        onLoadedData={handleLoadedData}
      ></audio>
      <Player song={song} next={nextSong} prev={prevSong} playPause={handlePlayPause}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("#app"));
root.render(<App />);
