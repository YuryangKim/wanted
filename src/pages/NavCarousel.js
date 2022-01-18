import React, { useState } from 'react';
import styled from 'styled-components';
import bar from '../assets/images/bars.svg';
import alarm from '../assets/images/alarm.svg';
import search from '../assets/images/search.svg';
import user from '../assets/images/user.svg';
import prevBtn from '../assets/images/prev.svg';
import nextBtn from '../assets/images/next.svg';

// RESPONSIVE WEB
// @media only screen and (min-width: 770px) {}
// @media only screen and (min-width: 1024px) {}
// @media only screen and (min-width: 1460px) {}
// @media only screen and (min-width: 1700px) {}

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

function CarouselNav() {
  const [index, setIndex] = useState(0);

  const CarouselNext = () => {
    if (index < END_INDEX) {
      setIndex(index + 1);
    }
    if (index === END_INDEX) {
      setIndex(0);
    }
  };

  const CarouselPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index <= 0) {
      setIndex(END_INDEX);
    }
  };

  return (
    <>
      <Container>
        <NavBar>
          <NavLeftContainer>
            <img src={bar} alt="직군별 메뉴보기" />
            <p>wanted</p>
          </NavLeftContainer>

          <MenuContainer>
            <MenuList>
              <Menu>채용</Menu>
              <Menu>이벤트</Menu>
              <Menu>직군별 연봉</Menu>
              <Menu>이력서</Menu>
              <Menu>커뮤니티</Menu>
              <Menu>프리랜서</Menu>
              <Menu>AI 합격예측</Menu>
            </MenuList>
          </MenuContainer>

          <NavRightContainer>
            <Icons>
              <img src={search} alt="검색하기" />
              <img src={alarm} alt="알림" />
              <img src={user} alt="프로필" />
            </Icons>
            <CompanyService>
              <p>기업 서비스</p>
            </CompanyService>
          </NavRightContainer>
        </NavBar>
      </Container>

      <CarouselContainer>
        <PrevBtn onClick={() => CarouselPrev()}>
          <img src={prevBtn} alt="이전 이미지 보기" />
        </PrevBtn>

        <CarouselList
          className="carouselList"
          src={carouselImages[index + 1]}
          alt="메인 이미지"
        />
        <CarouselImgContainer>
          <CarouselList
            className="carouselList"
            src={carouselImages[index]}
            alt="메인 이미지"
          />
        </CarouselImgContainer>
        <CarouselList
          className="carouselList"
          src={carouselImages[index + 2]}
          alt="메인 이미지"
        />

        <NextBtn onClick={() => CarouselNext()}>
          <img src={nextBtn} alt="다음 이미지 보기" />
        </NextBtn>
      </CarouselContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #e1e2e3;
  width: 100%;
  margin-top: -4px;
`;

const NavLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 50px;

  img {
    width: 20px;
    height: 15px;
    padding-right: 10px;
  }

  p {
    font-size: 20px;
    color: black;
    font-weight: 900;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 80px;
`;

const Menu = styled.li`
  padding: 10px 20px 10px 10px;
  font-size: 13px;
  color: 'black';
  list-style-type: none;

  @media only screen and (min-width: 770px) {
    padding: 5px;
    min-width: 50px;
    font-size: 8px;
  }
  @media only screen and (max-width: 770px) {
    padding: 5px;
    min-width: 50px;
    font-size: 8px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 5px;
    min-width: 70px;
    font-size: 10px;
  }

  @media only screen and (min-width: 1460px) {
    padding: 0;
    min-width: 100px;
    font-size: 13px;
  }

  @media only screen and (min-width: 1700px) {
    padding: 0;
    min-width: 120px;
    font-size: 13px;
  }

  :nth-child(5) {
    ::after {
      position: absolute;
      content: 'New';
      font-size: 3px;
      color: #3366ff;
      top: 1.5%;
    }
  }
  :nth-last-child(1) {
    ::after {
      position: absolute;
      content: 'Beta';
      font-size: 3px;
      color: #3366ff;
      top: 1.5%;
    }
  }
`;

const NavRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;

  img {
    width: 19px;
    height: 19px;
    padding-right: 20px;
  }
`;

const CompanyService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 5px;

  ::before {
    content: 'ㅣ';
    color: #e1e2e3;
    padding-right: 20px;
  }

  p {
    padding: 8px;
    color: #666;
    font-size: 13px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;

    @media only screen and (min-width: 770px) {
      padding: 6px;
      font-size: 6px;
    }
    @media only screen and (max-width: 770px) {
      padding: 6px;
      font-size: 8px;
    }

    @media only screen and (min-width: 1024px) {
      padding: 8px;
      font-size: 8px;
    }

    @media only screen and (min-width: 1460px) {
      padding: 8px;
      font-size: 13px;
    }

    @media only screen and (min-width: 1700px) {
      padding: 8px;
      font-size: 13px;
    }
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

const CarouselImgContainer = styled.div`
  padding: 0 20px 0 20px;
`;

const CarouselList = styled.img`
  display: flex;
  justify-content: center;
  width: 50vw;
`;

const PrevBtn = styled.button`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 30px;
  height: 60px;
  border-radius: 15px;
  opacity: 80%;
  border: 0;
  background-color: #fff;

  @media only screen and (max-width: 770px) {
    position: absolute;
    width: 20px;
    height: 35px;
    top: 13%;
    left: 14%;
  }

  @media only screen and (min-width: 770px) {
    position: absolute;
    width: 25px;
    height: 50px;
    top: 15%;
    left: 17%;
  }

  @media only screen and (min-width: 1024px) {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 16%;
    left: 20%;
  }

  @media only screen and (min-width: 1460px) {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 18%;
    left: 21%;
  }

  img {
    width: 1em;
    height: 1em;
    color: #000;
  }
`;

const NextBtn = styled.button`
  position: absolute;
  top: 40%;
  right: 20%;
  width: 30px;
  height: 60px;
  border-radius: 15px;
  opacity: 80%;
  border: 0;
  background-color: #fff;

  @media only screen and (max-width: 770px) {
    position: absolute;
    width: 20px;
    height: 35px;
    top: 13%;
    right: 14%;
  }

  @media only screen and (min-width: 770px) {
    position: absolute;
    width: 25px;
    height: 50px;
    top: 15%;
    right: 17%;
  }

  @media only screen and (min-width: 1024px) {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 16%;
    right: 20%;
  }

  @media only screen and (min-width: 1460px) {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 18%;
    right: 21%;
  }

  img {
    width: 1em;
    height: 1em;
  }
`;

export default CarouselNav;
