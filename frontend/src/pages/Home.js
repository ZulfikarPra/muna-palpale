import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/register'}>
        <button>Register</button>
      </Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
