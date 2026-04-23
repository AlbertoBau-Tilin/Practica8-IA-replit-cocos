import { motion } from "framer-motion";
import { MessageCircle, Store, Truck } from "lucide-react";

export function Services() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative leaf shapes or simple geometric blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-12"
        >
          ¿Cómo comprar?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center bg-black/10 p-8 rounded-3xl backdrop-blur-sm"
          >
            <div className="bg-white/20 p-4 rounded-full mb-6">
              <Store className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Venta en Sucursal</h3>
            <p className="text-primary-foreground/80 font-light text-center">
              Visítanos en Plaza México y llévate tus productos al instante, súper frescos.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center bg-black/10 p-8 rounded-3xl backdrop-blur-sm"
          >
            <div className="bg-white/20 p-4 rounded-full mb-6">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif mb-3">Servicio a Domicilio</h3>
            <p className="text-primary-foreground/80 font-light text-center">
              Recibe la frescura del coco en la puerta de tu casa. Pedidos por WhatsApp.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://wa.me/5213321795262?text=Hola%20Coco%27s%20Life%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20a%20domicilio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-full font-semibold text-lg tracking-wide shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Hacer pedido por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
