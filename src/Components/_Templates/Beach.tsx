import { BackGround } from '../_Atoms/BackGround';
import HomeLink from '../_Atoms/HomeLink';
import { PlaygroundText } from '../_Modules/PlaygroundText';
import Wave from '../_Modules/Wave';
import { Wrapper } from '../_Atoms/Wrapper';

const Beach = () => {
  return (
    <>
      <BackGround.Beach>
        <HomeLink color='black' />
        <Wave />
        <Wrapper.Absolute>
          <PlaygroundText.Title color='black'>Welcome!</PlaygroundText.Title>
          <PlaygroundText color='black'>You can write anything here.</PlaygroundText>
          <PlaygroundText color='black'>Try letting the waves erase it.</PlaygroundText>
        </Wrapper.Absolute>
      </BackGround.Beach>
    </>
  );
};

export default Beach;
