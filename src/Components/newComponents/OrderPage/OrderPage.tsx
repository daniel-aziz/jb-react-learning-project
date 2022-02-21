import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import ShoeModel from "../../../models/ShoeModel";
import "./OrderPage.css";



function OrderPage(): JSX.Element {
    const { register, handleSubmit, setError, formState:{errors} } = useForm<ShoeModel>();
    const history = useHistory();
    function send(shoe: ShoeModel) {
        console.log(shoe)
        history.push("/get10cars")
    }


    return (
        <div className="OrderPage">
            <div className="formBox">
            <h1>Order Page</h1>

            <form onSubmit={handleSubmit(send)} className="myForm">
                <label>Enter Manufactor: </label>
                <input type="text" {...register("manufactor",{required: {value: true, message:"Enter this"}, minLength :{value:1, message: "above 1"}}
            )}/> <br /> {errors.manufactor && errors.manufactor.message} <br />
                <label>Enter Model: </label>
                <input type="text" {...register("model",{required: {value: true, message:"Enter this"}, minLength :{value:1, message: "above 1"}})}/> <br />
                <label>Enter Size: </label>
                <input type="number" {...register("size",{required: {value: true, message:"Enter this"}, minLength :{value:1, message: "above 1"}})}/> <br />
                <label>Enter Color: </label>
                <input type="color" {...register("color",{required: {value: true, message:"Enter this"}, minLength :{value:1, message: "above 1"}})}/> <br />
                
                
                <br />
                <button type="submit">Submit</button>
                <button type="reset">Rest</button>
                
            </form>
            </div>
        </div>
    );
}

export default OrderPage;
