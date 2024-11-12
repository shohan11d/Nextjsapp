import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function AppLayout() {
  return (
    <div className="border">
      <header className="bg-blue-600 p-5 text-white">Menu</header>
      <main className="bg-green-600 p-10">
        <Outlet />
      </main>
      <Link to="/menu">Hello world</Link>

      <footer className="bg-yellow-600 p-5 text-white">footer</footer>
    </div>
  );
}

export default AppLayout;
