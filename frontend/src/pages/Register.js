import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dummyImg from '../asset/dummyImg.jpg';
import blank from '../asset/blank.png';

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
            <img src={blank} alt="" />
            <h4>Nama Website</h4>
          </Link>
        </div>
        <div className="form-container">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Submit</button>
          </form>
          <p>
            Sudah Punya Akun?
            <Link to={'/login'} className="registerLink">
              Masuk
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
