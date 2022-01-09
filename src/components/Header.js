import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import backIcon from '../static/back.svg';
export const Header = ({ exist }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        {exist && (
          <BackButton
            src={backIcon}
            alt="뒤로가기"
            onClick={() => navigate(-1)}
          />
        )}
        <HeaderText>LIKE LION EWHA</HeaderText>
        <div></div>
      </Container>
      <TextLine></TextLine>
    </>
  );
};
const Container = styled.div`
  height: 57px;
  background-color: #000000;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextLine = styled.div`
  width: 327px;
  margin: 0 auto;

  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;
const BackButton = styled.img`
  width: 20px;
  height: 15px;

  margin-left: 41px;
`;
const HeaderText = styled.span`
  display: inline-block;

  margin-left: 32px;
  margin-right: 93px;
  padding: 18px 0;
  color: #ffffff;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;
