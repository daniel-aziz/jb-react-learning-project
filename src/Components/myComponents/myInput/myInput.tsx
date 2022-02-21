import { Component, SyntheticEvent } from "react";
import "./myInput.css";
import {TextField} from "@material-ui/core"

interface MyInputState {
    item: string
}


class MyInput extends Component<{}, MyInputState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            item: "Daniel"
        };
    }

    private clearValue = () => {
        this.setState({item: ""});
    }

    private setValue = (args: SyntheticEvent) => {
        //const value=args.target.value; //who is args??? what is it type???
        const value = (args.target as HTMLInputElement).value;
        this.setState({item: value});
    };


    public render(): JSX.Element {
        return (
            <div className="myInput">
                <div className="centerIt">
                <TextField variant="outlined" label="Who Are You?" onChange={this.setValue} value={this.state.item}/>
                <br /><br />
                <TextField variant="outlined" label="This is Who Are you!" value={this.state.item}/>
                <br />
                <span>boss name: {this.state.item}</span>
                <br />
                <button onClick={this.clearValue}>Clear</button>
                </div>
            </div>
        );
    }
}

export default MyInput;
