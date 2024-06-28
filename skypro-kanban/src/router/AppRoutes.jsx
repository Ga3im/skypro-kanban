import {BrowserRouter, Routes, Route }from "react-router-dom";
import { NotFound } from "../page/NotFound/NotFound.jsx";
import { MainPage } from "../page/MainPage/MainPage.jsx";
import { routes } from "./routes.js";
import { Login } from "../page/Login/Login.jsx";
import { Register } from "../page/Register/Register.jsx";
import { useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { ExitPage } from "../page/ExitPage/ExitPage.jsx";
import { CardPage } from "../page/CardPage/CardPage.jsx";

export const AppRoutes = () =>{
  const[isAuth, setIsAuth] = useState(false)
    return(
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAuth={isAuth}/>}>
            <Route path={routes.main} element={<MainPage/>}>     
            <Route path={routes.exit} element={<ExitPage  setIsAuth={setIsAuth}/>}/>
            <Route path={routes.card} element={<CardPage/>}/>
            </Route>
          </Route>
            <Route path={routes.login} element={<Login setIsAuth={setIsAuth}/>}/>                 
            <Route path={routes.notFound} element={<NotFound/>}/>     
            <Route path={routes.register} element={<Register/>}/>     
        </Routes>  
      </BrowserRouter>   
    )
}