import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  font-family: 'GruppoRegular';
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  color: white;
  border-radius: 1vh;
  font-size: 2vh;
  margin-left: 3vw;
  padding: 2vh 3vh;
`;

interface IProps extends PropsWithChildren {
    text?: string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

function Button({text, onClick}: IProps) {
    return <DefaultButton onClick={onClick}>{text}</DefaultButton>
}

export default Button;
