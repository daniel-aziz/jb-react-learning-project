import axios from "axios";
import { Component } from "react";
import CarModel from "../../../models/carModel";
import SingleCar from "../singleCar/singleCar";
import "./get10cars.css";

interface Get10carsState {
	randomCars:CarModel[];
}

class Get10cars extends Component<{}, Get10carsState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			randomCars : []
        };
    }

    public componentDidMount() {
        this.getData();
    }

    private getData = async () => {
        const theData = await axios.get("https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=20")
        const arr = theData.data.result.records;
        console.log(arr)
        this.setState({
            randomCars:arr
        })
    }
    
    
    public render(): JSX.Element {
        return (
            <div className="get10cars">
                <div className="cars">
			{this.state.randomCars.map(item=> <SingleCar key={item._id} car={item}/>)}
            </div>
            </div>
        );
    }
}

export default Get10cars;
