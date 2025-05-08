import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.auth.currentUser);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon - only on mobile */}
      <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">MyApp</h2>
        <button onClick={toggleSidebar} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          bg-transparent shadow-lg text-black p-4 w-64 min-h-screen
          fixed md:static top-0 left-0 z-50 transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <h2 className="text-xl font-bold mb-6 hidden md:block">MyApp</h2>
        <nav className="flex flex-col space-y-3 mt-4">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/cart" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Cart</Link>

          {!isAuthenticated && (
            <>
              <Link to="/login" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
          {isAuthenticated && (
            <Link to="/logout" className="hover:bg-gray-700 p-2 rounded" onClick={() => setIsOpen(false)}>Logout</Link>
          )}
        </nav>

        {isAuthenticated && (
          <p className="mt-6 text-sm text-gray-400">
            Logged in as: <span className="text-white">{user.username}</span>
          </p>
        )}
      </div>
    </>
  );
}
