import React from 'react';
import styled from 'styled-components';
import Planet from '../components/main/Planet';

const Main = () => {
  return (
    <Container>
      <Planet index={0} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  padding: 0px 36px;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + 'main-background.png'});
  background-size: contain;
  background-repeat: no-repeat;
`;
