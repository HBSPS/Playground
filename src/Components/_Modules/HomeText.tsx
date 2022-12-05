import { P, PColor } from '../_Atoms/P';
import Wrapper from '../_Atoms/Wrapper';

const HomeText = () => {
  return (
    <Wrapper>
      <P.Big color={PColor.blue}>Welcome!</P.Big>
      <P.Big color={PColor.blue}>Here is my playground!</P.Big>
      <P.Big color={PColor.blue}>This place is made up of my favorite things.</P.Big>
    </Wrapper>
  );
};

export default HomeText;
