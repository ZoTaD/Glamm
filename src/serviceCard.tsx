import { useState } from 'react';

interface Service {
  image: string;
  title: string;
  description: string;
  masInfo: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
        <button 
          className="mt-4 text-black-500 hover:underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Menos información' : 'Más información'}
        </button>
        {expanded && (
          <div className="mt-4">
            <p className="text-gray-700">{service.masInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
