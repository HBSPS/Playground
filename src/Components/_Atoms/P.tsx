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

const BigText = styled(DefaultText)`
  font-size: 5vh;
`;

const SmallText = styled(DefaultText)`
  font-size: 2vh;
`;

export enum PColor {
  blue = '#0984e3',
}

export interface PProps extends PropsWithChildren {
  color?: string;
}

const PRegular = (props: PProps) => {
  const style = {
    color: props.color,
  };

  return <DefaultText style={style}>{props.children}</DefaultText>;
};

const PBig = (props: PProps) => {
  const style = {
    color: props.color,
  };

  return <BigText style={style}>{props.children}</BigText>;
};

const PSmall = (props: PProps) => {
  const style = {
    color: props.color,
  };

  return <SmallText style={style}>{props.children}</SmallText>;
};

export const P = Object.assign(PRegular, {
  Big: PBig,
  Small: PSmall,
});
