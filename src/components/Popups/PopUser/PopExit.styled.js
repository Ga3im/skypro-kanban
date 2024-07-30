import styled from "styled-components";
import { ButtonNewTask } from "../../Header/Header.styled";

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  background-color: ${({ theme }) => theme.cards};
  max-width: 370px;
  width: 100%;
  padding: 50px 20px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ExitTtl = styled.div`
  h2 {
    color: ${({ theme }) => theme.Title};
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;
export const FormExit = styled.form``;

export const PopExitGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonExitYes = styled(ButtonNewTask)`
  width: 153px;
  height: 30px;
`;
export const ButtonExitNo = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cards};
  font-size: 14px;
  color: #565eef;
  line-height: 1;
  font-weight: 500;
  border: 0.7px solid #565eef;
  width: 153px;
  height: 30px;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;