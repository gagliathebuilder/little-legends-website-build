
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Ingredients = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-ll-purple-bg text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="font-baloo font-bold text-4xl md:text-5xl mb-6">Safe Ingredients</h1>
          <p className="text-xl max-w-2xl mx-auto">
            What goes into our products is just as important as what stays out
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-6">
                Our Ingredient Philosophy
              </h2>
              <p className="text-gray-700 text-lg">
                At Little Legends, we believe that kids' hair products should be effective without 
                compromising on safety. We carefully select ingredients that give great styling 
                results while being gentle on sensitive scalps and safe if they get in little eyes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
                <h3 className="font-baloo font-bold text-xl text-ll-green mb-4">
                  What We Include
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-green mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plant-derived polymers for hold</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-green mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Natural conditioning agents like aloe vera</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-green mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gentle surfactants for easy washing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-green mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tear-free formulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-green mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kid-friendly fragrances</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100">
                <h3 className="font-baloo font-bold text-xl text-ll-red mb-4">
                  What We Exclude
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-red mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Harsh sulfates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-red mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Parabens</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-red mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Synthetic dyes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-red mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Phthalates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ll-red mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Formaldehyde</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-ll-purple-ultralight/20 rounded-2xl p-8 mb-16">
              <h3 className="font-baloo font-bold text-2xl text-ll-purple-dark mb-6 text-center">
                Frequently Asked Questions
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold">
                    Are your products tested on animals?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Absolutely not! Little Legends is proudly cruelty-free. We only test our products on willing human participants (mostly our own kids!).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold">
                    Are your products safe for sensitive scalps?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes! We formulate all our products with sensitive little scalps in mind. Our products are free from harsh chemicals and designed to be gentle.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold">
                    What if my child has allergies?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We recommend checking the full ingredient list on each product page if your child has known allergies. While we formulate for sensitive skin, individual allergies can vary. When in doubt, a patch test is always a good idea!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-bold">
                    How easily do your products wash out?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Very easily! We know bath time can be challenging enough, so all our styling products are formulated to rinse out easily with regular shampoo. No more fighting with stubborn product buildup!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-bold">
                    Are your fragrances natural?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    We use a blend of natural and safe synthetic fragrances that are specifically formulated to be gentle for children. All our scents are phthalate-free and developed to be kid-friendly and parent-approved.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="text-center">
              <h3 className="font-baloo font-bold text-2xl text-ll-purple-dark mb-4">
                Have More Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                We're happy to provide more detailed information about any of our products.
              </p>
              <div className="inline-block">
                <CTA 
                  title="Get in Touch"
                  description="Our team is ready to answer any questions about our ingredients"
                  buttonText="Contact Us"
                  buttonLink="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ingredients;
