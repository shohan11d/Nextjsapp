import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from './Menu';
function AppLayout() {
  return (
    <div className="border">
      <header className="bg-blue-600 p-5 text-white">
        <div className="flex justify-between">
          <Link to="/">
            <p>Logo</p>
          </Link>
          <input
            class="rounded-md border px-3 py-1 text-neutral-500"
            type="text"
            placeholder="Search Order"
          />
          <p>Fast-react-pizza</p>
        </div>
      </header>
      <Menu />
      <main className="bg-green-600 p-5">
        <Outlet />
      </main>

      <footer className="bg-yellow-600 p-5 text-white">footer</footer>
    </div>
  );
}

export default AppLayout;
