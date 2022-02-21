import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import "./login.css";

function Login(): JSX.Element {
    return (
        <div className="login">
            <div className="loginForm">
                <Typography variant="h4" className="headLine">Login Here</Typography><br /><br />
                <TextField label="Email" variant="outlined" /> <br /><br />
                <TextField label="Password" type="password" variant="outlined" />
                <FormControlLabel control={ <Checkbox color="primary" />} label="Remember Me?" />
                <ButtonGroup variant="contained" fullWidth>
                    <Button  color="primary">Send</Button>
                    <Button  color="secondary">Reset</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Login;
