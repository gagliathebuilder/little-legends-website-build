
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { merchandise } from '@/data/merchandise';
import MerchHeader from '@/components/merch/MerchHeader';
import MerchCategories from '@/components/merch/MerchCategories';
import MerchGrid from '@/components/merch/MerchGrid';

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
        <MerchHeader />
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <MerchCategories 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <MerchGrid items={filteredMerch} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Merch;
