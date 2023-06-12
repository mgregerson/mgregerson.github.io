import "./Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <div id="Projects-title" className="Projects-title">Projects</div>
      <div id="Projects-info" className="Projects text-white container">
        <div className="Projects-project-list">
          <div className="Projects-project">
            <img
              className="Projects-img"
              src="https://i.imgur.com/a8uiKqo.png"
            ></img>
            <div className="Projects-info">
              <div className="Projects-name">Jobber The Hutt</div>
              <div className="Projects-description">
                A job postings website in the vein of Indeed. Logged in users
                can search for jobs to apply to, while admin users can post new
                jobs. This was built with a React front-end, Flask backend, and
                a PSQL database. Authentication and security is paramount, with
                different levels of authorization based on admin status.
              </div>
              <div className="Projects-links">
                <div>
                  <a href="https://jobberthehutt-mg.surge.sh/" target="_blank">
                    Website
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/mgregerson/react-jobly"
                    target="_blank"
                  >
                    Github: Frontend 
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/mgregerson/jobly-backend"
                    target="_blank"
                  >
                    Github: Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Projects-project">
            <img
              className="Projects-img"
              src="https://i.imgur.com/6ryN7sE.png"
            ></img>
            <div className="Projects-info">
              <div className="Projects-name">Warbler</div>
              <div className="Projects-description">
                A social media app inspired by Twitter. Logged in users can post
                "warbles", messages that other users can like. Logged in users
                can follow each other, while admin users have site-wide access
                and functionality. Built using Flask, PSQL, and Jinja templates.
              </div>
              <div className="Projects-links">
                <div>
                  <a href="https://warbler-mg.onrender.com/" target="_blank">
                    Website
                  </a>
                </div>
                <div>
                  <a href="https://github.com/mgregerson/warbler-mg">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;