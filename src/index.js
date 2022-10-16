
import { createRoot } from 'react-dom/client';
import App from "./app.js";

import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function appwithroute(){
    return(

        <Router>
        <App/>
        </Router>
    )
}
const root = createRoot(document.getElementById("root"))
root.render(appwithroute())
