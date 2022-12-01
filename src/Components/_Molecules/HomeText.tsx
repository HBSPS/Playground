import P, { TextColor, TextSize } from '../_Atoms/P';
import Wrapper from '../_Atoms/Wrapper';

const HomeText = () => {    
  return (
    <Wrapper>
      <P size={TextSize.big} color={TextColor.blue}>Welcome!</P>
      <P size={TextSize.big} color={TextColor.blue}>Here is my playground!</P>
      <P size={TextSize.big} color={TextColor.blue}>This place is made up of my favorite things.</P>
    </Wrapper>
  );
};

export default HomeText;
