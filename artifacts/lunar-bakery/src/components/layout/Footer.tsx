import logo from '@assets/lunar_logo.png';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-16 px-6 md:px-12 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col max-w-sm">
          <div className="bg-primary-foreground p-4 rounded-sm inline-block mb-6 w-48">
             <img src={logo} alt="Lunar Artisan Baked Goods" className="w-full h-auto" />
          </div>
          <p className="text-primary-foreground/80 font-serif italic text-lg leading-relaxed mb-6">
            Hand-crafted French pastries with Taiwanese flavors inspired by seasons.
          </p>
          <a href="mailto:lunarbakerysf@gmail.com" className="text-secondary hover:text-white transition-colors">
            lunarbakerysf@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xl mb-2">Connect</h4>
            <a href="https://www.instagram.com/lunarbakerysf/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="mailto:lunarbakerysf@gmail.com" className="text-primary-foreground/70 hover:text-white transition-colors">
              Email Us
            </a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xl mb-2">Offerings</h4>
            <a href="https://www.lunarbakery.com/s/order" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
              Order Online
            </a>
            <span className="text-primary-foreground/70">
              Custom Cakes
            </span>
            <span className="text-primary-foreground/70">
              Catering
            </span>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Lunar Bakery. All rights reserved.</p>
        <p>San Francisco, CA</p>
      </div>
    </footer>
  );
}
