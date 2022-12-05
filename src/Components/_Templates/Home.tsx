import styled from 'styled-components';
import { BackGround } from '../_Atoms/BackGround';
import ScrollDownIcon from '../_Atoms/ScrollDownIcon';
import { HomePlayground } from '../_Modules/HomePlayground';
import HomeText from '../_Modules/HomeText';

const HomeWrapper = styled.div`
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <BackGround>
          <HomeText />
          <ScrollDownIcon />
        </BackGround>
        <BackGround.Black>
          <HomePlayground.Title>Snow</HomePlayground.Title>
          <HomePlayground.Link color='black' to='/snow' />
        </BackGround.Black>
      </HomeWrapper>
    </>
  );
}

export default Home;
