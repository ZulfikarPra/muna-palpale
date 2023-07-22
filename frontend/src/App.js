// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Header } from './components/Header';
import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
