import * as S from "./Header.styled.js"
import { Container } from "../../GlobalStyle.styled"
import { Link } from "react-router-dom"
import { routes } from "../../router/routes.js"



export const Header = ({ isOpen, setIsOpen, addCard, changeTheme, setChangeTheme}) =>{
	
	let person = JSON.parse((localStorage.getItem('person')))
	const toggleOpenUser = () =>{
		setIsOpen(!isOpen)
	  }

	const onChangeTheme = ()=>{
		setChangeTheme(changeTheme === 'light'? 'dark' : 'light')
	}

    return(<S.Header>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogo>
						<a href="" target="_self"><img src="/logo.png" alt="logo"/></a>
					</S.HeaderLogo>
					{/* <S.HeaderLogo >
						<a href="" target="_self"><img src="/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogo> */}
					<S.Nav>
						<S.ButtonNewTask
						onClick={addCard}
						id="btnMainNew"><a>Создать новую задачу</a></S.ButtonNewTask>
						<S.HeaderUserName $isOpen={isOpen} onClick={toggleOpenUser} >{person.name}</S.HeaderUserName>
						{isOpen && 
						<S.HeaderPopUser>
							<S.UserName>{person.name}</S.UserName>
							<S.UserMail>{person.login}</S.UserMail>
							<S.UserTheme>
								<p>Темная тема</p>
								<input defaultChecked={changeTheme === "dark"} onClick={onChangeTheme} type="checkbox" className="checkbox" name="checkbox"/>
							</S.UserTheme>
							<Link to={routes.exit}><S.ButtonExit type="button">Выйти</S.ButtonExit></Link>
						</S.HeaderPopUser>}			
					</S.Nav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>)
}
