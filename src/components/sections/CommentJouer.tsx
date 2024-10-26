import React from 'react';
import { UserPlus, LogIn, GamepadIcon, Users } from 'lucide-react';

export function CommentJouer() {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: "S'inscrire",
      description: "Créez votre compte en quelques clics pour accéder à toutes les fonctionnalités"
    },
    {
      icon: <LogIn className="w-12 h-12" />,
      title: "Se connecter",
      description: "Connectez-vous à votre compte pour commencer l'aventure"
    },
    {
      icon: <GamepadIcon className="w-12 h-12" />,
      title: "Créer une partie",
      description: "Définissez le jeu, le montant et l'heure de votre partie"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Rejoindre une partie",
      description: "Trouvez une partie qui vous correspond et affrontez vos adversaires"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" id="commentjouer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment jouer ?</h2>
          <p className="text-xl text-gray-600">
            Suivez ces étapes simples pour commencer votre aventure sur QuiPerd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}