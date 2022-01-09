import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { MainEmoji } from '../components/detail/MainEmoji';
const Detail = () => {
  return (
    <div>
      <Header exist={true} />
      <MainEmoji />
    </div>
  );
};
const Title = styled.div``;
export default Detail;
