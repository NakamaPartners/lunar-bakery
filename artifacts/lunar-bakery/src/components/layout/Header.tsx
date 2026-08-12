import { Link } from 'wouter';
import logo from '@assets/lunar_logo.png';

export function Header() {
  return (
    <header className="w-full py-8 md:py-12 px-6 flex flex-col md:flex-row justify-between items-center bg-background border-b border-border/40">
      <div className="hidden md:flex w-1/3">
        <a href="https://www.instagram.com/lunarbakerysf/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide text-primary hover:text-secondary transition-colors">
          Instagram
        </a>
      </div>
      <div className="flex justify-center w-full md:w-1/3">
        <Link href="/" className="block w-48 md:w-56">
          <img src={logo} alt="Lunar Artisan Baked Goods" className="w-full h-auto mix-blend-multiply" />
        </Link>
      </div>
      <div className="hidden md:flex w-1/3 justify-end">
        <a href="https://www.lunarbakery.com/s/order" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide text-primary hover:text-secondary transition-colors">
          Order Online
        </a>
      </div>
      
      <div className="flex md:hidden w-full justify-center gap-8 mt-6">
        <a href="https://www.instagram.com/lunarbakerysf/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide text-primary hover:text-secondary transition-colors">
          Instagram
        </a>
        <a href="https://www.lunarbakery.com/s/order" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide text-primary hover:text-secondary transition-colors">
          Order
        </a>
      </div>
    </header>
  );
}
