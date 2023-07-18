import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
export default function Home() {
  return (
    <Container>
      <Header/>
      <p>TESTE ALVIN</p>
    </Container>
  );
}

const Container = styled.div`
background-color: lightblue;
height:100%;
`;
