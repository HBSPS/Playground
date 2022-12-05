import { PropsWithChildren, useEffect, useState } from 'react';
import { P } from '../_Atoms/P';

interface IProps extends PropsWithChildren {
  color?: string;
}

const PlaygroundTextContent = (props: IProps) => {
  return <P {...props}>{props.children}</P>;
};

const PlaygroundTextTitle = (props: IProps) => {
  return <P.Big {...props}>{props.children}</P.Big>;
};

const PlaygroundTextInfo = (props: IProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return screenWidth > 1100 ? (
    <P.Small {...props}>{'( If you press the f 1 1 key, you will have a better experience )'}</P.Small>
  ) : null;
};

export const PlaygroundText = Object.assign(PlaygroundTextContent, {
  Title: PlaygroundTextTitle,
  Info: PlaygroundTextInfo,
});

export default PlaygroundText;
