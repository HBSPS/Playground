import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
`;

const Black = styled(DefaultBackground)`
  background-color: black;
`;

const Snow = styled(DefaultBackground)`
  background: linear-gradient(#123, #111);
`;

const Beach = styled(DefaultBackground)`
  background-color: #edddc5;
`;

const BackGroundMain = (props: PropsWithChildren) => {
  const { children } = props;

  return <DefaultBackground>{children}</DefaultBackground>;
};

const SnowBackground = (props: PropsWithChildren) => {
  const { children } = props;

  return <Snow>{children}</Snow>;
};

const BlackBackground = (props: PropsWithChildren) => {
  const { children } = props;

  return <Black>{children}</Black>;
};

const BeachBackground = (props: PropsWithChildren) => {
  const { children } = props;

  return <Beach>{children}</Beach>;
};

export const BackGround = Object.assign(BackGroundMain, {
  Black: BlackBackground,
  Snow: SnowBackground,
  Beach: BeachBackground,
});
