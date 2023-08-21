import { CardLeft } from '../components/CardLeft';
import { CardRight } from '../components/CardRight';
import { BahasaMuna } from '../components/BahasaMuna';

import { useState } from 'react';

export const DayaTarik = () => {
  const [show, setShow] = useState(false);
  const [menuText, setMenuText] = useState('Alam Desa');
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [pageActive, setPageActive] = useState('AlamDesa');

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
                backgroundColor: isDropdownActive ? 'white' : 'orange',
                color: isDropdownActive ? 'orange' : 'white',
              }}
              onClick={() => {
                setShow(!show);
                setIsDropdownActive(!isDropdownActive);
              }}
            >
              {menuText}
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
          {show === true ? (
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    setMenuText(e.target.innerText);
                    setShow(!show);
                    setIsDropdownActive(!isDropdownActive);
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
                    setIsDropdownActive(!isDropdownActive);
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
                    setIsDropdownActive(!isDropdownActive);
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
                    setIsDropdownActive(!isDropdownActive);
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
