import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if(loader){
        return <span>Loading....</span>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login' replace>

        </Navigate>
    );
};

export default PrivateRout;