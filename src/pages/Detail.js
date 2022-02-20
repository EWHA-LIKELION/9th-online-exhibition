import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavigateBar } from '../components/detail/NavigateBar';
import { Header } from '../components/Header';
import { MainEmoji } from '../components/detail/MainEmoji';
import { useParams } from 'react-router';
import siteData from '../static/siteData';

const Detail = () => {
  const { currentIndex } = useParams();

  const hasLink = !(siteData[currentIndex].link === '');

  const paddingBottom = window.innerWidth / 2 - 80;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container hasLink={hasLink}>
      <Header exist={true} />
      <MainEmoji
        siteIntro={siteData[currentIndex].siteIntro}
        emoji={siteData[currentIndex].emojiFile}
      />
      <TextWrapper>
        <Title>{siteData[currentIndex].title}</Title>
        <TextLine />
        <Description>{siteData[currentIndex].description}</Description>
      </TextWrapper>
      <ImgWrapper>
        {siteData[currentIndex].siteImage.map((item, index) => (
          <SiteImage
            src={require(`../static/siteImages/${item}`)}
            key={index}
          />
        ))}
      </ImgWrapper>
      {hasLink ? (
        <BottomSpace paddingBottom={paddingBottom}></BottomSpace>
      ) : (
        <></>
      )}
      {hasLink ? <NavigateBar currentIndex={currentIndex} /> : <></>}
    </Container>
  );
};
const Container = styled.div`
  background-repeat: no-repeat;
  background-position: 43px 20px;
  padding-bottom: 20px;
`;
const TextWrapper = styled.div`
  padding: 0 36px;
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
  width: 100%;
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
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: contain;
`;

const BottomSpace = styled.div`
  height: ${(props) => props.paddingBottom}px;
  @media only screen and (min-width: 425px) {
    height: 160px;
  }
`;
export default Detail;
