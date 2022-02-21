import { BrowserRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Links from "../links/links";
import Routing from "../routing/routing";
import "./layout.css";

function Layout(): JSX.Element {
    return (
        <div className="layout">
            <BrowserRouter> 
		<header>
            <Header/>
        </header>
        <main>
            <Routing/>
        </main>	
        <aside>
            <Links/>
        </aside>
        <footer>
            <Footer/>
        </footer>
        </BrowserRouter>

        </div>
        
    );
}

export default Layout;
