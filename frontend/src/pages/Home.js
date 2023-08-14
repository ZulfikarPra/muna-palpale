import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import imageBeranda1 from '../asset/beranda-image-1.png';
import imageBeranda2 from '../asset/beranda-image-2.png';
import arrow from '../asset/arrow.png';
// import imageBeranda2 from '../asset/beranda-image2.png'
export const Home = () => {
  // const dispatch = useDispatch();
  return (
    <div className="beranda">
      <div className="beranda-jumbotron">
        <div className="beranda-jumbotron-title">
          <h1 className="kembara">Kembara</h1>
          <h1 className="batukara">Batukara</h1>
          <button>Let's Explore</button>
        </div>
      </div>
      <div className="beranda-intro">
        <p>
          Yuk jelajahi dan temukan pesona tersembunyi di Desa Lanobake dan Desa Moolo, Kec. Batukara, Kab. Muna, Sulawesi Tenggara oleh <strong>Tim KKN PPM UGM Muna 2023</strong>
        </p>
        <div className="image">
          <div className="img-1">
            <img src={imageBeranda1} alt="" />
          </div>
          <div className="img-2">
            <img src={imageBeranda2} alt="" />
          </div>
        </div>
      </div>
      <h2 className='tentangDesa'>Tentang Desa</h2>
      <div className="beranda-video-profile">
        <div className="lanobake">
          <h4>Desa Lanobake</h4>
          <div className="video">
            <img src="" alt="" />
          </div>
        </div>
        <div className="moolo">
          <h4>Desa Moolo</h4>
          <div className="video">
            <img src="" alt="" />
          </div>
        </div>
        <Link className="readMore">
          <p>Read More</p>
          <div className="img">
            <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
      <h2 className='dayaTarik-h2'>Daya Tarik</h2>
      <div className="dayaTarik">
        
      </div>
    </div>
  );
};

// {/* <Link to={'/login'}>
//   <button>Login</button>
// </Link>
// <Link to={'/register'}>
//   <button>Register</button>
// </Link>
// <button onClick={() => dispatch(logout())}>Logout</button> */}
