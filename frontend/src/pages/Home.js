import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/register'}>
        <button>Register</button>
      </Link>
    </div>
  );
};
