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

interface IProps extends PropsWithChildren {
  color?: string;
}

const PRegular = (props: IProps) => {
  const { children, color } = props;
  const style = {
    color: color,
  };

  return <DefaultText style={style}>{children}</DefaultText>;
};

const PBig = (props: IProps) => {
  const { children, color } = props;
  const style = {
    color: color,
  };

  return <BigText style={style}>{children}</BigText>;
};

const PSmall = (props: IProps) => {
  const { children, color } = props;
  const style = {
    color: color,
  };

  return <SmallText style={style}>{children}</SmallText>;
};

export const P = Object.assign(PRegular, {
  Big: PBig,
  Small: PSmall,
});
