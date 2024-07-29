import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-accent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/app" className="text-xl font-bold text-primary flex items-center">
          <Terminal className="mr-2" />
          <span className="font-mono">HN_Top_100</span>
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="flex items-center hover:text-accent transition-colors duration-200">
                {item.icon}
                <span className="ml-1 font-mono">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
