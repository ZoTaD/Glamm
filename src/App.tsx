import React from 'react';
import { Sparkles, ClipboardCheck, Bandage, Activity, Phone,  Instagram } from 'lucide-react';

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
            href="#contact" 
            className="bg-black !important text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Reserva tu cita
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dermaplanning",
                image: "public/images/Dermaplanning.jpg",
                description: "Transforma tu piel con dermaplaning, logrando una textura suave y un tono uniforme desde la primera sesion"
              },
              {
                title: "Tratamiento acne",
                image: "public/images/tratamiento-limpieza-facial-acne-1200x800.jpg",
                description: "El Tratamiento para Acné está diseñado para controlar la producción de sebo y minimizar brotes."
              },
              {
                title: "Hiperpigmentaciones",
                image: "public/images/microdermoabrasion-tratamiento.jpg",
                description: "Nuestro Tratamiento para Hiperpigmentaciones tiene como objetivo unificar el tono de la piel y reducir la apariencia de manchas."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100  py-20 px-6">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Phone className="w-6 h-6 text-black-500" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="text-black-500 hover:text-black-600">
                  <Instagram className="w-6 h-6" />
                </a>
                {/* <a href="#" className="text-black-500 hover:text-black-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-black-500 hover:text-black-600">
                  <Mail className="w-6 h-6" />
                </a> */}
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {/* <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              /> */}
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black !important text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Enviar Mensaje
              </button>
            </form>
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
              <a href="#" className="text-gray-400 hover:text-white">
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