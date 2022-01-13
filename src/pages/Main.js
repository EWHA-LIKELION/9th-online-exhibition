import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import Planet from '../components/main/Planet';
import SizedBox from '../components/SizedBox';
import siteData from '../static/siteData';
import { ReactComponent as Logo } from '../static/likelion.svg';
import { useNavigate } from 'react-router';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header exist={false} />
      <Container>
        <SizedBox height={25} />

        <LogoTitleWrapper>
          <ColumnWrapper>
            <SizedBox height={30} />
            <MainTitle year={true}>2021</MainTitle>
            <SizedBox height={13} />
          </ColumnWrapper>
          <Logo />
        </LogoTitleWrapper>

        <MainTitle year={false}>
          LIKELION EWHA{'\n'}Website Exhibition
        </MainTitle>
        <SizedBox height={10} />
        <IntroLabel>멋쟁이사자처럼 9기 아기사자 웹사이트 전시</IntroLabel>
        <SizedBox height={60} />
        <PlanetContainer>
          {siteData.map((item, index) => {
            return <Planet index={index} navigate={navigate} />;
          })}
        </PlanetContainer>
        <SizedBox height={60} />
        <Separator />
        <SizedBox height={18} />
        <FooterLabel>©2021 LIKELION EWHA</FooterLabel>
        <SizedBox height={20} />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  padding: 0px 36px;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + 'main-background.png'});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.year ? '50px' : '27px')};
  line-height: ${(props) => (props.year ? '34px' : '32px')};
  color: #ffffff;
`;

const IntroLabel = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.8);
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

const FooterLabel = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
`;
