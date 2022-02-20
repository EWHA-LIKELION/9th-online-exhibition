import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import backIcon from '../static/back.svg';
import SizedBox from './SizedBox';

export const Header = ({ exist }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper exist={exist}>
        {exist ? (
          <BackButton
            src={backIcon}
            alt="뒤로가기"
            onClick={() => navigate(-1)}
          />
        ) : (
          <></>
        )}
        <HeaderText exist={exist}>LIKE LION EWHA</HeaderText>
        <SizedBox width={exist ? 25 : 0} />
      </Wrapper>
      <TextLine></TextLine>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 36px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 57px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.exist ? 'space-between' : 'center')};
`;

const TextLine = styled.div`
  width: 100%;

  background-color: rgba(255, 255, 255, 0.4);
  height: 1px;
`;
const BackButton = styled.img`
  width: 20px;
  height: 15px;

  margin-left: 5px;
`;
const HeaderText = styled.span`
  display: inline-block;

  /* margin-left: 32px;
  margin-right: ${(props) => (props.exist ? '93px' : '32px')}; */
  padding: 18px 0;
  color: #ffffff;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;
