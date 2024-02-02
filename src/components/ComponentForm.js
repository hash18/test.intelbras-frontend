import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getComponents, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const component = ref.current;

      component.component_group_id.value              = onEdit.component_group_id;
      component.segment_type_id.value              = onEdit.segment_type_id;
      component.name.value              = onEdit.name;
      component.gtin.value              = onEdit.gtin;
      component.component_code.value    = onEdit.component_code;
      component.height.value            = onEdit.height;
      component.width.value             = onEdit.width;
      component.depth.value             = onEdit.depth;
      component.gross_weight.value      = onEdit.gross_weight;
      component.net_weight.value        = onEdit.net_weight;
      component.tare.value              = onEdit.tare;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const component = ref.current;

    if (
      !component.component_group_id.value ||
      !component.segment_type_id.value ||
      !component.name.value ||
      !component.gtin.value ||
      !component.component_code.value ||
      !component.height.value ||
      !component.width.value ||
      !component.depth.value ||
      !component.gross_weight.value ||
      !component.net_weight.value ||
      !component.tare.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put(`http://localhost:3000/component/${onEdit.id}`, {
          component_group_id: component.component_group_id.value,
          segment_type_id: component.segment_type_id.value,
          name: component.name.value,
          gtin: component.gtin.value,
          component_code: component.component_code.value,
          height: component.height.value,
          width: component.width.value,
          depth: component.depth.value,
          gross_weight: component.gross_weight.value,
          net_weight: component.net_weight.value,
          tare: component.tare.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000/component", {
          component_group_id: component.component_group_id.value,
          segment_type_id: component.segment_type_id.value,
          name: component.name.value,
          gtin: component.gtin.value,
          component_code: component.component_code.value,
          height: component.height.value,
          width: component.width.value,
          depth: component.depth.value,
          gross_weight: component.gross_weight.value,
          net_weight: component.net_weight.value,
          tare: component.tare.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    component.component_group_id.value = ""
    component.segment_type_id.value = ""
    component.name.value = ""
    component.gtin.value = ""
    component.component_code.value = ""
    component.height.value = ""
    component.width.value = ""
    component.depth.value = ""
    component.gross_weight.value = ""
    component.net_weight.value = ""
    component.tare.value = ""

    setOnEdit(null);
    getComponents();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
       <InputArea>
        <Label>component_group_id</Label>
        <Input name="component_group_id" />
      </InputArea>
      <InputArea>
        <Label>segment_type_id</Label>
        <Input name="segment_type_id" />
      </InputArea>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>Gtin</Label>
        <Input name="gtin" />
      </InputArea>
      <InputArea>
        <Label>Código</Label>
        <Input name="component_code" />
      </InputArea>
      <InputArea>
        <Label>Altura</Label>
        <Input name="height" />
      </InputArea>
      <InputArea>
        <Label>Largura</Label>
        <Input name="width" />
      </InputArea>
      <InputArea>
        <Label>Profundidade</Label>
        <Input name="depth" />
      </InputArea>
      <InputArea>
        <Label>Peso Bruto</Label>
        <Input name="gross_weight" />
      </InputArea>
      <InputArea>
        <Label>Peso Líquido</Label>
        <Input name="net_weight" />
      </InputArea>
      <InputArea>
        <Label>Peso da embalagem</Label>
        <Input name="tare" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
