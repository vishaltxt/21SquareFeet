import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home page/home';
import Suppliers from './components/homepage/explore/suppliers';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
