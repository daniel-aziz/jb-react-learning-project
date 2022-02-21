import { useState } from "react";
import CarModel from "../../../models/carModel";
import "./axionDemoFunction.css";



function AxionDemoFunction(): JSX.Element {
    const [myCar,setCar] = useState(new CarModel());

    return (
        <div className="axionDemoFunction">
			{myCar}
        </div>
    );
}

export default AxionDemoFunction;
