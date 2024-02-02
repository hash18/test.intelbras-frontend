import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/ComponentGroupForm"
import Grid from "../components/ComponentGroupGrid";
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

function ComponentGroup() {
  const [componentgroups, setComponentGroups] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getComponentGroups = async () => {
    try {
      const res = await axios.get("http://localhost:3000/component-group");
      setComponentGroups(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getComponentGroups();
  }, [setComponentGroups]);

  return (
    <>
      <Container>
        <Title>Grupos de Componentes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getComponentGroups={getComponentGroups} />
        <Grid setOnEdit={setOnEdit} componentgroups={componentgroups} setComponentGroups={setComponentGroups} />
      </Container>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default ComponentGroup;
