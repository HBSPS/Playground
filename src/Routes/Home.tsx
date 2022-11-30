import styled from 'styled-components';
import scroll_down from '../Assets/Images/scroll_down.png'
import P, { TextColor, TextSize } from '../Components/_Atoms/P';
import StyledLink from '../Components/_Atoms/StyledLink';

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

const Wrapper = styled.div`
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
      <Wrapper>
        <BackGround>
          <div>
            <P size={TextSize.big} color={TextColor.blue} text='Welcome!' />
            <P size={TextSize.big} color={TextColor.blue} text='Here is my playground!' />
            <P size={TextSize.big} color={TextColor.blue} text='This place is made up of my favorite things.' />
          </div>
          <ScrollDownIcon />
        </BackGround>
        <BackGround style={{ background: 'black' }}>
          <P size={TextSize.big} text='Snow' />
          <StyledLink to='/snow' color='black' text='Try' />
        </BackGround>
      </Wrapper>
    </>
  );
}

export default Home;
