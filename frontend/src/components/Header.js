import { Link } from 'react-router-dom';
import blank from '../asset/blank.png';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="webProfile">
          <img src={blank} alt="" className="webLogo" />
          <Link to={'/'}>
            <p className="webName">Nama Website</p>
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
