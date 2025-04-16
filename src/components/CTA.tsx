
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTA = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink
}: CTAProps) => {
  return (
    <div className="bg-ll-purple text-white py-16 px-4 rounded-3xl mb-20">
      <div className="container mx-auto text-center">
        <h2 className="font-baloo text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button asChild className="button-secondary">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-ll-purple">
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
