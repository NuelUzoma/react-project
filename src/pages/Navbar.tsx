import { Link } from "react-router-dom";
import '../styles/Navbar.scss';

export default function Navbar() {
    return (
        <div className="page-wrapper">
            <nav className="navigation">
                <div className="left-nav">
                    <Link to={"/"} className="logo">
                        Logo
                    </Link>
                </div>
                <div className="middle-nav">
                    <p>Properties</p>
                    <p>Links</p>
                    <p>Flights</p>
                </div>
                <div className="right-nav">
                    <Link to={"/signup"} className="signup">Signup</Link>
                    <Link to={"/login"} className="login">Login</Link>
                </div>
            </nav>
        </div>
    )
}