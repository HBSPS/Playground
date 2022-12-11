import { BackGround } from '../_Atoms/BackGround';
import HomeLink from '../_Atoms/HomeLink';
import { PlaygroundText } from '../_Modules/PlaygroundText';
import Wave from '../_Modules/Wave';
import { Wrapper } from '../_Atoms/Wrapper';
import BeachSky from '../_Modules/BeachSky';
import { Button } from '../_Atoms/Button';

const Beach = () => {
  return (
    <>
      <BackGround.Beach>
        <HomeLink color='black' />
        <BeachSky />
        <Wave />
        <Wrapper.Absolute>
          <PlaygroundText.Title color='black'>Welcome!</PlaygroundText.Title>
          <PlaygroundText color='black'>You can write anything here.</PlaygroundText>
          <PlaygroundText color='black'>Try letting the waves erase it.</PlaygroundText>
          <Button.Light onClick={() => {}}>Wave</Button.Light>
          <PlaygroundText.Info color='black' />
        </Wrapper.Absolute>
      </BackGround.Beach>
    </>
  );
};

export default Beach;
