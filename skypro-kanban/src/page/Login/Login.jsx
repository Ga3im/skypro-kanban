import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import { routes } from "../../router/routes"
import * as S from "./Login.styled"
import { Link, useNavigate } from "react-router-dom"


export const Login = ({setIsAuth}) =>{
	const navigate = useNavigate()

const handleLogin = (e)=>{
	e.preventDefault()
	setIsAuth(true)
	navigate(routes.main)
}

    return(
		<>
	<GlobalStyle/>
    <Wrapper>
        <S.ContainerSigin>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTtl>
						<h2>Вход</h2>
					</S.ModalTtl>
					<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<S.BtnEnter onClick={handleLogin} id="btnEnter">Войти</S.BtnEnter>
						<S.ModalFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={routes.register}>Регистрируйтесь здесь</Link>
						</S.ModalFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.ContainerSigin>
    </Wrapper>
	</>
    )
}