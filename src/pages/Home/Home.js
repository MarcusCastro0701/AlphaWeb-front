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
overflow-y: scroll;

    
&::-webkit-scrollbar {
    width: 10px;
    height: 1vh;
    background-color: #0023242F;
    border-radius: 50px;
}

&::-webkit-scrollbar-thumb {
    background-color: #00575A;
    border-radius: 50px;
}

&::-webkit-scrollbar-thumb:hover {
    background-color: #01989D;
    height: 5vh;
    cursor: pointer;
}
`;
