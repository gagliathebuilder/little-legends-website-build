
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ll-purple-bg text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
              alt="Little Legends Logo" 
              className="h-16 mb-4"
            />
            <p className="text-white/80 mb-6">
              Strong hold hair products for kids with big imaginations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ll-yellow transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-ll-yellow transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-ll-yellow transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-ll-yellow transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-baloo font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-white/80 hover:text-white transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="text-white/80 hover:text-white transition-colors">
                  Safe Ingredients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-baloo font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Join the Little Legends Club for updates & giveaways!
            </p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-l-full px-4 py-2 w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-ll-yellow text-ll-purple-dark font-bold rounded-r-full px-4 hover:bg-ll-yellow-dark transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} Little Legends Hold Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
