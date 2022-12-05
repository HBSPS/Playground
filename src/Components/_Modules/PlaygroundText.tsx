import { PropsWithChildren } from 'react';
import { P } from '../_Atoms/P';

interface IProps extends PropsWithChildren {
  title: string;
  text1?: string;
  text2?: string;
}

const PlaygroundText = (props: IProps) => {
  return (
    <>
      <P.Big>{props.title}</P.Big>
      <P>{props.text1}</P>
      <P>{props.text2}</P>
    </>
  );
};

export default PlaygroundText;
