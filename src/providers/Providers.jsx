import { UserProvider } from "./UserContext";
import React from "react";

export function Providers({ children }){

    return(
        <UserProvider>
            {children}
        </UserProvider>
    )
}