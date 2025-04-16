
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [filterHold, setFilterHold] = useState<string | null>(null);
  const [filterFormat, setFilterFormat] = useState<string | null>(null);
  
  const filteredProducts = products.filter(product => {
    const holdMatch = filterHold ? product.holdLevel === filterHold : true;
    const formatMatch = filterFormat ? product.format === filterFormat : true;
    return holdMatch && formatMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-ll-purple-bg text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="font-baloo font-bold text-4xl md:text-5xl mb-6">Shop All Products</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find the perfect styling product for your little legend
          </p>
        </div>
      </section>
      
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-lg font-bold">Filter by:</span>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterHold === null ? "default" : "outline"}
                  onClick={() => setFilterHold(null)}
                  className={filterHold === null ? "bg-ll-purple text-white" : ""}
                >
                  All Hold
                </Button>
                <Button
                  variant={filterHold === 'Medium' ? "default" : "outline"}
                  onClick={() => setFilterHold('Medium')}
                  className={filterHold === 'Medium' ? "bg-ll-blue text-white" : ""}
                >
                  Medium Hold
                </Button>
                <Button
                  variant={filterHold === 'Strong' ? "default" : "outline"}
                  onClick={() => setFilterHold('Strong')}
                  className={filterHold === 'Strong' ? "bg-ll-red text-white" : ""}
                >
                  Strong Hold
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filterFormat === null ? "default" : "outline"}
                  onClick={() => setFilterFormat(null)}
                  className={filterFormat === null ? "bg-ll-purple text-white" : ""}
                >
                  All Types
                </Button>
                <Button
                  variant={filterFormat === 'Gel' ? "default" : "outline"}
                  onClick={() => setFilterFormat('Gel')}
                  className={filterFormat === 'Gel' ? "bg-ll-purple text-white" : ""}
                >
                  Gel
                </Button>
                <Button
                  variant={filterFormat === 'Cream' ? "default" : "outline"}
                  onClick={() => setFilterFormat('Cream')}
                  className={filterFormat === 'Cream' ? "bg-ll-purple text-white" : ""}
                >
                  Cream
                </Button>
                <Button
                  variant={filterFormat === 'Shampoo' ? "default" : "outline"}
                  onClick={() => setFilterFormat('Shampoo')}
                  className={filterFormat === 'Shampoo' ? "bg-ll-purple text-white" : ""}
                >
                  Shampoo
                </Button>
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No products match your filters</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Shop;
