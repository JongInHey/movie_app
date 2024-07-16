import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { spacing } from "../../GlobalStyle";
import { ORIGIN_URL } from "../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 400px ${spacing.side} 0 ${spacing.side};

  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 600px;
    font-size: 20px;
    line-height: 30px;
    opacity: 0.7;
    font-weight: 300;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.65) 55%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();
        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  // console.log(isLoading);
  // console.log(`인기 영화 :  ${popData}`);
  // console.log(`평점 좋음 :  ${topData}`);
  // console.log(`개봉 예정작 : ${upData}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner $bgUrl={nowData[0].backdrop_path}>
            <BlackBg />
            <h3>{nowData[0].title}</h3>
            <p>{nowData[0].overview.slice(0, 100) + "..."}</p>
          </MainBanner>
        </>
      )}
    </>
  );
};
