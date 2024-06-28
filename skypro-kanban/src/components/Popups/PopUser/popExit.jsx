import { routes } from "../../../router/routes"
import { Link, useNavigate } from "react-router-dom"
import { ButtonExitNo, ButtonExitYes, PopExitContainer, PopExitBlock, PopExitGroup, ExitTtl } from "./PopExit.styled"

export const PopExit = ({setIsAuth})=>{
	const nav = useNavigate()

	const handleLogout = ()=>{
		setIsAuth(false)
		nav(routes.exit)
	}
    return(
        <div className="pop-exit" id="popExit">
				<PopExitContainer>
					<PopExitBlock>
						<ExitTtl>
							<h2>Выйти из аккаунта?</h2>
						</ExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitGroup>
							<ButtonExitYes onClick={handleLogout} id="exitYes">Да, выйти </ButtonExitYes>
							<Link to={routes.main}><ButtonExitNo id="exitNo">Нет, остаться</ButtonExitNo></Link> 
							</PopExitGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
			</div>
    )
}