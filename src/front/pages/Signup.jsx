import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Signup = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
             <Layout/> 
        </div>
    );
};