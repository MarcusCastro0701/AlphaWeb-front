import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import { AutoComplete } from 'primereact/autocomplete';
import Timeline from "./Timeline";


export default function Home() {

  return (
    <Container >
      <Header />
      <Timeline/>
    </Container>
  );
}

const Container = styled.div`
width:100%;
`;
