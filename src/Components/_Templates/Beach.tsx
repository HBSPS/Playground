import { BackGround } from '../_Atoms/BackGround';
import HomeLink from '../_Atoms/HomeLink';
import { PlaygroundText } from '../_Modules/PlaygroundText';
import Wave from '../_Modules/Wave';
import Wrapper from '../_Atoms/Wrapper';

const Beach = () => {
  return (
    <>
      <BackGround.Beach>
        <HomeLink color='black' />
        <Wave />
        <Wrapper style={{position: 'absolute'}}>
          <PlaygroundText.Title color='black'>Welcome!</PlaygroundText.Title>
          <PlaygroundText color='black'>You can write any text here.</PlaygroundText>
          <PlaygroundText color='black'>Try pushing the button and let the waves come.</PlaygroundText>
        </Wrapper>
      </BackGround.Beach>
    </>
  );
};

export default Beach;
