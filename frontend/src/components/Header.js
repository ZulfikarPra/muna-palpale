import { Link } from 'react-router-dom';
import logo512 from '../asset/logo512.png';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="webProfile">
          <img src={logo512} alt="" className="webLogo" />
          <Link to={'/'}>
            <p className="webName">Lanobake & Moolo</p>
          </Link>
        </div>
        <div className="nav-link">
          <Link className="link">Desa Moolo</Link>
          <Link className="link">Desa Lanobake</Link>
        </div>
        <div className="nav-login-register">
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/register'}>
            <button>Register</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
