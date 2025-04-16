
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CTA from '@/components/CTA';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  
  // Related products (excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product?.id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-3xl font-baloo font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild>
            <Link to="/shop">Return to Shop</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/shop" className="flex items-center text-ll-purple hover:text-ll-purple-dark">
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-xl p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-96 object-contain"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-baloo font-bold text-ll-purple-dark mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(25 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Format</span>
                  <p className="font-medium">{product.format}</p>
                </div>
                
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-500">Hold Level</span>
                  <p className={`font-medium ${product.holdLevel === 'Strong' ? 'text-ll-red' : 'text-ll-blue'}`}>
                    {product.holdLevel}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button size="lg" className="w-full">Add to Cart</Button>
                  <Button size="lg" variant="outline" className="flex-shrink-0">
                    Buy Now
                  </Button>
                </div>
                
                <p className="text-gray-500 text-sm text-center">
                  Free shipping on orders over $25
                </p>
              </div>
            </div>
          </div>
          
          {/* Product Features */}
          <div className="mt-16">
            <h2 className="text-2xl font-baloo font-bold mb-6">Why Kids & Parents Love It</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-baloo font-bold text-xl mb-2">Kid-Friendly Formula</h3>
                <p>Tear-free and gentle on sensitive scalps, but strong enough for all-day hold.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-baloo font-bold text-xl mb-2">Easy to Wash Out</h3>
                <p>No more struggles at bath time - rinses clean with just water and shampoo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-baloo font-bold text-xl mb-2">Safe Ingredients</h3>
                <p>Made without parabens, sulfates, or harsh chemicals. Just the good stuff.</p>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-2xl font-baloo font-bold mb-6">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="container mx-auto px-4 mt-20">
          <CTA 
            title="Join the Little Legends Club"
            description="Sign up for our newsletter to get updates, styling tips, and exclusive offers."
            buttonText="Join Now"
            buttonLink="/contact"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
