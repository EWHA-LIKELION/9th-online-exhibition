import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { MainEmoji } from '../components/detail/MainEmoji';
const Detail = () => {
  return (
    <Container>
      <Header exist={true} />
      <MainEmoji />
      <Title>Website Title</Title>
    </Container>
  );
};
const Container = styled.div`
  background-image: url(${process.env.PUBLIC_URL + 'detail_back.png'});
  background-repeat: no-repeat;
  background-position: 43px 20px;
`;
const Title = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;

  color: #ffffff;
`;
export default Detail;
