import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loader}=useContext(AuthContext)

    if(loader){
        return <span>Loading....</span>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to='/login' replace>

        </Navigate>
    );
};

export default PrivateRout;