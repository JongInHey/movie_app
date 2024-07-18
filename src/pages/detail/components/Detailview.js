import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 500px;
  }
  @media screen and (max-width: 1024px) {
    padding: 100px 0 0 ${spacing.taside};
    img {
      width: 350px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide};

    img {
      width: 200px;
    }
  }
`;

const ConWrap = styled.div`
  padding: 0 20px;
  p {
    font-size: 18px;
    font-weight: 300;
    opacity: 0.7;
    line-height: 25px;
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const Title = styled.div`
  h3 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  span {
    display: block;
    font-size: 18px;
    margin-top: 20px;
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    span {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;

const Genres = styled.ul`
  padding: 15px 25px 40px 25px;
  list-style: square;
  width: 330px;
  display: flex;
  justify-content: space-between;
  li {
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 20px 30px 20px;
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const Overview = styled.div`
  h3 {
    font-size: 35px;
    margin-bottom: 15px;
    font-weight: 400;
  }
`;

export const Detailview = ({ detailData }) => {
  return (
    <>
      <Section>
        <img
          src={`${W500_URL}${detailData.poster_path}`}
          alt={detailData.title}
        />
        <ConWrap>
          <Title>
            <h3>{detailData.title}</h3>
            <p>런타임 : {detailData.runtime}분</p>
            <p>개봉일 : {detailData.release_date}</p>
            <span>장르</span>
          </Title>

          <Genres>
            <li>{detailData.genres[0].name}</li>
            <li>{detailData.genres[1].name}</li>
            <li>{detailData.genres[2].name}</li>
            <li>{detailData.genres[3].name}</li>
          </Genres>
          <Overview>
            <h3>줄거리</h3>
            <p>{detailData.overview}</p>
          </Overview>
        </ConWrap>
      </Section>
    </>
  );
};
