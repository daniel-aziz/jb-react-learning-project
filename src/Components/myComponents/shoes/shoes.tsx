import { Button } from "@material-ui/core";
import "./shoes.css";

const shoes = [{ id: 1, model: "Nike" }, { id: 2, model: "Asics" }, { id: 3, model: "Vans" }, { id: 4, model: "Puma" }, { id: 5, model: "DC" }];

interface shoesProps {
    id: number,
    model:string
    size:number,
    price:number,
    img:string
}

function Shoes(myProps:shoesProps): JSX.Element {
    const size = 85;
    return (
        <div className="shoes">
             <img id="theShoe" src={myProps.img} width={size} height={size} /><br />
             <hr />
             <div id="details">
            <span id="legacy"> Brand:</span> {myProps.model} <br />
            <span id="legacy"> Size: </span>{myProps.size} <br />
            <span id="newPrice">Price: <span>{myProps.price}$</span></span> <br />
            <span id="lastPrice">Before discount: <span>{Math.floor(myProps.price*1.15)}$</span></span>
            <Button variant="contained">Buy now!</Button>

            </div>
        </div>
    );
}

export default Shoes;
