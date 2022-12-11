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

const LightB = styled(DefaultButton)`
  color: black;
  background-color: rgba(255, 255, 255, 0.25);
`;

interface IProps extends PropsWithChildren {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const LButton = (props: IProps) => {
  const { children, onClick } = props;
  return <LightB onClick={onClick}>{children}</LightB>;
};

const DButton = (props: IProps) => {
  const { children, onClick } = props;
  return <DefaultButton onClick={onClick}>{children}</DefaultButton>;
};

export const Button = Object.assign(DButton, {
  Light: LButton,
});
