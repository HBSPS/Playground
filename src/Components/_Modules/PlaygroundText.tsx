import { P, PProps } from '../_Atoms/P';
import useWindowWith from '../../Hooks/useWindowWidth';

const PlaygroundTextContent = (props: PProps) => {
  return <P {...props}>{props.children}</P>;
};

const PlaygroundTextTitle = (props: PProps) => {
  return <P.Big {...props}>{props.children}</P.Big>;
};

const PlaygroundTextInfo = (props: PProps) => {
  const screenWidth = useWindowWith();

  return screenWidth > 1100 ? (
    <P.Small {...props}>{'( If you press the f 1 1 key, you will have a better experience )'}</P.Small>
  ) : null;
};

export const PlaygroundText = Object.assign(PlaygroundTextContent, {
  Title: PlaygroundTextTitle,
  Info: PlaygroundTextInfo,
});
