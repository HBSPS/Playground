import styled from 'styled-components';

const BackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#123, #111);
`;

const Title = styled.h1`
  color: white;
`;

function Snow() {
  return (
    <>
      <BackGround>
        <Title>This is Snow!</Title>
      </BackGround>
    </>
  );
}

export default Snow;
