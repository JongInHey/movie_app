import { useForm } from "react-hook-form";
import { TopTitle } from "../../components/TopTitle";
import styled from "styled-components";
import { spacing } from "../../GlobalStyle";
import { searchMovie } from "../../api";
import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";
import { ErrorMessage } from "./components/ErrorMessage";

const Container = styled.div`
  padding: 150px ${spacing.side};

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide};
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
  const nullKeyword = watch("keyword");

  // console.log(nullKeyword);
  // console.log(searchData);
  const formProps = {
    onSearchResult: handleSubmit(onSearchResult),
    register,
    errors,
  };
  return (
    <>
      <TopTitle titleName={"Search"} />
      <Container>
        <SearchForm {...formProps} />

        {nullKeyword && searchData?.length === 0 ? (
          <>
            <ErrorMessage message={"검색 결과가 없습니다..!"} />
            <ErrorMessage
              message={`검색할 제목을 입력 후 엔터를 눌러주세요..!(●'◡'●)`}
            />
          </>
        ) : (
          <>
            {searchData && (
              <SearchResults isLoading={isLoading} searchData={searchData} />
            )}
          </>
        )}
      </Container>
    </>
  );
};
