import "./Title.css"

function Title() {
  return (
    <div className="Title card mx-auto">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://i.imgur.com/x84wDrJ.png" className="card-img-left img-fluid" alt="It's Me!" width="400" height="400" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="Title card-text">Hi. I'm Matt, and I'm a Software Engineer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;