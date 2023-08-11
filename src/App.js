import { Outlet, Link } from "react-router-dom";
import "./index.css";



function App() {
  return (


    <div>

      <nav>
        <Link to="/home">myMusic</Link> {" "}
        <Link to="/videos">myVideos</Link>
        <Link to="/contact">letsLinkUp</Link>

      </nav>
      <Outlet />
    </div>
  );
}

export default App;

