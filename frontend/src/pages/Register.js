import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import regImg from '../asset/regImg.JPG';
import logo512 from '../asset/logo512.png';
import { register } from '../actions/userActions';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const regHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  }

  useEffect(() => {
    document.title = 'Muna Merona - Register';
    if(userInfo){
      navigate('/');
    }
  }, [navigate, userInfo])

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
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={regHandler}>Register</button>
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
