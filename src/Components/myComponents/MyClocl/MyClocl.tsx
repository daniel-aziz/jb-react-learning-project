import { Component } from "react";
import "./MyClocl.css";

interface MyCloclState {
    theTime: string;
}


class MyClocl extends Component<{}, MyCloclState> {
    private myTimer:any;

    public update = () => {
        this.myTimer = setInterval(() => { 
            console.log(new Date().toLocaleTimeString())
            this.setState({ theTime: new Date().toLocaleTimeString() }); }, 1000)
    }

    public componentDidMount() {
        this.update();
        document.title = "Clock"
    }

    public componentWillUnmount() {
        clearInterval(this.myTimer)
    }

    public constructor(props: {}) {
        super(props);
        this.state = {
            theTime: "the time"
        };
    }



    public render(): JSX.Element {
        return (
            <div className="MyClocl">
                <div className="theClockMachine smallBox">
                    <span className="theTime">
                        {this.state.theTime}
                    </span><br />
                </div>

            </div>
        );
    }
}


export default MyClocl;
