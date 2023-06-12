import "./Title.css";

function Title({ showPage }) {
  return (
    <div className="Title card mx-auto my-auto pt-5">
      <div className="Title-content">
        <div className="Title-inner">
          <h1>Matt Gregerson</h1>
          <img
            src="https://i.imgur.com/x84wDrJ.png"
            className="Title-img img-fluid"
            alt="It's Me!"
            width="400"
            height="400"
          />
          <h1>Software Engineer</h1>
        </div>
        <div className="Title-nav">
          <div className="Title-link-wrapper">
            <ul className="Title-link-list">
              <li className="Title-link">
                <a href="#BioCard-title" onClick={showPage}>
                  About
                </a>
              </li>
              <li className="Title-link">
                <a href="#Tech-title" onClick={showPage}>
                  Tech
                </a>
              </li>
              <li className="Title-link">
                <a href="#Projects-title" onClick={showPage}>
                  Projects
                </a>
              </li>
              <li className="Title-link">
                <a
                  href="https://docs.google.com/document/d/1xgLvpDiG797oAkFqP3fAC2Lx6LMw48jwceiY7PgD_3o/preview"
                  className="navbar-link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;

// <div className="Title card mx-auto my-auto pt-5">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img
//         src="https://i.imgur.com/x84wDrJ.png"
//         className="card-img-left img-fluid"
//         alt="It's Me!"
//         width="400"
//         height="400"
//       />
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <p className="Title card-text">
//           Hi. I'm Matt, and I'm a Software Engineer .
//         </p>
//         <button onClick={showPage}>Welcome</button>
//       </div>
//     </div>
//   </div>
// </div>
