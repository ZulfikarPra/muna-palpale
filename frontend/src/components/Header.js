import { Link } from 'react-router-dom';
import logo512 from '../asset/logo512.png';
import { useState } from 'react';

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen)
  };

  return (
    <header>
      <div className="webProfile" id="navigation-bar">
        <div className="webLogo">
          <img src={logo512} alt="" className="webLogo logo" />
          <Link to={'/'} className="nav-link-logo">
            Lanobake & Moolo
          </Link>
        </div>
        <nav className= {hamburgerOpen? "" : "hideNav"}>
          <ul>
            <li>
              <Link to={'/'} className="nav-link">
                Beranda
              </Link>
            </li>
            <div className="dropdown">
              <li className="dropbtn">Tentang Desa</li>
              <div className="dropdown-content-container">
                <div className="dropdown-content">
                  <Link to={'/tentang-desa-lanobake'} className="nav-link-drop lanobake">
                    Desa Lanobake
                  </Link>
                  <Link to={'/tentang-desa-moolo'} className="nav-link-drop moolo">
                    Desa Moolo
                  </Link>
                </div>
              </div>
            </div>
            <li>
              <Link to={'/daya-tarik'} className="nav-link">
                Daya Tarik
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
              <Link to={'/login'} className="nav-link-login">
                Login
              </Link>
        </nav>
        <button className="hamburgerMenu" onClick={toggleHamburger}>
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
        </button>
      </div>
    </header>
  );
};
