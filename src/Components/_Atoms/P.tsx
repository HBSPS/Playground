import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export enum TextColor {
  default = 'white',

  blue = '#0984e3',
}

export enum TextSize {
  default = '3vh',
  
  big = '5vh',
  small = '2vh',
}

const DefaultText = styled.p`
  font-family: 'GruppoRegular';
  margin-left: 3vw;
  margin-bottom: 5vh;
  margin-top: 5vh;

  font-size: ${TextSize.default};
  color: ${TextColor.default};
`;

interface IProps extends PropsWithChildren {
  color?: string;
  size?: string;
}

const P = (props: IProps) => {
  const { size, color, children } = props;
  const style = {
    color: color,
    fontSize: size,
  };

  return <DefaultText style={style}>{children}</DefaultText>;
}

export default P;
