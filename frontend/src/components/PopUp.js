import React from 'react';
// import './Popup.css';
// import logoMuna from '../asset/logo-muna.png';
import logoMuna from '../asset/logo-muna.png';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <div className="close-btn-container"> */}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          x
        </button>
        {/* </div> */}
        <div className="popup-content">
          <div className="judul-artikel">
            <h2>{props.title}</h2>
          </div>
          <div className="gambar-artikel">
            <div className="img-dummy"></div>
          </div>
          <div className="teks-artikel">
            <p>{props.text}</p>
          </div>
        </div>
        <div className="popup-footer">
          <div className="logo-muna-container">
            <img src={logoMuna} alt="" className="logo-muna" />
          </div>
          <div className="footer-content">
            <p>Muna Merona</p>
            <p>KKN-PPM UGM Periode 2 Tahun 2023</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
