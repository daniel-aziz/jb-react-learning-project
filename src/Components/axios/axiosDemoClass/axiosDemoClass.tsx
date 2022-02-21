import axios from "axios";
import { Component } from "react";
import "./axiosDemoClass.css";

interface AxiosDemoClassState {
    _id: number,
    mispar_rechev: number,
    tozeret_cd: number,
    sug_degem: string,
    tozeret_nm: string,
    degem_cd: number,
    degem_nm: string,
    ramat_gimur: string,
    ramat_eivzur_betihuty: number,
    kvutzat_zihum: number,
    shnat_yitzur: number,
    degem_manoa: string,
    mivchan_acharon_dt: string,
    tokef_dt: string,
    baalut: string,
    misgeret: string,
    tzeva_cd: number,
    tzeva_rechev: string
    zmig_kidmi: string,
    zmig_ahori: string,
    sug_delek_nm: string,
    horaat_rishum: string,
    moed_aliya_lakvish: string,
    kinuy_mishari: string,
    rank: number
}

class AxiosDemoClass extends Component<{}, AxiosDemoClassState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            _id: 0,
            mispar_rechev: 0,
            tozeret_cd: 0,
            sug_degem: "",
            tozeret_nm: "",
            degem_cd: 0,
            degem_nm: "",
            ramat_gimur: "",
            ramat_eivzur_betihuty: 0,
            kvutzat_zihum: 0,
            shnat_yitzur: 0,
            degem_manoa: "",
            mivchan_acharon_dt: "",
            tokef_dt: "",
            baalut: "",
            misgeret: "",
            tzeva_cd: 0,
            tzeva_rechev: "",
            zmig_kidmi: "",
            zmig_ahori: "",
            sug_delek_nm: "",
            horaat_rishum: "",
            moed_aliya_lakvish: "",
            kinuy_mishari: "",
            rank: 0
        };
    }

    public getData = async ()=>{
        const result = await axios.get("https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=1425560")
        const theRes = result.data.result.records[0];
         this.setState({
             mispar_rechev:theRes.mispar_rechev,
             baalut:theRes.baalut,
             tozeret_nm:theRes.tozeret_nm,
             tokef_dt:theRes.tokef_dt
         })
    }

    

    public componentDidMount():void {
        this.setState({
            mispar_rechev:0,
            baalut:"loading",
            tozeret_nm:"loading",
            tokef_dt:"loading"
        })
            this.getData();
        
    }

    public render(): JSX.Element {
        return (
            <div className="axiosDemoClass">
                
                <div className="carBox">
                <h3>Car Info</h3>
                <hr /><br />
                   <span className="info">Car number:</span> {this.state.mispar_rechev} <br />
                    <span className="info">Owner Type: </span>{this.state.baalut} <br />
                    <span className="info">Manufactor: </span> {this.state.tozeret_nm} <br />
                    <span className="info">Legestration Date: </span> {this.state.tokef_dt} <br />
               <br /> </div>
                    
            </div>
        );
    }
}

export default AxiosDemoClass;
