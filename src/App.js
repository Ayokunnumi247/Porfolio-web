import "bootstrap/dist/css/bootstrap.min.css";
import SetNavbar from "./SetNavbar";
import Home from "./Home.js";
import "./App.css";
import About from "./About.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App(props) {
  return (
    <div className="App">
      <SetNavbar />
      <Home />
      <About about={About} />
      <footer>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </footer>
    </div>
  );
}

export default App;
