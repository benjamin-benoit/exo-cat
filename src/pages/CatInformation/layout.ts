import styled from 'styled-components';
import { media } from '../../styles-constants';

export const Container = styled.div`
  margin: 20px;
  width: 100%;
`;

export const MainContent = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`

export const CatInfos = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.S`
    flex-direction: row;
  `}
`

export const CatImage = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const CatDescr = styled.div`
  padding: 10px;
`