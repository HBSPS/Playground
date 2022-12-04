import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultText = styled.p`
  font-family: 'GruppoRegular';
  margin-left: 3vw;
  margin-bottom: 5vh;
  margin-top: 5vh;

  font-size: 3vh;
  color: white;
`;

const BlueText = styled(DefaultText)`
  color: #0984e3;
`;

const BigText = styled(DefaultText)`
  font-size: 5vh;
`;

const SmallText = styled(DefaultText)`
  font-size: 2vh;
`;

const BigBlue = styled(DefaultText)`
  font-size: 5vh;
  color: #0984e3;
`;

const PMain = (props: PropsWithChildren) => {
  const { children } = props;

  return <DefaultText>{children}</DefaultText>;
};

export const P = Object.assign(PMain, {
  Blue: BlueText,
  Big: BigText,
  BigBlue: BigBlue,
  Small: SmallText,
});
