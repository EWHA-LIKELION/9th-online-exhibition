import React from 'react';
import styled from 'styled-components';
import { NavigateBar } from '../components/detail/NavigateBar';
import { Header } from '../components/Header';
import { MainEmoji } from '../components/detail/MainEmoji';
import { useParams } from 'react-router';
import siteData from '../static/siteData';

const Detail = () => {
  const { currentIndex } = useParams();

  return (
    <Container>
      <Header exist={true} />
      <MainEmoji siteIntro={siteData[currentIndex].siteIntro} />
      <TextWrapper>
        <Title>{siteData[currentIndex].title}</Title>
        <TextLine />
        <Title>Description</Title>
        <Description>
          대왕고래에게 유일하게 알려진 자연 위협은 범고래이다. 대왕고래의
          성체들은 이런 엄청난 지구력과 준수한 속도로 범고래 무리를 따돌린다. 이
          전략은 단순하지만 성체의 경우 탈출 성공률이 매우 높은데, 그 이유는
          범고래가 제대로 공격을 하려면
        </Description>
      </TextWrapper>
      <ImgWrapper></ImgWrapper>
      <NavigateBar />
    </Container>
  );
};
const Container = styled.div`
  background-image: url(${process.env.PUBLIC_URL + 'detail_back.png'});
  background-repeat: no-repeat;
  background-position: 43px 20px;
`;
const TextWrapper = styled.div`
  margin: 0 36px;
`;
const Title = styled.div`
  margin-bottom: 18px;

  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;

  color: #ffffff;
`;
const TextLine = styled.div`
  width: 303px;
  margin-bottom: 18px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const Description = styled.div`
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
`;
const ImgWrapper = styled.div`
  margin-top: 50px;
`;
export default Detail;
