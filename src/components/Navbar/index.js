import { Link } from "react-router-dom";
import myLogo from "./images/myLogo.ico";
import "./style.css";

function MyNavbar() {

    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                <Link to="/"><img src={myLogo} id="logo" alt="" /></Link> {" "}
                <Link to="/home">myMusic</Link>
                <Link to="/videos">myVideos</Link>
                <Link to="/contact">letsLinkUp</Link>
            </nav>
        </div>
    )
}

export default MyNavbar;