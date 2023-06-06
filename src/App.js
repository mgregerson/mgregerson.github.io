import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import BioCard from "./BioCard";
import Tech from "./Tech";
import Projects from "./Projects";
import Title from "./Title";

function App() {
  const [introStatus, setIntroStatus] = useState(true);

  console.log(introStatus);
  function showPage() {
    setIntroStatus(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {!introStatus ? (
          <div className="App-content">
            <Nav />
            <BioCard />
            <Tech />
            <Projects />
          </div>
        ) : (
          <div className="App-intro">
            <Title showPage={showPage} />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
