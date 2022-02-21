import { Component, SyntheticEvent } from "react";
import { setInterval } from "timers";
import "./changeColor.css";

interface ChangeColorState {
	item:string
    
}

class ChangeColor extends Component<{}, ChangeColorState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            item:"red",
            
        };
    }

    private change = (args:SyntheticEvent)=>  {
        const value = (args.target as HTMLInputElement).value;
        console.log((args.target as HTMLInputElement).value)
        this.setState({item: value});
    }

    public render(): JSX.Element {
        return (
            <div className="changeColor">
                <input type="text" placeholder="color" id="inputColor" onBlur={this.change}/> <br />
				<input type="color" name="" placeholder="color" id="boxColor" onBlur={this.change}/><br /><br />
                <p id="par" style={{color:this.state.item}}>Hey this is Color</p> 
            </div>
        );
    }
}

export default ChangeColor;
