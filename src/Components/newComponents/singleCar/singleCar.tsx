import { Component } from "react";
import CarModel from "../../../models/carModel";
import "./singleCar.css";
import {Button} from "@material-ui/core"
import { useHistory } from "react-router";
import { Notyf } from "notyf";

interface SingleCarProps {
    car: CarModel
}

function SingleCar (props:SingleCarProps) : JSX.Element {
    var history = useHistory();

    function showInfo() {
       
        history.push("/showFullInfo/"+props.car.mispar_rechev);    
    }

    function showSuc() {
        const notyf = new Notyf();
        notyf.success("Go see your new car!")
    
    }


        return (
            <div className="singleCar">
                <div className="count">
                    <h3>Car Info</h3>
                    <hr /><br />
                    <span className="info">Car number:</span> {props.car.mispar_rechev} <br />
                    <span className="info">Owner Type: </span>{props.car.baalut} <br />
                    <span className="info">Manufactor: </span> {props.car.tozeret_nm} <br />
                    <span className="info">Legestration Date: </span> {props.car.tokef_dt} <br />
                    <Button className="butni" variant="contained" onClick={()=>{showSuc();showInfo()}}>Get Info</Button> 
                    <br />
                    </div>
            </div>
        );
    }


export default SingleCar;
