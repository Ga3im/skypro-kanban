import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import * as A from "../Login/Login.styled"
import { Link, useNavigate } from "react-router-dom"
import {routes} from "../../router/routes"
import { register } from "../../api"
import { useState } from "react"



export const Register = ({setUser})=>{
	const [error, setError] = useState("")
	const[data, setData] = useState({
		login:'',
		name:'',
		password:''})
	const navigate = useNavigate()

	const handleReg = (e)=>{
		e.preventDefault()
		if (data.login === '') {
			setTimeout(() => {
				setError('')
			}, 1500);
			setError('Почта не была введена')
			return
		}
		if (data.password === "") {
			setTimeout(() => {
				setError('')
			}, 1500);
			setError('Пароль не был введен')
			return
		}
		if (data.name === "") {
			setTimeout(() => {
				setError('')
			}, 1500);
			setError('Имя не была введена')
			return
		}
		register(data)
		.then((res)=>{
			setUser(res.name)
			navigate(routes.main)
		})
		.catch((error)=>{
			setError(error.message)
		})
		}
    return(
        <>
        <GlobalStyle/>
        <Wrapper>
        <A.ContainerSigin>
            <A.Modal>
            <A.ModalBlock>
					<A.ModalTtl>
						<h2>Регистрация</h2>
					</A.ModalTtl>
					<A.ModalFormLogin onSubmit={handleReg} id="formLogUp" action="#">
						<A.ModalInput 
						onChange={(e)=>setData({...data, name:e.target.value})} 
						type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<A.ModalInput 
						onChange={(e)=> setData({...data, login:e.target.value})} 
						className="modal__input login" 
						type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<A.ModalInput  
						onChange={(e)=> setData({...data, password:e.target.value})} 
						className="modal__input password-first" 
						type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						{error && <p>{error}</p>}
						<A.BtnEnter id="SignUpEnter" type="submit"> Зарегистрироваться </A.BtnEnter>
						<A.ModalFormGroup>
							<p>Уже есть аккаунт?<Link to={routes.login} >Войдите здесь</Link></p>
						</A.ModalFormGroup>
					</A.ModalFormLogin>
			</A.ModalBlock>
            </A.Modal>
        </A.ContainerSigin>
    </Wrapper>
    </>
    )
}