// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Header } from './components/Header';
import 'leaflet/dist/leaflet.css';
import { Artikel } from './pages/Artikel';
import { Budaya } from './pages/Budaya';
import { Galeri } from './pages/Galeri';
import { Peta } from './pages/Peta';
import { PotensiAlam } from './pages/PotensiAlam';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/artikel" element={<Artikel></Artikel>}></Route>
          <Route path="/budaya" element={<Budaya></Budaya>}></Route>
          <Route path="/galeri" element={<Galeri></Galeri>}></Route>
          <Route path="/peta" element={<Peta></Peta>}></Route>
          <Route path="/potensi-alam" element={<PotensiAlam></PotensiAlam>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
