
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-ll-purple-bg text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="font-baloo font-bold text-4xl md:text-5xl mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Built by dads, tested by kids, trusted by parents
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
                alt="Little Legends Logo" 
                className="mb-6 h-32"
              />
              <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-6">
                Why We Started Little Legends
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Little Legends was born out of necessity. As fathers of young boys, we were 
                  frustrated by the lack of hair styling products that actually worked for our kids.
                </p>
                
                <p>
                  Every morning was the same struggle: trying to tame wild bedhead while our sons 
                  squirmed and complained about sticky gels that pulled their hair or stung their 
                  eyes. Adult products were too harsh, and kids' products didn't work.
                </p>
                
                <p>
                  We knew there had to be a better way. So we set out to create hair products 
                  that kids would actually enjoy using, with packaging they'd be excited about, 
                  and formulas that would genuinely keep their hair in place through a day of adventure.
                </p>
                
                <p>
                  After countless prototypes, testing sessions (with very honest kid feedback!), 
                  and formula refinements, Little Legends Hold Co. was born.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                {/* Placeholder for a video or image - would be replaced with actual content */}
                <div className="w-full h-full flex items-center justify-center bg-ll-purple-bg">
                  <span className="text-white text-lg font-bold">About Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-ll-yellow/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-ll-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">
                Safety First
              </h3>
              <p className="text-gray-700">
                We use only kid-safe, tear-free ingredients that work well without 
                harmful chemicals. Every product is thoroughly tested and parent-approved.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-ll-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-ll-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">
                Fun & Function
              </h3>
              <p className="text-gray-700">
                We believe hair products should be as fun to use as they are effective. 
                Our packaging excites kids while our formulas satisfy parents with real results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-ll-blue/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-ll-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-baloo font-bold text-xl text-ll-purple-dark mb-3">
                Imagination Matters
              </h3>
              <p className="text-gray-700">
                We design our products to spark creativity and imagination. 
                Our dino skull logo represents the messy, creative, adventurous spirit 
                that makes childhood so magical.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logo Meaning */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-6">
                Our Mark of Messy, Creative Greatness
              </h2>
              <p className="text-gray-700 mb-6">
                Our dino skull logo is more than just a cool design – it represents the 
                spirit of adventure, imagination, and fun that's at the heart of childhood.
              </p>
              <p className="text-gray-700 mb-6">
                Kids are natural explorers, digging up new discoveries and embarking on wild 
                adventures every day. The dinosaur – timeless symbol of wonder and excitement – 
                perfectly captures this spirit of discovery.
              </p>
              <p className="text-gray-700">
                Just like how paleontologists carefully preserve their findings, we've 
                crafted products that help preserve your little legend's style throughout 
                their daily adventures – no matter how messy they get.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center order-1 md:order-2">
              <img 
                src="/lovable-uploads/31c02903-214b-427a-b5e4-8de90ca8c0fb.png" 
                alt="Little Legends Logo" 
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <CTA 
            title="Ready to join the adventure?"
            description="Check out our products and turn hair struggles into styling fun"
            buttonText="Shop Now"
            buttonLink="/shop"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
