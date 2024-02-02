import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Component from './pages/Component';
import SegmentType from './pages/SegmentType';
import ComponentGroup from './pages/ComponentGroup';
import User from './pages/User';
import CubagemComponent from './pages/CubagemComponent';

// Estilizando a lista de links
const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ccc;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 10px;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s ease;

    &:hover {
      border-bottom-color: #007bff;
    }

    &.active {
      border-bottom-color: #007bff;
    }
  }
`;

function App() {
  return (
    <Router>
      <StyledNav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/component">Componente</Link></li>
          <li><Link to="/segment-type">Tipo de Segmentos</Link></li>
          <li><Link to="/component-group">Grupo de Componente</Link></li>
          <li><Link to="/user">Usuário</Link></li>
          <li><Link to="/cubagem">Calcula Cubagem</Link></li>
        </ul>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/component" element={<Component />}/>
        <Route path="/segment-type" element={<SegmentType />}/>
        <Route path="/component-group" element={<ComponentGroup />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/cubagem" element={<CubagemComponent />}/>
      </Routes>
    </Router>
  );
}

export default App;
