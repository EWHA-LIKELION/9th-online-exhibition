import React from 'react';
import styled from 'styled-components';
import emoji from '../../static/emoji.png';
import quotes from '../../static/quotes.svg';
export const MainEmoji = () => {
  return (
    <Container>
      <ImgWrapper>
        <Emoji src={emoji} />
        <Quotes src={quotes} />
        <Title>위트있는 사이트 한줄소개 어쩌고 저쩌고</Title>
      </ImgWrapper>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 65px;
`;
const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
const Emoji = styled.img`
  width: 60px;
  height: 60px;
`;
const Quotes = styled.img`
  width: 251px;
  height: 140px;
`;
const Title = styled.span`
  color: #ffffff;

  position: absolute;
  top: 50%;
  width: 159px;

  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
`;
