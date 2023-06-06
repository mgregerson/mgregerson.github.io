import "./Tech.css";

function Tech() {
  return (
    <div className="Tech mt-5">
      <div id="Tech-title" className="Tech-title">Tech</div>
      <div className="Tech-body">
        <div className="Tech-tech-stack">
          <div className="Tech-intro text-start text-white">
            > A quick dive into my current tech stack:
          </div>
          <table className="table table-borderless text-white text-start">
            <thead>
              <tr>
                <th></th>
                <th>Frontend</th>
                <th>Backend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Languages</span>
                </td>
                <td>
                  <span>Javascript, Typescript, HTML, CSS</span>
                </td>
                <td>
                  <span>Python, Javascript</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Frameworks and Libraries</span>
                </td>
                <td>
                  <span>Bootstrap, React, JQuery, Axios</span>
                </td>
                <td>
                  <span>
                    Node, Express.js, Django, Flask, Requests, SQLAlchemy
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="Tech-other">
            <p className="text-start">> Other Tech:</p>
          </div>
          <table className="table table-borderless text-white text-start">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Databases</th>
                <th></th>
                <th>Testing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <span>---------</span>
                </td>
                <td></td>
                <td>
                  <span>-------</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <span>PSQL, MySQL,</span>
                </td>
                <td></td>
                <td>
                  <span>Jest, PyTest</span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <span>SQL</span>
                </td>
                <td></td>
              </tr>
            </tbody>
            <div className="Tech-end">></div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tech;
