import React from "react";
import axios from "axios";
import styled from "styled-components"; // Certifique-se de que styled-components esteja importado
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ components, setComponents, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .patch(`http://localhost:3000/component/soft-delete/${id}`)
      .then(({ data }) => {
        const newArray = components.filter((component) => component.id !== id);

        setComponents(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>component_group_id</Th>
          <Th>segment_type_id</Th>
          <Th>Nome</Th>
          <Th>Gtin</Th>
          <Th>Código</Th>
          <Th>Altura</Th>
          <Th>Largura</Th>
          <Th>Profundidade</Th>
          <Th>Peso Bruto</Th>
          <Th>Peso Liquido</Th>
          <Th>Peso Embalagem</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {components.map((item, i) => (
          <Tr key={i}>
            <Td width="5%">{item.component_group_id}</Td>
            <Td width="5%">{item.segment_type_id}</Td>
            <Td width="10%">{item.name}</Td>
            <Td width="10%">{item.gtin}</Td>
            <Td width="10%">{item.component_code}</Td>
            <Td width="5%">{item.height}</Td>
            <Td width="5%">{item.width}</Td>
            <Td width="10%">{item.depth}</Td>
            <Td width="10%">{item.gross_weight}</Td>
            <Td width="10%">{item.net_weight}</Td>
            <Td width="10%">{item.tare}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
