export function Footer() {
  return (
    <footer className="bg-foreground text-background/60 py-8 text-center text-sm px-6">
      <p className="mb-2 font-serif text-lg text-background">Coco's Life — Sucursal Plaza México</p>
      <p>© {new Date().getFullYear()} Coco's Life. Especialistas en productos de coco 100% naturales.</p>
    </footer>
  );
}
