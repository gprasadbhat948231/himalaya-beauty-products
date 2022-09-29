import { Routes,Route } from "react-router-dom";
import Registration from "./Registration";
import HomePage from "./Home";
function Allroutes()
{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
    );

}
export default Allroutes;