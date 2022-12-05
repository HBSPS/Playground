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

const BlackBackground = styled(DefaultBackground)`
  background-color: black;
`;

const SnowBackground = styled(DefaultBackground)`
  background: linear-gradient(#123, #111);
`;

const BackGroundMain = (props: PropsWithChildren) => {
  const { children } = props;

  return <DefaultBackground>{children}</DefaultBackground>;
};

export const BackGround = Object.assign(BackGroundMain, {
  Black: BlackBackground,
  Snow: SnowBackground,
});
