// src/serviceCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

type Service = {
  title: string;
  image: string;
  description: string;
  masInfo: string;
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.setItem("scrollY", window.scrollY.toString());
    navigate(`/servicio/${encodeURIComponent(service.title)}`);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden group cursor-pointer rounded shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 z-10">
        <div>
          <h3 className="text-white/80 font-heading text-sm uppercase tracking-widest">
            Estética Facial
          </h3>
          <h2 className="text-white/90 text-2xl font-semibold">
            {service.title}
          </h2>
        </div>
        <button
          onClick={handleClick}
          className="self-center border border-white/80 text-white/80 px-6 py-2 mt-4 hover:bg-white hover:text-black transition"
        >
          VER
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
