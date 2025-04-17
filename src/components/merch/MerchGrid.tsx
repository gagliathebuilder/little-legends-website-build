
import MerchCard from "@/components/MerchCard";
import { MerchItem } from "@/data/merchandise";

interface MerchGridProps {
  items: MerchItem[];
}

const MerchGrid = ({ items }: MerchGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MerchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MerchGrid;
