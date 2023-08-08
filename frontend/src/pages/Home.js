// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';

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
        <img src="" alt="" />
      </div>
      <div className="beranda-tentang-desa">
        <h2>Tentang Desa</h2>
        <div className="beranda-lanobake">
          <h3>Desa Lanobake</h3>
          <img src="" alt="" />
        </div>
        <div className="beranda-moolo">
          <h3>Desa Moolo</h3>
          <img src="" alt="" />
        </div>
      </div>
      <div className="beranda-daya-tarik">
        <h2>Daya Tarik</h2>
      </div>
      <div className="beranda-peta">
        <h2>Peta Wilayah</h2>
      </div>
      <div className="beranda-galeri">
        <h2>Galeri</h2>
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
