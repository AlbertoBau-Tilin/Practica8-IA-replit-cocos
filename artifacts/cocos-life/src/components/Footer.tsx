import logoCucei from "@assets/logo-cucei_1776987675588.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="font-serif text-xl text-background mb-2">
          Coco's Life — Sucursal Plaza México
        </p>
        <p className="text-background/60 text-sm mb-8">
          © {new Date().getFullYear()} Coco's Life. Especialistas en productos de coco 100% naturales.
        </p>

        <div className="w-16 h-px bg-background/20 mb-8" />

        <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl px-6 py-8 w-full max-w-md">
          <img
            src={logoCucei}
            alt="Logo CUCEI"
            className="w-20 h-auto mx-auto mb-5 drop-shadow"
          />
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-background/80">
            <div className="flex flex-col">
              <dt className="text-background/50 text-xs uppercase tracking-wider">Alumno</dt>
              <dd className="font-medium text-background">Jose Alberto Bautista Bautista</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-background/50 text-xs uppercase tracking-wider">Materia</dt>
              <dd className="font-medium text-background">Desarrollo Web</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-background/50 text-xs uppercase tracking-wider">Profesor</dt>
              <dd className="font-medium text-background">Zeus Emanuel Gutiérrez Cobian</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-background/50 text-xs uppercase tracking-wider">Calendario</dt>
              <dd className="font-medium text-background">2026A</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
