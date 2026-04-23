import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-secondary w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
              Encuéntranos
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. México 3300, Col. Monraz,<br />
                    C.P. 44670 Guadalajara, Jal.<br />
                    <span className="font-medium text-foreground block mt-1">
                      Plaza México, frente a Suburbia (por dentro de la plaza)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Teléfono / WhatsApp</h3>
                  <a 
                    href="https://wa.me/5213321795262" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium text-lg hover:underline"
                  >
                    33 2179 5262
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+M%C3%A9xico+3300%2C+Monraz%2C+44670+Guadalajara%2C+Jal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.610582230193!2d-103.3934375!3d20.6791244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0e5f201d4b%3A0x89e02315de236de9!2sPlaza%20M%C3%A9xico!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Coco's Life"
              className="grayscale-[0.3] contrast-125"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
