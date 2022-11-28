import styled from 'styled-components';

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div``;

const Text = styled.p`
  font-family: 'GruppoRegular';
  color: #0984e3;
  font-size: 5vh;
  margin-left: 3vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
`;

function Home() {
  return (
    <>
      <BackGround>
        <Wrapper>
          <Text>Welcome!</Text>
          <Text>Here is my playground!</Text>
          <Text>This place is made up of my favorite things</Text>
        </Wrapper>
      </BackGround>
    </>
  );
}

export default Home;
