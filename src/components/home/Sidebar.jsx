import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth'; // Import your sign-out function

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    doSignOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <div className={`fixed top-0 left-0 w-34 h-full bg-gray-900 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300 z-30`}>
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h2 className="text-xl text-white">-Menu-</h2>
        <button className="text-white focus:outline-none" onClick={onClose}>
             ☰
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <Link to="/home" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Home</Link>
          </li>
          <li>
            <Link to="/mens" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Men's</Link>
          </li>
          <li>
            <Link to="/womens" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Women's</Link>
          </li>
          <li>
            <Link to="/kids" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Kid's</Link>
          </li>
        </ul>
      </nav>
      <button
  onClick={handleLogout}
  className="block w-full text-left py-2 px-4 text-gray-400 hover:text-white bg-transparent hover:bg-yellow-700 rounded-md"
>
  Sign out
</button>

    </div>
  );
};

export default Sidebar;
