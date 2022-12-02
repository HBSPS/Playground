import { PropsWithChildren } from 'react';
import P, { TextSize } from '../_Atoms/P';
import StyledLink from '../_Atoms/StyledLink';

interface IProps extends PropsWithChildren {
  title: string;
  to: string;
  buttonColor?: string;
}

const HomePlaygroundText = (props: IProps) => {
  return (
    <>
      <P size={TextSize.big}>{props.title}</P>
      <StyledLink to={props.to} color={props.buttonColor}>Try</StyledLink>
    </>
  );
};

export default HomePlaygroundText;
