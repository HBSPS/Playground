import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButton = styled(Link)`
  font-size: 2vh;
  position: absolute;
  left: 3vw;
  top: 3vw;
  background-color: none;
  color: white;
  z-index: 99;
`;

interface IProps extends PropsWithChildren {
  color?: string;
}

function HomeLink({ color = 'white' }: IProps) {
  const style = {
    color: color,
  };
  return (
    <HomeButton to='/' style={style}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </HomeButton>
  );
}

export default HomeLink;
