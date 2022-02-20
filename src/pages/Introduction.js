import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import ideathon from '../static/activities/ideathon.png';
import sinchonthon from '../static/activities/sinchonthon.png';
import hackathon from '../static/activities/hackathon.png';
import festival from '../static/activities/festival.png';
import project from '../static/activities/project.png';
import seeunmoji from '../static/seeunmoji.png';
import taeeunmoji from '../static/eunimoji.png';
import jinimoji from '../static/jinimoji.png';
import sookimoji from '../static/sookimoji.png';
import recruit from '../static/recruit.png';
import arrow from '../static/arrow.svg';

const Introduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const curriculums = [
    {
      id: 1,
      title: 'Python & Git',
      content:
        'Python 기본 문법을 공부하고 Git을 사용하면서 프로젝트 협업 방법을 예습합니다.',
      background: 'rgba(61, 226, 147, 0.15)',
    },
    {
      id: 2,
      title: 'Web 기초',
      content:
        'html과 css를 공부하고 간단한 페이지를 만들어 보며 웹 프론트엔드의 기초를 쌓습니다.',
      background: 'rgba(61, 226, 147, 0.25)',
    },
    {
      id: 3,
      title: 'Django',
      content:
        'Python을 기반으로 하는 Django를 학습하고 웹 백엔드의 기초를 쌓습니다.',
      background: 'rgba(61, 226, 147, 0.35)',
    },
  ];
  const activities = [ideathon, sinchonthon, hackathon, festival, project];
  const management = [
    {
      content: '컴퓨터공학 18 | 김세은',
      img: seeunmoji,
    },
    {
      content: '컴퓨터공학 18 | 김태은',
      img: taeeunmoji,
    },
    {
      content: '사이버보안 19 | 박예진',
      img: jinimoji,
    },
    {
      content: '컴퓨터공학 19 | 지현숙',
      img: sookimoji,
    },
  ];

  return (
    <>
      <Header exist={true} />
      <Container>
        <ActivityImages src={require('../static/activities/intro_image.png')} />
        <FirstFlexWrapper>
          <Title>이화여자대학교</Title>
          <Title>멋쟁이사자처럼 9기</Title>
          <SubTitle>활동기간</SubTitle>
          <Text>2021. 03. 14 ― 11.30</Text>
          <SubTitle>공식 인스타그램</SubTitle>
          <Text>@likelion_ewha</Text>
        </FirstFlexWrapper>
        <FlexWrapper>
          <SquareTitle style={{ width: 130 }}>멋쟁이사자처럼 소개</SquareTitle>
          <Content style={{ fontWeight: 'bold' }}>HACK YOUR LIFE! </Content>
          <Content style={{ width: 303 }}>
            멋쟁이 사자처럼은 전공 무관, 나이 무관, 누구나 참여할 수 있는 웹
            서비스 개발 동아리입니다. 정규 세션과 스터디를 통해 개발을 공부하고
            아이디어톤, 해커톤, 프젝트 등을 통해 자신의 아이디어를 직접 실현시킬
            수 있습니다.
          </Content>
        </FlexWrapper>

        <FlexWrapper>
          <SquareTitle style={{ width: 93 }}>멋사 커리큘럼</SquareTitle>
          {curriculums.map((curriculum) => (
            <ImageWrapper>
              <Curriculum
                key={curriculum.id}
                style={{ background: `${curriculum.background}` }}
              >
                <CurriculumTitleWrapper>
                  <CurriculumTitle>{curriculum.title}</CurriculumTitle>
                  <CurriculumTitle>0{curriculum.id}</CurriculumTitle>
                </CurriculumTitleWrapper>
                <Content>{curriculum.content}</Content>
              </Curriculum>
              {curriculum.id < 3 && <img src={arrow} />}
            </ImageWrapper>
          ))}
        </FlexWrapper>
        <FlexWrapper>
          <SquareTitle style={{ width: 64 }}>활동내역</SquareTitle>
          {activities.map((activity) => (
            <img src={activity} style={{ marginBottom: 8 }} />
          ))}
          <SquareTitle style={{ width: 53 }}>운영진</SquareTitle>
        </FlexWrapper>
      </Container>
      <div>
        <ManagementWrapper>
          {management.map((manager) => (
            <ImageWrapper>
              <img src={manager.img} style={{ width: 170 }} />
              <Content>{manager.content}</Content>;
            </ImageWrapper>
          ))}
        </ManagementWrapper>
      </div>
      <ImageWrapper>
        <a href="https://www.notion.so/likelionewha/10-802131094ed5401a91839a6ce3fa033e">
          <img src={recruit} style={{ margin: '80px 0' }} />
        </a>
      </ImageWrapper>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
`;

const ActivityImages = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: -58px;
`;
const TextWrapper = styled.div``;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 303px;
`;

const FirstFlexWrapper = styled(FlexWrapper)`
  margin-top: -36px;
`;

const Title = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;
`;

const SubTitle = styled.p`
  margin-top: 16px;
  margin-bottom: 4px;

  font-size: 13px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.7);
`;

const Text = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;

  color: #ffffff;
`;

const SquareTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;

  margin-top: 55px;
  margin-bottom: 15px;

  font-size: 13px;
  color: #86e23d;

  border: 1px solid #86e23d;
`;

const Curriculum = styled.div`
  width: 303px;

  padding: 15px;
  margin: 5px 0;

  border-radius: 15px;
  backdrop-filter: blur(4px);
`;

const CurriculumTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

const CurriculumTitle = styled.p`
  font-size: 16px;
  color: #ffffff;
`;

const Content = styled.p`
  font-size: 14px;
  color: #ffffff;

  line-height: 23px;
`;

const ManagementWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Introduction;
