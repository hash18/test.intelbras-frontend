import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Informe os dados:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
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
    </div>
  );
};

export default CubagemComponent;
