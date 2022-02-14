import React from 'react';
import styled from 'styled-components';
import emoji from '../../static/emoji.png';
import quotes from '../../static/quotes.svg';
export const MainEmoji = ({ siteIntro }) => {
  return (
    <Container>
      <IMM src={require('../../static/detail_back.png')} />
      <ImgWrapper>
        <Emoji src={emoji} />
        <Quotes src={quotes} />
        <Title>{siteIntro}</Title>
      </ImgWrapper>
    </Container>
  );
};
const Container = styled.div`
  /* margin-top: 65px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
  margin-top: -162px;
`;
const Emoji = styled.img`
  width: 60px;
  height: 60px;
  z-index: 10;
`;
const Quotes = styled.img`
  width: 251px;
  z-index: 10;

  height: 140px;
`;
const Title = styled.span`
  color: #ffffff;
  z-index: 10;

  position: absolute;
  top: 50%;
  width: 167px;

  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  white-space: pre-wrap;
`;

const IMM = styled.img`
  max-width: 284px;
  margin-top: -37px;
  margin-left: -4px;
`;
