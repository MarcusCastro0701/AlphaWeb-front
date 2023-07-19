import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
export default function Home() {
  return (
    <Container>
      <Header/>
      <p>nada</p>
    </Container>
  );
}

const Container = styled.div`
background-color: lightblue;
height:100%;
`;
