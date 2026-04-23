import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Store, Truck } from "lucide-react";

const PRODUCTOS = [
  "Agua de Coco",
  "Coco Blando",
  "Harina de Coco",
  "Leche de Coco",
  "Carne de Coco",
  "Azúcar de Coco",
];

export function Services() {
  const [nombre, setNombre] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [direccion, setDireccion] = useState("");

  const isComplete =
    nombre.trim() !== "" &&
    producto.trim() !== "" &&
    cantidad.trim() !== "" &&
    direccion.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) {
      alert("Por favor completa todos los campos para hacer tu pedido.");
      return;
    }
    const mensaje = `Hola Coco's Life, mi nombre es ${nombre.trim()}. Me gustaría pedir ${cantidad.trim()} de ${producto} para entrega en: ${direccion.trim()}.`;
    const url = `https://wa.me/523321795262?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="servicios" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 text-left"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-2">Haz tu pedido</h3>
          <p className="text-primary-foreground/80 font-light text-center mb-8">
            Completa los datos y te conectamos directo a WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-sm font-medium mb-2 text-primary-foreground/90">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre completo"
                className="bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="producto" className="text-sm font-medium mb-2 text-primary-foreground/90">
                Producto
              </label>
              <select
                id="producto"
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                className="bg-white/95 text-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/60"
              >
                <option value="">Selecciona un producto</option>
                {PRODUCTOS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="cantidad" className="text-sm font-medium mb-2 text-primary-foreground/90">
                Cantidad
              </label>
              <input
                id="cantidad"
                type="text"
                inputMode="numeric"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                placeholder="Ej. 2 piezas, 1 litro"
                className="bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="direccion" className="text-sm font-medium mb-2 text-primary-foreground/90">
                Dirección
              </label>
              <input
                id="direccion"
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Calle, número, colonia, CP"
                className="bg-white/95 text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!isComplete}
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-full font-semibold text-lg tracking-wide shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <MessageCircle className="w-6 h-6" />
              Hacer Pedido
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
