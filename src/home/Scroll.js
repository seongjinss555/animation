import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 나열 */
  border-radius: 15px;
  border: 2px solid #fff;
  height: 100vh; /* 전체 화면 높이 */
  overflow: hidden; /* 스크롤 숨기기 */
  background-color: #f8f9fa;
`;

const Page = styled.div`
  height: 100vh; /* 각 페이지의 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-bottom: 2px solid #fff; /* 페이지 구분을 위한 테두리 */
`;

const Scroll = () => {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지W");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <ScrollContainer ref={outerDivRef}>
      <Page style={{ backgroundColor: "#f0f0f0" }}>1페이지</Page>
      <Page style={{ backgroundColor: "#d0d0d0" }}>2페이지</Page>
      <Page style={{ backgroundColor: "#b0b0b0" }}>3페이지</Page>
    </ScrollContainer>
  );
};

export default Scroll;
