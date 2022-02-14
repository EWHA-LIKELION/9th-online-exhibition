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
        <Description>{siteData[currentIndex].description}</Description>
      </TextWrapper>
      <ImgWrapper>
        {siteData[currentIndex].siteImage.map((item, index) => (
          <SiteImage src={require(`../static/${item}`)} key={index} />
        ))}
      </ImgWrapper>
      <NavigateBar currentIndex={currentIndex} />
    </Container>
  );
};
const Container = styled.div`
  background-image: url(${process.env.PUBLIC_URL + 'detail_back.png'});
  background-repeat: no-repeat;
  background-position: 43px 20px;
  padding-bottom: 200px;
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
  white-space: pre-wrap;
  font-weight: 400;
`;
const ImgWrapper = styled.div`
  padding: 50px 36px 0px 36px;
`;
const SiteImage = styled.img`
  width: 100%;
`;
export default Detail;
