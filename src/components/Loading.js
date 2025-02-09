import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <PacmanLoader color={colors.point} />
    </Container>
  );
};
