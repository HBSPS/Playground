import { PropsWithChildren } from 'react';
import { P } from '../_Atoms/P';
import StyledLink from '../_Atoms/StyledLink';

interface IProps extends PropsWithChildren {
  title: string;
  to: string;
  buttonColor?: string;
}

const HomePlaygroundText = (props: IProps) => {
  return (
    <>
      <P.Big>{props.title}</P.Big>
      <StyledLink to={props.to} color={props.buttonColor}>Try</StyledLink>
    </>
  );
};

export default HomePlaygroundText;
