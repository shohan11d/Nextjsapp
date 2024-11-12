import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="p-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pizzamenu">pizzamenu</Link>
      </li>
      <li>
        <Link to="/order">order</Link>
      </li>
      <li>
        <Link to="/cart">cart</Link>
      </li>
    </div>
  );
}

export default Menu;
