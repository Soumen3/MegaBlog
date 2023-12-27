import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        
        });
    }

    return (
        <button 
        className="text-gray-300 hover:bg-gray-700 hover:text-white' rounded-md px-3 py-2 text-sm font-medium"
        onClick={logoutHandler}
        >Logout</button>
    );
}

export default LogoutBtn;
