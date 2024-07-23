import { ImSearch } from "react-icons/im";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";

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

  @media screen and (max-width: 768px) {
    input {
      height: 40px;
      &::placeholder {
        font-size: 16px;
      }
      font-size: 16px;
      padding: 0;
    }

    button {
      top: 15px;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const SearchForm = ({ onSearchResult, register, errors }) => {
  return (
    <Form onSubmit={onSearchResult}>
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
      <ErrorMessage message={errors?.keyword?.message} />
    </Form>
  );
};
