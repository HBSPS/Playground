import styled from 'styled-components';
import P, { TextColor, TextSize } from '../_Atoms/P';

const TextWrapper = styled.div``;

const HomeText = () => {
  return (
    <TextWrapper>
      <P size={TextSize.big} color={TextColor.blue}>Welcome!</P>
      <P size={TextSize.big} color={TextColor.blue}>Here is my playground!</P>
      <P size={TextSize.big} color={TextColor.blue}>This place is made up of my favorite things.</P>
    </TextWrapper>
  );
};

export default HomeText;
