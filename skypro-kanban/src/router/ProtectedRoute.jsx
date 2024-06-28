import {Outlet, Navigate} from "react-router-dom"
import { routes } from "./routes"

export const ProtectedRoute = ({isAuth}) =>{
    return isAuth? <Outlet/>: <Navigate to={routes.login}/>   
}