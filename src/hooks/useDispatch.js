import { useContext } from "react";
import DispatchContext from "../context/dispatchContext";
function useDispatch(){
    return useContext(DispatchContext);
}

export default useDispatch;