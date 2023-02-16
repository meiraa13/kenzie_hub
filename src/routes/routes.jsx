import { Routes , Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PublicRoutes } from "../pages/PublicRoutes";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";

export function AppRoutes(){

    return(
        <Routes>
            <Route path="/" element={<PublicRoutes />} >
                <Route index element={<LoginPage />}/>
                <Route path='/register' element={<RegisterPage/>} />
            </Route>
           
            <Route path='/dashboard/:user' element={<ProtectedRoutes />}>
                 <Route index element={<DashboardPage />} />
            </Route>
          
        </Routes>
    )


}

