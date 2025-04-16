
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-ll-purple-bg text-white py-24">
        <div className="container mx-auto text-center px-6">
          <h1 className="font-baloo font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Questions, feedback, or just want to say hi? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="font-baloo font-bold text-2xl text-ll-purple-dark mb-6">
                Get in Touch
              </h2>
              
              <p className="text-gray-700 mb-8">
                Have questions about our products or need styling advice? Our team is here to help with anything you need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1">
                    <Mail className="text-ll-purple mr-4" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      <a href="mailto:hello@littlelegendshair.com" className="hover:text-ll-purple">
                        hello@littlelegendshair.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Phone className="text-ll-purple mr-4" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-700">
                      <a href="tel:+18005551234" className="hover:text-ll-purple">
                        (800) 555-1234
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <MapPin className="text-ll-purple mr-4" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office</h3>
                    <address className="text-gray-700 not-italic">
                      123 Bedhead Boulevard<br />
                      Styleville, ST 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-ll-purple text-white p-3 rounded-full hover:bg-ll-purple-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-ll-purple text-white p-3 rounded-full hover:bg-ll-purple-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-ll-purple text-white p-3 rounded-full hover:bg-ll-purple-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-baloo font-bold text-2xl text-ll-purple-dark mb-6">
                  Send Us a Message
                </h2>
                
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-ll-green" size={32} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block font-medium mb-2">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          required 
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block font-medium mb-2">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          required
                          disabled={formStatus === 'submitting'}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        required
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block font-medium mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        type="text"
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        rows={5} 
                        required
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="button-primary w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-baloo font-bold text-3xl text-ll-purple-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-ll-purple-dark mb-3">
                How do I track my order?
              </h3>
              <p className="text-gray-700">
                Once your order ships, you'll receive a confirmation email with tracking information. You can also check your order status in your account.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-ll-purple-dark mb-3">
                What is your return policy?
              </h3>
              <p className="text-gray-700">
                We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us for a full refund or replacement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-ll-purple-dark mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes! We ship to most countries worldwide. Shipping rates and delivery times vary by location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-ll-purple-dark mb-3">
                Are your products safe for kids?
              </h3>
              <p className="text-gray-700">
                Absolutely! All our products are specially formulated to be safe for children, with tear-free formulas and kid-friendly ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
