import { SyntheticEvent } from "react";
import "./myButton.css";

function MyButton(): JSX.Element {
    return (
        <div className="myButton">
			<button onClick={doSmth}>Click Me!</button>
        </div>
    );
}
var moto = "hakuna matata";

function doSmth(args:SyntheticEvent) {
    alert(moto)
    console.log(args)
    
}



export default MyButton;
