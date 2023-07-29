import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logImg from '../asset/logImg.JPG';
import logo512 from '../asset/logo512.png';
import { auth } from '../actions/userActions';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(auth(email, password));
  };

  useEffect(() => {
    document.title = 'Muna Merona - Login';
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

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
            <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={authHandler}>Login</button>
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
