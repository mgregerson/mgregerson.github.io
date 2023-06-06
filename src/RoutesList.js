import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Tech from "./Tech";
import Connect from "./Connect";
import Projects from "./Projects";

/**  */
function RoutesList() {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/tech" element={<Tech />}></Route>
        <Route path="/connect" element={<Connect />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default RoutesList;
