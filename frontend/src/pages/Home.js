import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Header } from '../components/Header';
// import MapLF from '../components/MapLF';

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="beranda">
      <h1>Beranda</h1>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/register'}>
        <button>Register</button>
      </Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {/* <Header></Header>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/register'}>
        <button>Register</button>
      </Link>
      <Link to={'/artikel'}>
        <button>Artikel</button>
      </Link>
      <Link to={'/budaya'}>
        <button>Budaya</button>
      </Link>
      <Link to={'/galeri'}>
        <button>Galeri</button>
      </Link>
      <Link to={'/peta'}>
        <button>Peta</button>
      </Link>
      <Link to={'/potensi-alam'}>
        <button>Potensi Alam</button>
      </Link>
      <button onClick={() => dispatch(logout())}>Logout</button> */}
      {/* <MapLF /> */}
    </div>
  );
};
