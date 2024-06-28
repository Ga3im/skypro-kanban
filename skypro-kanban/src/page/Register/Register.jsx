import { GlobalStyle, Wrapper } from "../../GlobalStyle.styled"
import * as A from "../Login/Login.styled"
import { Link } from "react-router-dom"
import {routes} from "../../router/routes"

export const Register = ()=>{
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
					<A.ModalFormLogin id="formLogUp" action="#">
						<A.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<A.ModalInput className="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<A.ModalInput className="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<A.BtnEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </A.BtnEnter>
						<A.ModalFormGroup>
							<p>Уже есть аккаунт?  <Link to={routes.login} >Войдите здесь</Link></p>
						</A.ModalFormGroup>
					</A.ModalFormLogin>
			</A.ModalBlock>
            </A.Modal>
        </A.ContainerSigin>
    </Wrapper>
    </>
    )
}