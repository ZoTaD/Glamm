import React from 'react';
import { Sparkles, ClipboardCheck, Bandage, Activity, MessageSquare, Instagram } from 'lucide-react';
import Services from './services';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80"
            alt="Salon background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-8 h-8" />
            Glamm
          </h1>
          <div className="hidden md:flex gap-8 text-white">
            <a href="#services" className="hover:text-pink-300 transition">Servicios</a>
            <a href="#about" className="hover:text-pink-300 transition">Nosotros</a>
            <a href="#contact" className="hover:text-pink-300 transition">Contacto</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tu belleza, nuestra pasión
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Descubre una experiencia única de belleza y bienestar en Glamm Estética
          </p>
          <a
            href="https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20transformar%20mi%20piel%20coordinamos%20un%20turno?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black !important text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Reserva tu cita
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-200  py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: ClipboardCheck, title: "Anamnesis", desc: "Evaluamos tu historial médico y analizamos tus necesidades específicas" },
            { icon: Bandage, title: "Tratamiento personalizado", desc: "Desarrollamos tratamientos a medida para potenciar la salud y belleza de tu piel" },
            { icon: Activity, title: "Seguimiento", desc: "Realizamos un seguimiento constante para garantizar resultados óptimos" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              {React.createElement(feature.icon, { className: "w-12 h-12 mx-auto mb-4 text-black-500" })}

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>

            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 !important rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu piel?  </h2>
            <p className="text-xl mb-8">
              Hablemos de cómo diseñar un tratamiento 100% personalizado que resalte tu belleza natural y cuide la salud de tu piel. ¡Tu mejor versión empieza acá!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20transformar%20mi%20piel%20coordinamos%20un%20turno?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 flex items-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Comienza tu Cambio
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              Glamm
            </h3>
            <p className="text-gray-400">
              Tu destino de belleza y bienestar
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Horario</h4>
            <p className="text-gray-400">Nos adaptamos al tuyo</p>
            {/* <p className="text-gray-400">Sábado: 10:00 - 18:00</p>
            <p className="text-gray-400">Domingo: Cerrado</p> */}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/glamm.estetica_?igsh=N2I0eW5iNG9kbDky" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;