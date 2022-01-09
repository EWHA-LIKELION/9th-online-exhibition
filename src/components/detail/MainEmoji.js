import React from 'react';
import styled from 'styled-components';
import detailBack from '../../static/detail_back.png';
import emoji from '../../static/emoji.png';
import quotes from '../../static/quotes.svg';
export const MainEmoji = () => {
  return (
    <>
      <BackImg src={detailBack} />
      <Emoji src={emoji} />
      <div>
        <Quotes src={quotes} />
        <Title>위트있는 사이트 한줄소개 어쩌고 저쩌고</Title>
      </div>
    </>
  );
};
const BackImg = styled.img`
  position: absolute;
  width: 284px;
  height: 266px;
  left: 43px;
  top: 20px;
`;
const Emoji = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 157px;
  top: 122px;
`;
const Quotes = styled.img`
  position: absolute;
  left: 62px;
  top: 196px;
`;
const Title = styled.span`
  color: #ffffff;
  position: absolute;
  width: 159px;
  left: 108px;
  top: 232px;

  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
`;
