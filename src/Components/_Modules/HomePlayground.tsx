import { P, PProps } from '../_Atoms/P';
import StyledLink, { StyledLinkProps } from '../_Atoms/StyledLink';

const PlaygroundText = (props: PProps) => {
  return <P.Big {...props}>{props.children}</P.Big>;
};

const PlaygroundLink = (props: StyledLinkProps) => {
  return <StyledLink {...props}>Try</StyledLink>;
};

export const HomePlayground = Object.assign({
  Link: PlaygroundLink,
  Title: PlaygroundText,
});
