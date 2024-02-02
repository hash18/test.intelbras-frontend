import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Component from './pages/Component';
import SegmentType from './pages/SegmentType';
import ComponentGroup from './pages/ComponentGroup';
import User from './pages/User';
import CubagemComponent from './pages/CubagemComponent';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/component">Componente</Link></li>
        <li><Link to="/segment-type">Tipo de Segmentos</Link></li>
        <li><Link to="/component-group">Grupo de Componente</Link></li>
        <li><Link to="/user">Usuário</Link></li>
        <li><Link to="/cubagem">Calcula Cubagem</Link></li>
      </ul>
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
