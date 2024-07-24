import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { TopTitle } from "../../components/TopTitle";
import { Loading } from "../../components/Loading";
import { ViewDetail } from "./components/ViewDetail";
import { useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export const Detail = () => {
  useScrollTop();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);

        setDetailData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  // console.log(detailData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TopTitle titleName={detailData.title} />
          <ViewDetail detailData={detailData} />
        </>
      )}
    </>
  );
};
