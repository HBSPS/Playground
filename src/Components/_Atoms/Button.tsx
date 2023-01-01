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
  user-select: none;
`;

const LightB = styled(DefaultButton)`
  color: black;
  background-color: rgba(255, 255, 255, 0.25);
`;

const SandB = styled(LightB)`
  position: absolute;
  bottom: 25vh;
  z-index: 99;
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

const SandButton = (props: IProps) => {
  const { children, onClick } = props;
  return <SandB onClick={onClick}>{children}</SandB>;
};

export const Button = Object.assign(DButton, {
  Light: LButton,
  Sand: SandButton,
});
