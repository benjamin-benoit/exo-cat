import styled from 'styled-components';
import { media } from '../../styles-constants';

export const Container = styled.div`
    margin: 20px;
`;

export const Title = styled.div`
    color: #FFF;
    font-size: xxx-large;
    text-align: center;
    transform: translate(0, 50%);
`;

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const Grid = styled(BaseGrid)`
  ${media.S`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  `}
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #8FD6BD;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  opacity: 0.9;
`

export const CatCard = styled.a`
  width: 200px;
  position: relative;
  cursor: pointer;
  &:hover ${CardOverlay} {
    top: 60%;
    height: 40%;
  }
`

export const CardText = styled.div`
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`

export const CatImage = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin: auto;
`;