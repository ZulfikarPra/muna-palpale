import { Link } from 'react-router-dom';
import logo512 from '../asset/logo512.png';

export const Header = () => {
  return (
    <header>
      <div className="webProfile" id="navigation-bar">
        <div className="webLogo">
          <img src={logo512} alt="" className="webLogo" />
          <Link to={'/'} className="nav-link-logo">
            Lanobake & Moolo
          </Link>
        </div>
        <nav>
          <ul>
            {/* <li>
              <Link to={'/login'} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={'/register'} className="nav-link">
                Register
              </Link>
            </li> */}
            <li>
              <Link to={'/'} className="nav-link">
                Beranda
              </Link>
            </li>
            <li>
              <Link to={'/potensi-alam'} className="nav-link">
                Potensi Alam
              </Link>
            </li>
            <li>
              <Link to={'/budaya'} className="nav-link">
                Budaya
              </Link>
            </li>
            <li>
              <Link to={'/artikel'} className="nav-link">
                Artikel
              </Link>
            </li>
            <li>
              <Link to={'/peta'} className="nav-link">
                Peta
              </Link>
            </li>
            <li>
              <Link to={'/galeri'} className="nav-link">
                Galeri
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
