
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  holdLevel: 'Medium' | 'Strong';
  format: 'Gel' | 'Cream' | 'Shampoo';
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="product-card group h-full flex flex-col">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-baloo font-bold text-xl text-ll-purple-dark">{product.name}</h3>
          <p className="text-gray-600 mt-2 mb-4 flex-grow">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            <div className="flex space-x-2">
              <span className={`px-3 py-1 text-xs rounded-full ${product.holdLevel === 'Strong' ? 'bg-ll-red text-white' : 'bg-ll-blue text-white'}`}>
                {product.holdLevel}
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                {product.format}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
