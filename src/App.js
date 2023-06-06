import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import BioCard from "./BioCard";
import Tech from "./Tech";
import Resume from "./Resume";
import Projects from "./Projects";
import Title from "./Title";

function App() {
  const [introStatus, setIntroStatus] = useState(true);

  



  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="content">
          
          <Title />
          <BioCard />
          <Tech />
          <Resume />
          <Projects />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
