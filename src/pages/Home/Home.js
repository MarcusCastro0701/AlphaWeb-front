import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import { AutoComplete } from 'primereact/autocomplete';

export default function Home() {

  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
background-color: lightblue;
height:100%;
`;
