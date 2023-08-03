// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Header } from './components/Header';
import 'leaflet/dist/leaflet.css';
import { Artikel } from './pages/Artikel';
import { Galeri } from './pages/Galeri';
import { Peta } from './pages/Peta';
import { TentangDesaMoolo } from './pages/TentangDesaMoolo';
import { TentangDesaLanobake } from './pages/TentangDesaLanobake';
import { DayaTarik } from './pages/DayaTarik';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/artikel" element={<Artikel></Artikel>}></Route>
          <Route path="/galeri" element={<Galeri></Galeri>}></Route>
          <Route path="/peta" element={<Peta></Peta>}></Route>
          <Route path="/daya-tarik" element={<DayaTarik></DayaTarik>}></Route>
          <Route path="/tentang-desa-moolo" element={<TentangDesaMoolo></TentangDesaMoolo>}></Route>
          <Route path="/tentang-desa-lanobake" element={<TentangDesaLanobake></TentangDesaLanobake>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
