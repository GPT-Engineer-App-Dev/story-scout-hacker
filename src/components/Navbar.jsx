import { Link } from 'react-router-dom';
import { Home, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">HN Reader</Link>
        <div className="space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/top-stories" className="flex items-center">
              <Newspaper className="h-4 w-4 mr-2" />
              Top Stories
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
