import styled from 'styled-components';
import scroll_down from '../Assets/Images/scroll_down.png'
import P, { TextSize } from '../Components/_Atoms/P';
import StyledLink from '../Components/_Atoms/StyledLink';
import HomeText from '../Components/_Molecules/HomeText';

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  overflow: hidden;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  position: relative;
`;

const HomeWrapper = styled.div`
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const ScrollDownIcon = styled.div`
  width: 10vh;
  height: 10vh;
  background-image: url(${scroll_down});
  background-size: cover;
  position: absolute;
  left: 45vw;
  bottom: 10vh;
`;

function Home() {
  return (
    <>
      <HomeWrapper>
        <BackGround>
          <HomeText />
          <ScrollDownIcon />
        </BackGround>
        <BackGround style={{ background: 'black' }}>
          <P size={TextSize.big}>Snow</P>
          <StyledLink to='/snow' color='black'>Try</StyledLink>
        </BackGround>
      </HomeWrapper>
    </>
  );
}

export default Home;
