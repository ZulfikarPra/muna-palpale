import blank from '../asset/blank.png';
import { useState } from 'react';
import Popup from './PopUp';

export const CardContent = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="card-img">
        <img src={blank} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">Title</div>
        <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores a, temporibus dolorum labore consequatur assumenda architecto, vitae delectus odit quos iure quaerat, praesentium quibusdam?</div>
        <div className="card-btn-container">
          <button className="card-btn" onClick={() => setButtonPopup(true)}>
            Selanjutnya
          </button>
        </div>
      </div>

      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        title="test"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quasi explicabo tempora exercitationem quibusdam possimus odit, vel illum atque earum maxime recusandae dolorum ratione excepturi quaerat, at eveniet molestiae? Accusamus earum ratione qui odit ut porro doloribus, corrupti, alias nobis culpa doloremque provident est cupiditate molestias rem voluptatibus natus dolorum saepe quidem harum quos mollitia quas. Non repellendus rem modi adipisci doloremque deserunt facere eos alias impedit, voluptas tempora mollitia nam minima fuga sed nesciunt repellat! Tempore necessitatibus nesciunt, eligendi qui recusandae minima ducimus rem perspiciatis debitis tenetur aut? Consectetur error quisquam minima odio optio doloremque harum sed tempora quae."
      ></Popup>
    </>
  );
};
