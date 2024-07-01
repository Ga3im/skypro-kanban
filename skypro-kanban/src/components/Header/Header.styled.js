import styled from 'styled-components';
import { Hover01, Hover02, Hover03 } from '../../GlobalStyle.styled';

export const Header = styled.header`
width: 100%;
margin: 0 auto;
background-color: ${({theme})=> theme.cards};
`

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`
export const HeaderLogo = styled.div`
  img{
    width: 85px
  }
  
`

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonNewTask = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
  color: #FFFFFF;
}
${Hover01}
`

export const HeaderUserName = styled.a`
 height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;

  &::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(${(props) => props.$isOpen? "135deg": "-45deg"});
  margin: -6px 0 0 5px;
  padding: 0;
}

${Hover02}
`

export const HeaderPopUser = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({theme})=> theme.HeadUser};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  box-shadow: ${({theme}) => theme.shadow};
`

export const UserName = styled.p`
 color: ${({theme})=> theme.Title};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;


`
export const UserMail = styled.p`
 color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`

export const UserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
  color:${({theme})=> theme.Title};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}

input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${({theme})=> theme.checkpoint};
  transition: 0.5s;
}

input:checked[type=checkbox]::before {
  left: 12px;
}

`

export const ButtonExit = styled.button`
   width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
${Hover03}
`