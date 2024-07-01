import {Outlet, Navigate} from "react-router-dom"
import { routes } from "./routes"

export const ProtectedRoute = () =>{
    return <Outlet/>  
}