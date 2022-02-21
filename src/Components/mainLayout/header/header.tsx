import "./header.css";
import Marquee from "react-fast-marquee";


function Header(): JSX.Element {
    return (
        <div className="header">
            <Marquee speed={100}> I can be anyone i want to be</Marquee>

            <hr />
			<h1 id="headTitle"> Coolest Store in The World</h1>
        </div>
    );
}

export default Header;
