import { Component } from "react";
import "./randPro.css";

interface RandProState {
	prodoct:string
}
const randPro = ["Adidas - Stan Smith","Nike - Pro Running Soco", "Asics - Last Resort", "Vans - In Park", "DC - The Uresurs"];

class RandPro extends Component<{}, RandProState> {


    public constructor(props: {}) {
        super(props);
        this.state = {
			prodoct :"show prodo"
        };
    }

    private update() {
         setInterval(()=>{this.setState({prodoct:this.getProdo()})},2000);
    }


    private getProdo():any {
        return randPro[Math.floor(Math.random()*randPro.length)];
    }  

    public componentDidMount() {
        this.update();
    }

   
    public render(): JSX.Element {
        return (
            <div className="randPro">
                
				<div className="randProBox Box">
                    <span>RandDOm: </span>{this.state.prodoct}
                </div>
            </div>
        );
    }
}

export default RandPro;
