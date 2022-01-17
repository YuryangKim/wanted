import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bar from '../assets/images/bars.svg';
import alarm from '../assets/images/alarm.svg';
import search from '../assets/images/search.svg';
import user from '../assets/images/user.svg';
import preBtn from '../assets/images/prev.svg';
import nextBtn from '../assets/images/next.svg';

const END_INDEX = 10;
const carouselImages = [
  'images/1.jpeg',
  'images/2.jpeg',
  'images/3.jpg',
  'images/4.jpeg',
  'images/5.jpeg',
  'images/6.jpeg',
  'images/7.jpeg',
  'images/8.jpeg',
  'images/9.jpeg',
  'images/10.jpeg',
  'images/11.jpg',
];

function Nav() {
  const [index, setIndex] = useState(0);

  const carouselRight = () => {
    if (index < END_INDEX) {
      setIndex(index + 1);
    }
    if (index === END_INDEX) {
      setIndex(0);
    }
  };

  const carouselLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index <= 0) {
      setIndex(END_INDEX);
    }
  };

  return (
    <TopContainer>
      <NavBar>
        <NavLeftContainer>
          <DrawerMenuBar>
            <img src={bar} alt="직군별 카테고리" />
          </DrawerMenuBar>
          <Link to="/">
            <H1>wanted</H1>
          </Link>
        </NavLeftContainer>

        <NavMenuBar>
          <Link to="/" activeClassName="active">
            <Menu>채용</Menu>
            <Menu>이벤트</Menu>
            <Menu>직군별 연봉</Menu>
            <Menu>커뮤니티</Menu>
            <Menu>프리랜서</Menu>
            <Menu>AI 합격예측</Menu>
          </Link>
        </NavMenuBar>

        <NavRightContainer>
          <NavIcons>
            <img src={search} alt="태그, 회사, 포지션 검색" />
            <img src={alarm} alt="알림" />
            <img src={user} alt="프로필" />
          </NavIcons>
          <Link to="/">
            <CompanyRegister>기업 서비스</CompanyRegister>
          </Link>
        </NavRightContainer>
      </NavBar>

      <CarouselDiv>
        <ImgList
          className="imgList"
          alt="slide-image"
          src={carouselImages[index]}
        >
          <PrevBtnArea>
            <img src={preBtn} alt="이전 페이지 가기" />
          </PrevBtnArea>
          <NextBtnArea>
            <img src={nextBtn} alt="다음 페이지 가기" />
          </NextBtnArea>
        </ImgList>
      </CarouselDiv>
    </TopContainer>
  );
}

const TopContainer = styled.div``;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLeftContainer = styled.div``;

const DrawerMenuBar = styled.div``;

const H1 = styled.h1``;

const NavMenuBar = styled.div``;

const Menu = styled.p``;

const 

export default Nav;
