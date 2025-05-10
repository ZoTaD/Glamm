// src/App.tsx
import React from 'react';
import { Sparkles, ClipboardCheck, Bandage, Activity, MessageSquare, Instagram } from 'lucide-react';
import Services from './services';
import BackgroundVideo from './background';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <BackgroundVideo />

        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="hidden md:flex gap-8 text-white">
            <a href="#services" className="hover:text-pink-300 transition">Servicios</a>
            <a href="#about" className="hover:text-pink-300 transition">Nosotros</a>
            <a href="#contact" className="hover:text-pink-300 transition">Contacto</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6">
            Glamm Estetica
          </h2>
          <p className="text-xl text-gray-200 mb-8 text-base font-sans max-w-2xl">
            Donde la ciencia y la belleza se encuentran.
          </p>
          <a
            href="https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20transformar%20mi%20piel%20coordinamos%20un%20turno?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Reserva tu cita
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="bg-amber-20 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      <section className="bg-neutral-900/80 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-2">
            Nuestro enfoque personalizado
          </h2>
          <span className="block w-24 h-1 mx-auto bg-gray-900 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ClipboardCheck,
              title: "Anamnesis",
              desc:
                "En la primera sesión conocemos tu piel, hábitos y objetivos para diseñar el mejor plan para vos.",
            },
            {
              icon: ClipboardCheck,
              title: "Diagnóstico",
              desc:
                "Analizamos tu piel en profundidad con lupa de aumento y luz especializada para determinar su estado y necesidades.",
            },
            {
              icon: Bandage,
              title: "Tratamiento personalizado",
              desc:
                "Diseñamos un plan exclusivo con técnicas y productos adaptados a tu piel.",
            },
            {
              icon: Activity,
              title: "Seguimiento",
              desc:
                "Ajustamos el tratamiento según la evolución de tu piel para garantizar mejores resultados.",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="relative bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800/70 transition p-8 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>



      {/* Contacto */}
      <section id="contacto" className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto y CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              ¿Y si empezar por tu piel fuera el primer paso para sentirte mejor?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Glamm es más que un tratamiento, es un espacio pensado para vos, donde cada detalle se adapta a lo que realmente necesitás.
            </p>
            <a
              href="https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20transformar%20mi%20piel%20coordinamos%20un%20turno?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              Agendá tu experiencia.
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marca */}
          <div>
            <h3 className="text-2xl font-heading text-white flex items-center gap-2 mb-3">
              <Sparkles className="h-6 w-6" />
              Glamm
            </h3>
            <p>Tu destino de belleza y bienestar.</p>
          </div>
          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#about" className="hover:text-white transition">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/glamm.estetica_?igsh=N2I0eW5iNG9kbDky" className="hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Glamm Estética. Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}

export default App;
