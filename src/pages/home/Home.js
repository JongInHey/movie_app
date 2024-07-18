import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import { Movies } from "./components/Movies";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { TopTitle } from "../../components/TopTitle";
import { useEffect, useState } from "react";
import "swiper/css";

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
  // console.log(popData);
  // console.log(`평점 좋음 :  ${topData}`);
  // console.log(`개봉 예정작 : ${upData}`);

  return (
    <>
      <TopTitle titleName={"Home"} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner data={nowData[0]} />

          <Movies title={"현재 상영 영화"} movieData={nowData} />
          <Movies title={"인기 영화"} movieData={popData} />
          <Movies title={"최고 평점 영화"} movieData={topData} />
          <Movies title={"개봉 예정 영화"} movieData={upData} />
        </>
      )}
    </>
  );
};
