import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logImg from '../asset/logImg.JPG';
import logo512 from '../asset/logo512.png';

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="login-content">
        <div className="web-name">
          <Link to={'/'} className="web-name-link">
            <img src={logo512} alt="" />
            <h4>Lanobake & Moolo</h4>
          </Link>
        </div>
        <div className="form-container">
          <h1>Welcome Back👋</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
          <p>
            Belum Punya Akun?
            <Link className="loginLink" to={'/register'}>
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={logImg} alt="" />
      </div>
    </div>
  );
};
