import { Redirect, Route, Switch } from "react-router";
import Get10cars from "../../newComponents/get10cars/get10cars";
import Page404 from "../../myComponents/page404/page404";
import Home from "../home/home";
import "./routing.css";
import ShowFullInfo from "../../newComponents/showFullInfo/showFullInfo";
import OrderPage from "../../newComponents/OrderPage/OrderPage";
import ClassTest from "../../newComponents/classTest/classTest";
import FunctionTest from "../../newComponents/functionTest/functionTest";


function Routing(): JSX.Element {
    return (
        <div className="routing">
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/get10cars" component={Get10cars}/>
            <Route path="/showFullInfo/:id" render={(props)=><ShowFullInfo id={props.match.params.id}/>} exact/>
            <Route path="/orderPage" component={OrderPage} exact/>
            <Route path="/classTest" component={ClassTest} exact/>
            <Route path="/functionTest" component={FunctionTest} exact/>
            <Redirect  from="/" to="/home" exact />
            <Route component={Page404}/>

            </Switch>
        </div>
    );
}

export default Routing;
