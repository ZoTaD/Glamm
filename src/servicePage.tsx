// src/servicePage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "./services";
import { Service, FAQItem } from "./types";
import { ArrowLeft, MessageSquare, Sparkles } from "lucide-react";
import "./index.css";

const ServicePage: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const navigate = useNavigate();
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const allServices = Object.values(services).flat() as Service[];
    const current = allServices.find(
        (s) =>
            s.title.toLowerCase() === decodeURIComponent(title || "").toLowerCase()
    );

    if (!current) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                        Servicio no encontrado
                    </h2>
                    <p className="text-gray-600 mb-6">El servicio que buscas no existe</p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition border border-gray-300"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    const handleBack = () => {
        const saved = sessionStorage.getItem("scrollY");
        navigate("/");
        if (saved) {
            setTimeout(() => window.scrollTo({ top: +saved, behavior: "smooth" }), 0);
        }
    };

    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Header simple con volver */}
            <div className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-heading font-bold text-gray-900 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2" />
                        Glamm Estética
                    </h1>
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Volver a Servicios</span>
                    </button>
                </div>
            </div>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 items-center py-12">
                <div className="overflow-hidden shadow-lg">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-64 md:h-80 object-cover"
                    />
                </div>
                <div className="space-y-4 p-6">
                    <span className="uppercase text-xs text-gray-500 tracking-wide font-medium">
                        Estética Facial
                    </span>
                    <h1 className="text-3xl font-heading font-bold text-gray-900">
                        {current.title}
                    </h1>
                    <p className="text-base text-gray-600 leading-relaxed">
                        {current.description}
                    </p>
                    <a
                        href={`https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20más%20información%20sobre%20${encodeURIComponent(current.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition border border-gray-300"
                    >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Solicitar información
                    </a>
                </div>
            </section>

            {/* Detalles */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                        Detalles del Tratamiento
                    </h2>
                    <span className="block w-24 h-1 bg-gray-900 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {current.masInfo}
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                        Preguntas frecuentes
                    </h3>
                    {current.faq.map((item: FAQItem, idx: number) => (
                        <div key={idx} className="bg-white shadow-sm border border-gray-200">
                            <button
                                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-4 text-left text-gray-900 hover:bg-gray-50 transition"
                            >
                                <span className="font-semibold">{item.q}</span>
                                <span className="text-lg font-bold text-gray-600">
                                    {faqOpen === idx ? "−" : "+"}
                                </span>
                            </button>
                            {faqOpen === idx && (
                                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="overflow-hidden shadow-lg">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gray-900 text-center py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                        Comenzá tu transformación
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Rejuvenecé tu rostro con un equipo especializado y tecnologías de avanzada. Nos encontramos en Luján, Buenos Aires.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/5492323510968?text=Hola%20glamm%20estetica,%20quiero%20agendar%20una%20cita%20para%20${encodeURIComponent(current.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition border border-gray-300"
                        >
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Agendar cita
                        </a>
                        <button
                            onClick={handleBack}
                            className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-gray-900 transition"
                        >
                            Ver más servicios
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;