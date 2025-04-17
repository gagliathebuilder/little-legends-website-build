
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MerchCard from '@/components/MerchCard';
import { Button } from '@/components/ui/button';
import { merchandise } from '@/data/merchandise';

type Category = 'all' | 'shirts' | 'hoodies' | 'hats' | 'shorts' | 'socks' | 'stickers';

const Merch = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredMerch = activeCategory === 'all' 
    ? merchandise 
    : merchandise.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-ll-purple-bg text-white py-24">
          <div className="container mx-auto text-center px-6">
            <h1 className="font-baloo font-bold text-4xl md:text-5xl mb-6">
              Legend Level Merch
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Rock your inner dinosaur with our exclusive collection of apparel and accessories
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {['all', 'shirts', 'hoodies', 'hats', 'shorts', 'socks', 'stickers'].map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category as Category)}
                  className={activeCategory === category ? "bg-ll-purple text-white" : ""}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMerch.map((item) => (
                <MerchCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Merch;
