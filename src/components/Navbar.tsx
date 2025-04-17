
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/shop" className="font-fredoka text-lg font-medium text-ll-purple hover:text-ll-purple-dark px-3 py-2 rounded-md">
              Shop
            </Link>
            <Link to="/about" className="font-fredoka text-lg font-medium text-ll-purple hover:text-ll-purple-dark px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/ingredients" className="font-fredoka text-lg font-medium text-ll-purple hover:text-ll-purple-dark px-3 py-2 rounded-md">
              Ingredients
            </Link>
            <Link to="/contact" className="font-fredoka text-lg font-medium text-ll-purple hover:text-ll-purple-dark px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-ll-purple">
              <ShoppingCart size={24} />
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-ll-purple hover:text-ll-purple-dark hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link to="/shop" className="block font-fredoka text-lg font-medium text-ll-purple hover:bg-ll-purple hover:text-white px-3 py-2 rounded-md" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/about" className="block font-fredoka text-lg font-medium text-ll-purple hover:bg-ll-purple hover:text-white px-3 py-2 rounded-md" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/ingredients" className="block font-fredoka text-lg font-medium text-ll-purple hover:bg-ll-purple hover:text-white px-3 py-2 rounded-md" onClick={toggleMenu}>
              Ingredients
            </Link>
            <Link to="/contact" className="block font-fredoka text-lg font-medium text-ll-purple hover:bg-ll-purple hover:text-white px-3 py-2 rounded-md" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
