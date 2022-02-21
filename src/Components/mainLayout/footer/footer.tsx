import "./footer.css";

function Footer(): JSX.Element {
    var date = new Date();
    var theYear = date.getFullYear();
    return (
        <div className="footer">
			<div id="res">
                All right reserved to Daniel &copy;	{theYear}
            </div>
        </div>
    );
}

export default Footer;
