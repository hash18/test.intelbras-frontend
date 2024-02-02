import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Estilizando o componente de cubagem
const StyledCubagemComponent = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    label {
      margin-bottom: 10px;
    }

    input {
      margin-left: 5px;
    }

    button {
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;

const CubagemComponent = () => {
  const [id, setId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = [{ "id": parseInt(id), "quantidade": parseInt(quantidade) }];
      const response = await axios.post('http://localhost:3000/component/cubagem', data);
      setResponseData(response.data[0]); // Ajuste para pegar o primeiro elemento do array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <StyledCubagemComponent>
      <h2>Informe os dados:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do Componente:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Quantidade:
          <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <h2>Resposta da Cubagem:</h2>
      {responseData && (
        <div>
          <p>Cubagem: {responseData.cubagem}</p>
          <p>Peso Bruto: {responseData.pesoBruto}</p>
          <p>Peso Líquido: {responseData.pesoLiquido}</p>
        </div>
      )}
    </StyledCubagemComponent>
  );
};

export default CubagemComponent;
