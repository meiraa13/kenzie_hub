import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"
import { TechProvider } from "../../providers/TechContext"

export function ProtectedRoutes(){

    const { user } = useContext(UserContext)

    return(
        
        <TechProvider>
            {user? <Outlet /> : <Navigate to='/' />}
        </TechProvider>
    )
}