import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const WebsiteCard = ({ website, index }) => {
  const gradients = [
    'from-red-600 to-orange-500',
    'from-blue-600 to-cyan-500',
    'from-green-600 to-emerald-500'
  ];

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl hover-card">
      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm m-[1px] rounded-2xl overflow-hidden">
        {/* Image/Video Section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={website.image} 
            alt={website.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
          
          {/* Visit Button Overlay */}
          <a 
            href={website.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradients[index]} flex items-center justify-center`}>
              <website.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{website.name}</h3>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{website.description}</p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {website.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-yellow-500" />
                {feature}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link 
              to={`/website/${website.id}`}
              className="flex-1 bg-white/10 hover:bg-yellow-500 text-white hover:text-black px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 bg-gradient-to-r ${gradients[index]} text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300`}
            >
              Visit <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;