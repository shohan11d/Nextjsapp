import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="flex list-none gap-5 p-4">
      <li className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400 transition-all">
        <Link to="/">Home</Link>
      </li>
      <li className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400">
        <Link to="/pizzamenu">pizzamenu</Link>
      </li>
      <li className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400">
        <Link to="/order">order</Link>
      </li>
      <li className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400">
        <Link to="/cart">cart</Link>
      </li>
    </div>
  );
}

export default Menu;
