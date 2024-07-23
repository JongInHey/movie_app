import { useForm } from "react-hook-form";
import { TopTitle } from "../../components/TopTitle";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { spacing } from "../../GlobalStyle";
import { searchMovie } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  padding: 150px ${spacing.side};
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: lightgreen;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 450px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const { results: searchResult } = await searchMovie(keyword);

      setSearchData(searchResult);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchData);

  return (
    <>
      <TopTitle titleName={"Search"} />
      <Container>
        <Form onSubmit={handleSubmit(onSearchResult)}>
          <input
            {...register("keyword", {
              required: "검색 내용을 입력해주세요..!(●'◡'●)",
            })}
            type="text"
            placeholder="검색할 내용을 입력하세요.."
          />
          <button>
            <ImSearch />
          </button>
          <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
        </Form>

        {searchData?.length === 0 ? (
          <ErrorMessage>검색 결과가 없습니다..!</ErrorMessage>
        ) : (
          <>
            {searchData && (
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
                              src={W500_URL + data.poster_path}
                              alt={data.title}
                            />
                          </Bg>
                        </Link>
                      </Con>
                    ))}
                  </>
                )}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </>
  );
};
