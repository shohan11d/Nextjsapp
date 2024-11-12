import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="flex list-none gap-5 p-4">
      <Link
        className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400"
        to="/home"
      >
        Home
      </Link>
      <Link
        className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400"
        to="/order"
      >
        Order
      </Link>
      <Link
        className="rounded-full bg-green-600 px-4 py-1 hover:bg-yellow-400 "
        to="/pizzamenu"
      >
        PizzaMenu
      </Link>
      <Link
        className="rounded-full bg-green-600 px-4  py-1 hover:bg-yellow-400"
        to="/cart"
      >
        Cart
      </Link>
    </div>
  );
}

export default Menu;
