import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";

export const Container = styled.section`
  padding: 150px 20%;
  display: flex;

  @media screen and (max-width: 1548px) {
    padding: 150px 10%;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 150px 0 0 ${spacing.side};
  }

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide} 0 ${spacing.moSide};
    display: block;
    text-align: center;
  }
`;

export const CoverImg = styled.img`
  width: 45%;
  border-radius: 10px;
  margin-right: 5%;
  object-fit: cover;

  @media screen and (max-width: 1548px) {
    width: 43%;
    margin-right: 3%;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const ConWrap = styled.div`
  width: 47%;
  padding: 0 20px;

  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1548px) {
    h3 {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    h3 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    h3 {
      font-size: 37px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }

  @media screen and (max-width: 1548px) {
    span {
      padding: 7px 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      padding: 10px 15px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    span {
      font-size: 14px;
    }
  }
`;

export const Genres = styled.ul`
  list-style: square;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 20px;
  opacity: 0.8;
  li {
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 20px 30px 20px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin: 0 auto;
    li {
      margin: 5px 10px;
      font-size: 14px;
      padding: 5px 10px;
    }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;

  @media screen and (max-width: 1548px) {
    margin-top: 75px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0 auto;
    line-height: 25px;
  }
`;
