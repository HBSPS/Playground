import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const DefaultLink = styled(Link)`
  font-family: 'GruppoRegular';
  padding: 1vh 3vh;
  margin-left: 3vw;
  border-radius: 1vh;
  text-decoration: none;
  font-size: 2vh;
  font-weight: bold;
  background-color: white;

  color: ${(props) => props.color};
`;

interface IProps extends PropsWithChildren {
  text?: string;
  to: string;
  color?: string;
}

function StyledLink({ text, to, color = 'white' }: IProps) {
  const style = {
    color: color,
  };
  return <DefaultLink to={to} style={style}>{text}</DefaultLink>
}

export default StyledLink;
