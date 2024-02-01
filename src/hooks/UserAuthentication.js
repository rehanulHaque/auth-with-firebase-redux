import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import UserSlice, { clearUserData, setUser } from "../redux/UserSlice";
import { auth } from "../config/config";


export default function UserAuthentication() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    const signInCall = async({email, password}) =>{
        setIsLoading(true);
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(user));
        } catch (error) {
            setIsLoading(false)
        }
    }

    const signUpCall = async({email, password}) =>{
        setIsLoading(true);
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(setUser(user));
        } catch (error) {
            setIsLoading(false)
        }
    }

    const signOutCall = async() =>{
        try {
            await signOut(auth)
            dispatch(clearUserData())
        } catch (error) {
            setIsLoading(false)
        }
    }

    return {isLoading, signInCall, signUpCall, signOutCall}
}