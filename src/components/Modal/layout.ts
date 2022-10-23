import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: block;
  background: white;
  width: 70%;
  padding: 50px 10px;
  border-radius: 1rem;
  text-align: center;
`