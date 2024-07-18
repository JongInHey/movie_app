import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { TopTitle } from "../../components/TopTitle";
import { Loading } from "../../components/Loading";
import { Detailview } from "./components/Detailview";

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);

        setDetailData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);

  return (
    <>
      <TopTitle titleName={"Detail"} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Detailview detailData={detailData} />
        </>
      )}
    </>
  );
};
