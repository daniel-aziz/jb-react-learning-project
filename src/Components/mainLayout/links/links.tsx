import { Link, NavLink } from "react-router-dom";
import "./links.css";

function Links(): JSX.Element {
    return (
        <div className="links">
            <h2>Menu</h2>
            <nav id="myNav">
                {/* <a href="#">Youtube Videos</a> <br />
            <a href="#">Who are you?</a> <br />
            <a href="#">Login Page</a> <br />
            <a href="#">See All Shoes</a> <br /> */}

                <hr />
                <NavLink exact to="/get10cars">See 10 cars</NavLink><br />
                <NavLink exact to="/orderPage">Order Shoe</NavLink>
                <br /><hr />
                <NavLink exact to="/classTest">Class Test</NavLink><br />
                <NavLink exact to="/functionTest">Function Test</NavLink> <br />
                <Link to="get10Cars">Hey</Link>

            </nav>
        </div>
    );
}

export default Links;
