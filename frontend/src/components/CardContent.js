import blank from '../asset/blank.png';

export const CardContent = () => {
  return (
    <>
      <div className="card-img">
        <img src={blank} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">Title</div>
        <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores a, temporibus dolorum labore consequatur assumenda architecto, vitae delectus odit quos iure quaerat, praesentium quibusdam?</div>
        <div className="card-btn-container">
          <button className="card-btn">Selanjutnya</button>
        </div>
      </div>
    </>
  );
};
