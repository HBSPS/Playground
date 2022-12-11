import { BackGround } from '../_Atoms/BackGround';
import { Button } from '../_Atoms/Button';
import HomeLink from '../_Atoms/HomeLink';
import { Wrapper } from '../_Atoms/Wrapper';
import { PlaygroundText } from '../_Modules/PlaygroundText';
import useSnowFlake from '../../Hooks/useSnowFlake';
import SnowFlakes from '../_Modules/SnowFlakes';

const Snow = () => {
  const { SnowFlakeCount, addSnowFlake, clearSnowFlakes } = useSnowFlake();

  return (
    <>
      <BackGround.Snow>
        <HomeLink />
        <Wrapper>
          <PlaygroundText.Title>Welcome!</PlaygroundText.Title>
          <PlaygroundText>You can add snowflakes here.</PlaygroundText>
          <PlaygroundText>Try adding as many snowflakes as you like and get some rest.</PlaygroundText>
          <>
            <Button onClick={addSnowFlake}>Add Snowflake</Button>
            <Button onClick={clearSnowFlakes}>Clear Snowflakes</Button>
          </>
          <PlaygroundText.Info />
        </Wrapper>
        <SnowFlakes SnowFlakeCount={SnowFlakeCount} />
      </BackGround.Snow>
    </>
  );
};

export default Snow;
