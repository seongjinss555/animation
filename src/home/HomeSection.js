import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

const TypewriterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px; /* 안쪽 여백 */
  border: 2px solid #000; /* 테두리 색 */
  border-radius: 15px; /* 둥근 모서리 */
  background-color: #fff; /* 배경색 */
  width: 900px; /* 박스 너비 */
  margin: 20px 0; /* 위 아래 여백 */
  font-size: 38px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 전체 화면을 차지 */
  background-color: #f8f9fa; /* 밝은 배경색 */
  font-family: Arial, sans-serif; /* 기본 폰트 설정 */
`;

const HomeTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>geegle</HomeTitle>
      <TypewriterBox>
        <TypewriterComponent
          options={{
            strings: ["Hello World!"],
            autoStart: true,
            loop: true,
            delay: 65,
          }}
        />
      </TypewriterBox>
    </HomeContainer>
  );
};

export default Home;
