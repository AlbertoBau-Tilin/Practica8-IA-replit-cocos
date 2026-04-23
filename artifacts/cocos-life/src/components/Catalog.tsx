import { motion } from "framer-motion";
import aguaImg from "@assets/agua-de-coco_1776985154984.jpg";
import cocoBlandoImg from "@assets/coco-blando_1776985154983.jpg";
import harinaImg from "@assets/harina-de-coco_1776985154981.jpg";
import lecheImg from "@assets/leche-de-coco_1776985154984.jpg";
import carneImg from "@assets/carne-de-coco_1776985154983.jpg";
import azucarImg from "@assets/azucar-de-coco_1776985154982.jpg";

const products = [
  {
    name: "Agua de Coco",
    description: "Refrescante, hidratante y 100% natural. Extraída diariamente de cocos frescos.",
    image: aguaImg,
  },
  {
    name: "Coco Blando",
    description: "Tierno y fresco, listo para disfrutar. Una experiencia tropical en cada sorbo.",
    image: cocoBlandoImg,
  },
  {
    name: "Harina de Coco",
    description: "Orgánica, sin gluten y rica en fibra. Ideal para repostería saludable.",
    image: harinaImg,
  },
  {
    name: "Leche de Coco",
    description: "Cremosa y sin conservadores. Una alternativa deliciosa y saludable.",
    image: lecheImg,
  },
  {
    name: "Carne de Coco",
    description: "Servida con chile, limón y sal. El antojo perfecto, fresco y natural.",
    image: carneImg,
  },
  {
    name: "Azúcar de Coco",
    description: "Endulzante orgánico de bajo índice glicémico. Sustituto saludable del azúcar refinada.",
    image: azucarImg,
  },
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
            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
          >
            <div className="aspect-[4/5] overflow-hidden bg-white relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
