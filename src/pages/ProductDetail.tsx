
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, CheckCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-6 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-baloo font-bold text-ll-purple-dark mb-4">Product Not Found</h1>
            <p className="mb-8">We couldn't find the product you're looking for.</p>
            <Button asChild className="button-primary">
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  // Get recommended products (excluding current one)
  const recommendedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-500 hover:text-ll-purple-dark">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/shop" className="text-gray-500 hover:text-ll-purple-dark">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-ll-purple-dark">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="mx-auto w-full max-w-md object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h1 className="font-baloo font-bold text-3xl md:text-4xl text-ll-purple-dark mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-5 h-5" />
                  ))}
                </div>
                <span className="ml-2 text-gray-500">(12 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-ll-green mr-2" size={20} />
                    <span>{product.holdLevel} hold that lasts all day</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-ll-green mr-2" size={20} />
                    <span>Tear-free formula</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-ll-green mr-2" size={20} />
                    <span>Easy to wash out</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-ll-green mr-2" size={20} />
                    <span>Made with safe ingredients</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  className="button-primary flex-grow flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <CheckCircle size={20} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
              
              <div className="bg-ll-purple-ultralight/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">How to Use</h3>
                <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                  <li>Apply to damp or dry hair</li>
                  <li>Work product through with fingers or comb</li>
                  <li>Style as desired</li>
                  <li>Let dry for maximum hold</li>
                  <li>Easily washes out with regular shampoo</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recommended Products Section */}
      {recommendedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="font-baloo font-bold text-2xl md:text-3xl text-ll-purple-dark mb-8">
              Pairs Well With...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedProducts.map(recommendedProduct => (
                <ProductCard key={recommendedProduct.id} product={recommendedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
