
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CTA from '@/components/CTA';
import { products } from '@/data/products';

const Index = () => {
  const [activeHero, setActiveHero] = useState(0);
  const heroProducts = [
    {
      id: "hero1",
      title: "Hero Hold",
      description: "Strong hold, big imagination.",
      image: "/lovable-uploads/b69b8648-6f32-4d4a-8503-769acc801de8.png",
      color: "from-ll-blue to-ll-blue-dark",
    },
    {
      id: "hero2",
      title: "Shark Bait",
      description: "Gentle, tear-free formula.",
      image: "/lovable-uploads/f49f29ab-615e-4ac5-a97a-c6204f90fb46.png",
      color: "from-ll-blue to-ll-blue-light",
    },
    {
      id: "hero3", 
      title: "Dino Glue",
      description: "Kid-friendly, parent approved.",
      image: "/lovable-uploads/6ebdf7e8-558d-4a60-b9d5-de753e0e2420.png", 
      color: "from-ll-green to-ll-green-light",
    }
  ];

  // Auto rotate hero banners
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {heroProducts.map((hero, index) => (
          <div 
            key={hero.id}
            className={`transition-opacity duration-1000 absolute inset-0 flex items-center ${
              index === activeHero ? 'opacity-100 z-10' : 'opacity-0 -z-10'
            }`}
          >
            <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-baloo font-bold text-white leading-tight mb-6">
                  <span className="text-ll-yellow">{hero.title}</span> <br />
                  Made for kids with <br /> big imaginations
                </h1>
                <p className="text-xl md:text-2xl font-fredoka text-white/80 mb-8">
                  {hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild className="button-secondary">
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ll-purple-dark">
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      Amazon Available
                    </a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <img 
                    src={hero.image} 
                    alt={hero.title} 
                    className="w-full h-full object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Hero navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {heroProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHero(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeHero ? 'bg-ll-yellow' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Callout section */}
      <section className="bg-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-4">
            Made for boys. Approved by parents.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our tear-free, easy washout formulas are designed to be tough on style but gentle on kids.
          </p>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-2 text-center">
            Our Legendary Products
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Strong hold hair products for kids who dream big and play hard
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="button-primary">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
                alt="Little Legends Logo" 
                className="mx-auto md:mx-0 h-32"
              />
              <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-6 text-center md:text-left mt-6">
                Built by dads, tested by kids.
              </h2>
              <p className="text-gray-600 mb-6">
                At Little Legends, we know what it's like trying to wrangle a dinosaur-loving 
                kid out the door with hair that looks somewhat presentable. Our mission is simple: 
                create hair products that kids love using and that actually work.
              </p>
              <p className="text-gray-600 mb-6">
                All our products are made with safe ingredients, fun packaging, and serious performance 
                in mind. Because messy hair should be a choice, not a requirement.
              </p>
              <div className="text-center md:text-left">
                <Button asChild className="button-primary">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/b69b8648-6f32-4d4a-8503-769acc801de8.png" 
                    alt="Hero Hold product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/f49f29ab-615e-4ac5-a97a-c6204f90fb46.png" 
                    alt="Shark Bait product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/6ebdf7e8-558d-4a60-b9d5-de753e0e2420.png" 
                    alt="Dino Glue product" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/c7a9288c-3690-4c4a-baca-dfb5c475b7c5.png" 
                    alt="Galaxy Gel product" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-12 text-center">
            Why Choose Little Legends?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ll-yellow/20 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-ll-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">Safe Ingredients</h3>
              <p className="text-gray-600">Tear-free formulas that are kind to sensitive scalps and eyes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-ll-red/20 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-ll-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">Strong Hold</h3>
              <p className="text-gray-600">Styles that last through all of your little legend's adventures</p>
            </div>
            
            <div className="text-center">
              <div className="bg-ll-blue/20 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-ll-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">Easy Washout</h3>
              <p className="text-gray-600">No struggling at bath time with our easy-to-remove formulas</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <CTA 
            title="Join the Little Legends Club!"
            description="Sign up for updates, styling tips, and exclusive offers"
            buttonText="Shop Products"
            buttonLink="/shop"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/about"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
