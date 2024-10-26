import React from 'react';
import { Users, Trophy, DollarSign, Star } from 'lucide-react';

export function NosChiffres() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "10,000+",
      label: "Joueurs actifs",
      color: "bg-blue-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "50,000+",
      label: "Parties jouées",
      color: "bg-green-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "100,000€",
      label: "Gains distribués",
      color: "bg-purple-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.8/5",
      label: "Note moyenne",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-white" id="chiffres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Chiffres</h2>
          <p className="text-xl text-gray-600">
            Des statistiques qui parlent d'elles-mêmes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${stat.color} text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}