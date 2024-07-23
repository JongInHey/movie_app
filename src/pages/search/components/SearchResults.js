import { Link } from "react-router-dom";
import styled from "styled-components";
import { NOIMG_URL, W500_URL } from "../../../constant/imgUrl";
import { Loading } from "../../../components/Loading";

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 15px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    row-gap: 15px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 450px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    height: 215px;
  }
`;

export const SearchResults = ({ isLoading, searchData }) => {
  return (
    <ConWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {searchData.map((data) => (
            <Con key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <Bg>
                  <img
                    src={
                      data.poster_path === null
                        ? NOIMG_URL
                        : W500_URL + data.poster_path
                    }
                    alt={data.title}
                  />
                </Bg>
              </Link>
            </Con>
          ))}
        </>
      )}
    </ConWrap>
  );
};
