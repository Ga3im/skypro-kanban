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
  const[user, setUser] = useState(null)
    return(
      <BrowserRouter>  
        <Routes>
          <Route element={<ProtectedRoute user={user}/>}>
            <Route path={routes.main} element={<MainPage
              user={user}
              setUser={setUser}/>}>     
            <Route path={routes.exit} element={<ExitPage setUser={setUser}/>}/>
            <Route path={routes.card} element={<CardPage/>}/>
            </Route>
          </Route>
            <Route path={routes.login} element={<Login setUser={setUser}/>}/>                 
            <Route path={routes.notFound} element={<NotFound/>}/>     
            <Route path={routes.register} element={<Register setUser={setUser}/>}/>     
        </Routes>  
      </BrowserRouter>   
    )
}
