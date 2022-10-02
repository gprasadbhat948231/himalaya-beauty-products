import { Routes,Route } from "react-router-dom";
import Registration from "./Registration";
import HomePage from "./Home";
import CartModal from "./cartModal";
function Allroutes()
{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/registration" element={<Registration/>}></Route>
            <Route path="/cartModal" element={<CartModal/>}></Route>
        </Routes>
    );

}
export default Allroutes;