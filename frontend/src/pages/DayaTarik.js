import { CardLeft } from '../components/CardLeft';
import { CardRight } from '../components/CardRight';
import { BahasaMuna } from '../components/BahasaMuna';

import { useState } from 'react';

export const DayaTarik = () => {
  const [show, setShow] = useState(true);
  const [menuText, setMenuText] = useState('Alam Desa');
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="daya-tarik">
      <div className="daya-tarik-jumbotron">
        <h1>Daya Tarik</h1>
      </div>
      <div className="daya-tarik-menu">
        <div className="dropdown-mobile">
          <div className="show-btn-container">
            <button
              className="show-btn"
              style={{
                backgroundColor: isActive ? 'orange' : 'white',
                color: isActive ? 'white' : 'orange',
              }}
              onClick={() => {
                setShow(!show);
                setIsActive(!isActive);
              }}
            >
              {menuText}
            </button>
          </div>
          {show === true ? (
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    setMenuText(e.target.innerText);
                    setShow(!show);
                    setIsActive(!isActive);
                  }}
                >
                  Alam Desa
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setMenuText(e.target.innerText);
                    setShow(!show);
                    setIsActive(!isActive);
                  }}
                >
                  Sosial Budaya
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setMenuText(e.target.innerText);
                    setShow(!show);
                    setIsActive(!isActive);
                  }}
                >
                  Makanan Khas
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    setMenuText(e.target.innerText);
                    setShow(!show);
                    setIsActive(!isActive);
                  }}
                >
                  Bahasa Muna
                </button>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
        <div className="menu-desktop">
          <ul>
            <li>
              <button>Alam Desa</button>
            </li>
            <li>
              <button>Sosial Budaya</button>
            </li>
            <li>
              <button>Makanan Khas</button>
            </li>
            <li>
              <button>Bahasa Muna</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="daya-tarik-content">
        <CardLeft></CardLeft>
        {/* <CardRight></CardRight> */}
      </div>
      {/* <BahasaMuna></BahasaMuna> */}
    </div>
  );
};
