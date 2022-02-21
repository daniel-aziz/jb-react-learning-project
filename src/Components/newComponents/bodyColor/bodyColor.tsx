import "./bodyColor.css";

var colors = ["green","yellow","red","blue","purple","pink","gray","black","silver","white"]

function getColor():any {
    return colors[Math.floor(Math.random()*colors.length)];
} 

function BodyColor(): JSX.Element {
    return (
        <div className="bodyColor" style={{backgroundColor:getColor()}}>
			Body color
        </div>
    );
}

export default BodyColor;
