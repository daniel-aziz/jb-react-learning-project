import "./learnHooks.css";
import {useState, useEffect, SyntheticEvent} from 'react';
import { Button, TextField } from "@material-ui/core";



function LearnHooks(): JSX.Element {
    const [count,setCount] = useState(0);
    const [myNigga,setNigga] = useState("My Nigga");

    useEffect (()=>{
        console.log(count)
    },[count,myNigga])

    function  minus() {
        setCount(perv => perv - 1)
    
    }

    function  plus() {
        setCount(perv => perv + 1)
    }

    function change(arg:SyntheticEvent) {
        var value = (arg.target as HTMLInputElement).value;
        setNigga(value);
    }
    return (
        <div className="learnHooks" >
            <div className="count">
            <span>
                {count}
            </span><br /><br />

			<Button className="butni" onClick={plus}  variant="contained" color="primary">+</Button>
            <Button className="butni" onClick={minus}  variant="contained" color="primary">-</Button>
            <hr />
            <span>
                {myNigga}
            </span><br /><br />
            <TextField onChange={change} type="text" placeholder="enter text" variant="outlined" label="Text"/>
            </div>
        </div>
    );
}

export default LearnHooks;
