import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from './Menu';
function AppLayout() {
  return (
    <div className="border">
      <header className="bg-blue-600 p-5 text-white">
        <div className="flex justify-between">
          <p>Logo</p>
          <Link to="/">
            <p>Fast-react-Pizza</p>
          </Link>
        </div>
      </header>
      <Menu />
      <main className="bg-green-600 p-10">
        <Outlet />
      </main>

      <footer className="bg-yellow-600 p-5 text-white">footer</footer>
    </div>
  );
}

export default AppLayout;
