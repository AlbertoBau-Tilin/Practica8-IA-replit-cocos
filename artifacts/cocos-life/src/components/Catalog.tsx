import { motion } from "framer-motion";
import aguaImg from "@/assets/agua-de-coco.png";
import pulpaImg from "@/assets/pulpa-de-coco.png";
import aceiteImg from "@/assets/aceite-de-coco.png";
import lecheImg from "@/assets/leche-de-coco.png";
import mantequillaImg from "@/assets/mantequilla-de-coco.png";

const products = [
  {
    name: "Agua de Coco",
    description: "Refrescante, hidratante y 100% natural. Extraída diariamente de cocos frescos.",
    image: aguaImg,
  },
  {
    name: "Pulpa de Coco",
    description: "Suave, tierna y llena de sabor. Perfecta para licuados o disfrutar sola.",
    image: pulpaImg,
  },
  {
    name: "Aceite de Coco",
    description: "Prensado en frío, conserva todos sus nutrientes. Ideal para cocina y cuidado personal.",
    image: aceiteImg,
  },
  {
    name: "Leche de Coco",
    description: "Cremosa y sin conservadores. Una alternativa deliciosa y saludable.",
    image: lecheImg,
  },
  {
    name: "Mantequilla de Coco",
    description: "Pura crema de coco molida. Un untable rico, denso y naturalmente dulce.",
    image: mantequillaImg,
  }
];

export function Catalog() {
  return (
    <section id="catalogo" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-foreground mb-4"
        >
          Nuestros Productos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Todo lo bueno del coco, llevado directamente a ti. Sin procesos químicos, solo naturaleza pura.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div 
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
          >
            <div className="aspect-[4/5] overflow-hidden bg-secondary relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
