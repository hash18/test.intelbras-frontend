import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/ComponentForm"
import Grid from "../components/ComponentGrid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Component() {
  const [components, setComponents] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getComponents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/component");
      setComponents(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getComponents();
  }, [setComponents]);

  return (
    <>
      <Container>
        <Title>Componentes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getComponents={getComponents} />
        <Grid setOnEdit={setOnEdit} components={components} setComponents={setComponents} />
      </Container>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default Component;
