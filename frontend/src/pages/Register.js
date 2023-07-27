import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import regImg from '../asset/regImg.JPG';
import logo512 from '../asset/logo512.png';

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="register">
      <div className="register-content">
        <div className="web-name">
          <Link to={'/'} className="web-name-link">
            <img src={logo512} alt="" />
            <h4>Lanobake & Moolo</h4>
          </Link>
        </div>
        <div className="form-container">
          <h1>Get Started🚀</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
          <p>
            Sudah Punya Akun?
            <Link to={'/login'} className="registerLink">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={regImg} alt="" />
      </div>
    </div>
  );
};
