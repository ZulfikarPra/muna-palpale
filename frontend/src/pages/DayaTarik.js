import { CardLeft } from '../components/CardLeft';
import { CardRight } from '../components/CardRight';
import { BahasaMuna } from '../components/BahasaMuna';

import { useState } from 'react';

export const DayaTarik = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="daya-tarik">
      <div className="daya-tarik-jumbotron">
        <h1>Daya Tarik</h1>
      </div>
      <div className="daya-tarik-button">
        <div className="show-btn-container">
          <button className="show-btn" onClick={() => setShow(!show)}>
            Alam Desa
          </button>
        </div>
        {show === true ? (
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
        ) : (
          ''
        )}
      </div>
      <div className="daya-tarik-content">
        <CardLeft></CardLeft>
        {/* <CardRight></CardRight> */}
      </div>
      {/* <BahasaMuna></BahasaMuna> */}
    </div>
  );
};
