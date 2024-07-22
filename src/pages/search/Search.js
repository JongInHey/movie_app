import { useForm } from "react-hook-form";
import { TopTitle } from "../../components/TopTitle";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { spacing } from "../../GlobalStyle";
import { searchMovie } from "../../api";
import { useEffect, useState } from "react";

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

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searchData, setSearchData] = useState();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const { results: searchResult } = await searchMovie(keyword);

      setSearchData(searchResult);
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
      </Container>
    </>
  );
};
