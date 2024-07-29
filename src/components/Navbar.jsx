import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Hacker News Top 100</Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="flex items-center hover:text-gray-300">
                {item.icon}
                <span className="ml-1">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
