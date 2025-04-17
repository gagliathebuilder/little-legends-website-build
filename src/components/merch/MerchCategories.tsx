
import { Button } from "@/components/ui/button";

type Category = 'all' | 'shirts' | 'hoodies' | 'hats' | 'shorts' | 'socks' | 'stickers';

interface MerchCategoriesProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const MerchCategories = ({ activeCategory, onCategoryChange }: MerchCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {['all', 'shirts', 'hoodies', 'hats', 'shorts', 'socks', 'stickers'].map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category as Category)}
          className={activeCategory === category ? "bg-ll-purple text-white" : ""}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default MerchCategories;
