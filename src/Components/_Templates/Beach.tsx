import { BackGround } from '../_Atoms/BackGround';
import HomeLink from '../_Atoms/HomeLink';
import Wave from '../_Modules/Wave';

const Beach = () => {
  return (
    <>
      <BackGround.Beach>
        <HomeLink color='black' />
        <Wave />
      </BackGround.Beach>
    </>
  );
};

export default Beach;
