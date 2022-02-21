import { Component } from "react";

import "./classTest.css";

class ClassTest extends Component {
private changeCr() {
    document.getElementById("classTest")
    console.log("color")
}


    public render(): JSX.Element {
        return (
            <div className="classTest">
				<button id="myB" onClick={this.changeCr}>Click Me</button>
                
            </div>
        );
    }

}

export default ClassTest;
