import { Field } from "formik";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #e5e5e5;
`;

export const Card = styled.div`
  align-items: center;
  justify-content: center;
  width: 438px;
  height: 534px;

  /* Brancos/Branco */
  background: #ffffff;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
`;
export const Logo = styled.img`
  position: absolute;
  width: 295px;
  height: 116px;
  left: 72px;
  top: 55px;
`;

export const EmailArea = styled.div`
  position: absolute;
  width: 385.88px;
  height: 85.5px;
  left: 25.88px;
  top: 205.88px;
`;

export const EmailInputTitle = styled.label`
  /* Título input */
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 73.33%;
  width: 385.88px;
  height: 23px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 125% */
  letter-spacing: 0.03em;
  /* Pretos/Preto 2 */
  color: #262626;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 9px 0px;
`;

export const EmailInput = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 385.88px;
  height: 86.25px;
  left: 0px;
  top: 0px;

  background: #f1f1f1;
  border-radius: 9px;
  border: none;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 9px 0px;
`;

export const PasswordArea = styled.div`
  position: absolute;
  width: 385.88px;
  height: 85.5px;
  left: 25.88px;
  top: 318.38px;
`;

export const PasswordInputTitle = styled.label`
  /* Título input */
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 73.33%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 125% */
  /* Pretos/Preto 2 */
  color: #262626;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 9px 0px;
`;

export const PasswordInput = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 385.88px;
  height: 86.25px;
  left: 0px;
  top: 0px;

  background: #f1f1f1;
  border: none;
  border-radius: 9px;
`;

export const Button = styled.button`
  position: absolute;
  width: 385.88px;
  height: 54px;
  left: 25.88px;
  top: 439.88px;
  /* Primárias/Azul b2 */
  background: #02274f;
  border-radius: 9px;
  color: white;
`;
