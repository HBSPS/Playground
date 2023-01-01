import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DefaultWrapper = styled.div``;

const AbsoluteWrapper = styled.div`
  position: absolute;
`;

const WrapperMain = (props: PropsWithChildren) => {
  return <DefaultWrapper>{props.children}</DefaultWrapper>;
};

const WrapperAbsolute = (props: PropsWithChildren) => {
  return <AbsoluteWrapper>{props.children}</AbsoluteWrapper>;
};

export const Wrapper = Object.assign(WrapperMain, {
  Absolute: WrapperAbsolute,
});
