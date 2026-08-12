import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import heroImage from '@assets/lunar_og.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-secondary selection:text-white">
      <Header />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full px-6 pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden flex flex-col items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-5xl mx-auto flex flex-col items-center text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-primary leading-[1.1] mb-8"
            >
              Taiwanese memory.
              <br />
              <span className="italic text-secondary">French technique.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="max-w-xl text-lg md:text-xl text-primary/80 mb-16 leading-relaxed"
            >
              A quiet, considered bakery inspired by the seasons. Found only if you're paying attention.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden mt-4 md:mt-8">
              <img 
                src={heroImage} 
                alt="Freshly baked Pastel de Nata arranged on a warm surface" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="w-full px-6 py-24 md:py-32 bg-primary text-primary-foreground">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
              We exist as a pop-up, moving with the seasons and appearing at curated spaces across the Bay Area.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Our menu changes constantly, reflecting what is fresh and our ongoing exploration of Taiwanese flavors married to classical pastry methods.
            </p>
          </motion.div>
        </section>

        {/* UPCOMING POP-UPS */}
        <section className="w-full px-6 py-24 md:py-32 border-b border-border">
          <div className="w-full max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-16 lg:gap-24"
            >
              <motion.div variants={fadeInUp} className="lg:w-1/3">
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Where to find us</h2>
                <p className="text-primary/70 text-lg leading-relaxed mb-8">
                  We don't have a permanent storefront. Join us at our upcoming events. Please arrive early, as we bake in small batches.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="https://www.lunarbakery.com/s/order" target="_blank" rel="noopener noreferrer">
                    Pre-order Pastries
                  </a>
                </Button>
              </motion.div>
              
              <motion.div variants={staggerContainer} className="lg:w-2/3 flex flex-col gap-10">
                <PopUpEvent 
                  date="Sat. Aug 8"
                  time="11am to 2pm"
                  location="Konbini"
                  description="Taiwan-ish brunch party. Featuring Yunhai, mt. kakigori, and lil devil noodles."
                />
                <div className="h-px w-full bg-border" />
                <PopUpEvent 
                  date="Sun. Aug 9"
                  time="11am to 2pm"
                  location="Buoy Cafe"
                  description="Salt bread special."
                />
                <div className="h-px w-full bg-border" />
                <PopUpEvent 
                  date="Sat. Aug 15"
                  time="11:30am to 2:30pm"
                  location="April Provisions (East Bay)"
                  description="With Nekosama and A Toi Bakes."
                />
                <div className="h-px w-full bg-border" />
                <PopUpEvent 
                  date="Thurs. Aug 20"
                  time="11am to 2pm"
                  location="Wells Fargo Pavillion"
                  description="333 Market Street (outdoor plaza). Open to the public, with live concert series."
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CUSTOM CAKES & CATERING */}
        <section className="w-full px-6 py-24 md:py-32 bg-[hsl(38.8,30%,92%)]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <motion.div variants={fadeInUp} className="max-w-xl text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">Custom Cakes & Catering</h2>
              <p className="text-lg text-primary/80 leading-relaxed mb-8">
                Looking for something special? We are currently accepting custom cake orders for October and November 2026. We also offer catering for private events and gatherings.
              </p>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                <a href="mailto:lunarbakerysf@gmail.com">
                  Email to Inquire
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full md:w-1/3 flex justify-center text-secondary">
              {/* Decorative element representing a stylized cake/celebration since we don't have a cake image */}
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M12 2v4M8 4v2M16 4v2" />
                <path d="M4 10h16v12H4z" />
                <path d="M4 16h16" />
                <path d="M2 22h20" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="w-full px-6 py-32 md:py-40 flex justify-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full max-w-2xl flex flex-col items-center"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Never miss a bake.</h2>
            <p className="text-lg md:text-xl text-primary/70 mb-10">
              Sign up for our newsletter to be notified of upcoming pop-ups, menu releases, and pre-order drops. We promise to only send the good stuff.
            </p>
            <form 
              className="w-full flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to Lunar Bakery.");
              }}
            >
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className="h-14 md:text-lg border-primary/30 focus-visible:ring-secondary rounded-none"
              />
              <Button type="submit" size="lg" className="h-14 px-10 text-lg w-full sm:w-auto shrink-0">
                Be Notified
              </Button>
            </form>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PopUpEvent({ date, time, location, description }: { date: string, time: string, location: string, description: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12">
      <div className="w-full sm:w-1/3 flex flex-col">
        <span className="font-serif text-2xl font-medium text-secondary">{date}</span>
        <span className="text-primary/70 mt-1">{time}</span>
      </div>
      <div className="w-full sm:w-2/3 flex flex-col">
        <h3 className="text-2xl font-bold font-serif mb-2">{location}</h3>
        <p className="text-lg text-primary/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
