import { NavBarContext } from "../Pages/NavBar";
import { useContext } from "react";

const useNavBar = ()=>{
    return useContext(NavBarContext);
}

export default useNavBar;