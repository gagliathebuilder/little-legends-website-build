
import { MerchItem } from "@/data/merchandise";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface MerchCardProps {
  item: MerchItem;
}

const MerchCard = ({ item }: MerchCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-baloo text-xl font-bold text-ll-purple-dark">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-ll-purple">${item.price.toFixed(2)}</span>
          <Button size="sm" className="bg-ll-purple hover:bg-ll-purple-dark">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        {item.colors && (
          <div className="mt-4 flex gap-2">
            {item.colors.map((color) => (
              <div
                key={color.hex}
                className="w-6 h-6 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchCard;
