function UserCard({ review, next, prev}) { //gán sự kiện thông qua props
    return (
      <div>
        <div className="header">
          <h1>Our Reviews</h1>
          <hr size="3" width="50px" color="#5a97d0" />
        </div>
        <div className="avatar">
          <img
            className="thumnail"
            src={review.avatar}
            alt="avatar"
          />
          <i className="bi bi-quote"></i>
        </div>
        <div className="info">
          <p className="name">{ review.name }</p>
          <p className="job">{review.job}</p>
        </div>
        <p className="text-content">
            {review.content}
        </p>
        <div className="control">
          <button onClick={prev}>  
            <i className="bi bi-caret-left"></i>
          </button>
          <button onClick={next}>
            <i className="bi bi-caret-right"></i>
          </button>
        </div>
      </div>
    );
}
