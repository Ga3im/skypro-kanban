import { GlobalStyle } from "../../GlobalStyle.styled"
import {  View404 } from "./NotFound.styled"

export const NotFound = () =>{
    return(
        <>
        <GlobalStyle/>
        <View404>
            <img src="public/404gif.gif" alt="" />
        </View404>
        </>
    )
}