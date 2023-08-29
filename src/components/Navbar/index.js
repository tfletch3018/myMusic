import { Link } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import myMusicPic from "../../images/myMusicPic.ico";
import "./style.css";


function MyNavbar() {

    return (
        <div>

            <nav>
                <Link to="/"><img src={myMusicPic} id="logo" alt="" /></Link> {" "}
                <Link to="/home">myMusic</Link>
                <Link to="/videos">myVideos</Link>
                <Link to="/contact">letsLinkUp</Link>
            </nav>

            {/* <Outlet /> */}

        </div>

    )
}

export default MyNavbar;