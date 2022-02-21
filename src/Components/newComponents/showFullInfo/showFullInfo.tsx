import axios from "axios";
import { useEffect, useState } from "react";
import CarModel from "../../../models/carModel";
import "./showFullInfo.css";

interface carProps {
    id:string
}

interface carState {
    car:CarModel
}

function ShowFullInfo(props:carProps): JSX.Element {
var carUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="+props.id;

const [carData,setData] = useState(new CarModel());

useEffect(
    ()=>{axios.get(carUrl).then(
    (response)=>{setData(response.data.result.records[0])
})})

    return (
        <div className="showFullInfo">
			Full car Details for car : {props.id}  <hr/>
            <div className="car smallBox">
                Manufactor : {carData.tozeret_nm}<br/>
                Model : {carData.kinuy_mishari}<br/>
                Engine model : {carData.degem_manoa} <br />
                CD Model : {carData.degem_cd} <br />
                NM model : {carData.degem_nm} <br />
                Model Type : {carData.sug_degem} <br />
                Owner : {carData.baalut} <br />
                CD color : {carData.tzeva_cd} <br />
                Last test : {carData.mivchan_acharon_dt} <br />
                Secutiry level : {carData.ramat_eivzur_betihuty} <br />
                Polution group : {carData.kvutzat_zihum} <br />
                Manufactor year : {carData.shnat_yitzur} <br />
                DT expiration : {carData.tokef_dt} <br />
                Frame : {carData.misgeret} <br />
                Front wheel : {carData.zmig_kidmi} <br />
                Back wheel : {carData.zmig_ahori} <br />
                Car color : {carData.tzeva_rechev} <br />
                NM fuel type : {carData.sug_delek_nm} <br />
            </div>
        </div>
    );
}

export default ShowFullInfo;
