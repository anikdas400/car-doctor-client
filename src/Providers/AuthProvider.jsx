import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        loader,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;