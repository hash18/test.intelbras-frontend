import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../components/SegmentTypeForm"
import Grid from "../components/SegmentTypeGrid";
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

function SegmentType() {
  const [segmenttypes, setSegmentTypes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getSegmentTypes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/segment-type");
      setSegmentTypes(res.data.sort((a, b) => (a.segment_name > b.segment_name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getSegmentTypes();
  }, [setSegmentTypes]);

  return (
    <>
      <Container>
        <Title>Tipos de Componentes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getSegmentTypes={getSegmentTypes} />
        <Grid setOnEdit={setOnEdit} segmenttypes={segmenttypes} setSegmentTypes={setSegmentTypes} />
      </Container>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default SegmentType;
