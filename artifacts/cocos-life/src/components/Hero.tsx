import { motion } from "framer-motion";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[90svh] flex flex-col justify-center items-center overflow-hidden px-6 pt-24 pb-12 w-full">
      {/* Background with slight grain or overlay if desired, but here we just use the image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Cocos frescos" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary-foreground/90 uppercase tracking-widest text-sm font-medium mb-4"
        >
          Sucursal Plaza México
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Coco's Life
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10"
        >
          Especialistas en productos de coco 100% naturales y orgánicos en el corazón de Guadalajara.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#catalogo" 
            className="inline-flex items-center justify-center bg-white text-foreground px-8 py-4 rounded-full font-medium tracking-wide transition-transform hover:scale-105 hover:bg-white/90 shadow-lg"
          >
            Ver Productos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
