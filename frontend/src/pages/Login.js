import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dummyImg from '../asset/dummyImg.jpg';
import blank from '../asset/blank.png';

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="login-content">
        <div className="web-name">
          <Link to={'/'} className="web-name-link">
            <img src={blank} alt="" />
            <h4>Nama Website</h4>
          </Link>
        </div>
        <div className="form-container">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Submit</button>
          </form>
          <p>
            Belum Punya Akun?
            <Link className="loginLink" to={'/register'}>
              Daftar
            </Link>
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={dummyImg} alt="" />
      </div>
    </div>
  );
};
