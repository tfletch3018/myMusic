import { Outlet, Link } from "react-router-dom";
import myMusicPic from "../src/images/myMusicPic.ico";
import "./index.css";



function App() {
  return (

    <div>

      <nav>
        <Link to="/"><img src={myMusicPic} id="logo" alt="" /></Link> {" "}
        <Link to="/home">myMusic</Link>
        <Link to="/videos">myVideos</Link>
        <Link to="/contact">letsLinkUp</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;

