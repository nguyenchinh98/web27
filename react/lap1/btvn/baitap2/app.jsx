function OurReviews(){
    return (
      <div className="header">
        <h1>Our Reviews</h1>
        <hr size="3" width="50px" color="#5a97d0" />
      </div>
    );
}
function Avatar(){
    return (
      <div className="avatar">
          <img
            className="thumnail"
            src="https://i.vietgiaitri.com/2017/11/15/bo-suu-tap-gai-xinh-vong-mot-cang-tron-goi-cam-phan-32-d4de87.jpg"
            alt="avatar"
          />
          <i className="bi bi-quote"></i>
      </div>
    );
}
function Info(){
    return (
      <div className="info">
        <p className="name">Susan Smith</p>
        <p className="job">web developer</p>
      </div>
    );
}
function Content(){
    return <p className="text-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sapiente quos rerum veniam provident quibusdam optio eum fuga amet laudantium repudiandae eius, debitis ipsa quis autem, vitae aut aperiam natus.
    </p>
}
function Control(){
    return (
      <div className="control">
        <button><i className="bi bi-caret-left"></i></button>
        <button><i className="bi bi-caret-right"></i></button>
      </div>
    );
}
function App(){
    return (
      <div className="card">
        <OurReviews />
        <Avatar />
        <Info />
        <Content />
        <Control />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("#app"));
root.render(<App/>)