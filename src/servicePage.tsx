// src/servicePage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "./services";
import { Service, FAQItem } from "./types";
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
            <div className="h-screen flex items-center justify-center bg-white">
                <p className="text-gray-600">Servicio no encontrado</p>
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
        <div className="bg-white text-neutral-900">
            {/* Volver */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <button
                    onClick={handleBack}
                    className="text-sm text-gray-600 hover:underline inline-flex items-center rounded-full px-3 py-1"
                >
                    ← Volver a Servicios
                </button>
            </div>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 items-center py-12">
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-64 md:h-80 object-cover"
                    />
                </div>
                <div className="space-y-4 p-6">
                    <span className="uppercase text-xs text-gray-600 tracking-wide">
                        Estética Facial
                    </span>
                    <h1 className="text-3xl font-heading font-bold">
                        {current.title}
                    </h1>
                    <p className="text-base text-gray-700 leading-relaxed">
                        {current.description}
                    </p>
                    <button className="bg-amber-500 text-white px-5 py-2 rounded-full uppercase text-sm font-semibold hover:bg-amber-600 transition">
                        Solicita más info
                    </button>
                </div>
            </section>

            {/* Detalles */}
            <section className="py-12 text-center px-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-heading mb-3">
                    Detalles del Servicio
                </h2>
                <p className="text-gray-600">{current.masInfo}</p>
            </section>

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-2">
                        Preguntas frecuentes
                    </h3>
                    {current.faq.map((item: FAQItem, idx: number) => (
                        <div key={idx} className="border-t border-gray-200">
                            <button
                                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                                className="w-full flex justify-between items-center py-3 text-left text-gray-800 hover:text-gray-900 transition rounded-full px-4"
                            >
                                <span>{item.q}</span>
                                <span className="text-lg">
                                    {faqOpen === idx ? "−" : "+"}
                                </span>
                            </button>
                            {faqOpen === idx && (
                                <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>
            </section>

            {/* CTA Final */}
            <section className="text-center py-16 px-6 max-w-3xl mx-auto">
                <h3 className="text-2xl font-heading mb-2">
                    Comenzá tu transformación
                </h3>
                <p className="text-gray-700 mb-6">
                    Rejuvenecé tu rostro con un equipo especializado y tecnologías de avanzada. Nos encontramos en Lujan, Buenos Aires.
                </p>
                <button className="bg-amber-500 text-white px-6 py-2 rounded-full uppercase font-semibold hover:bg-amber-600 transition">
                    Agendá una visita
                </button>
            </section>
        </div>
    );
};

export default ServicePage;
