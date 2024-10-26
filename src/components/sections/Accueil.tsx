import React from 'react';
import { Gamepad2, Trophy, Target, Coins } from 'lucide-react';

export function Accueil() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Bienvenue sur <span className="text-blue-600">QuiPerd</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              La première plateforme de confrontation en ligne où le défi rencontre le divertissement.
              Créez ou rejoignez des parties, affrontez des adversaires et montrez vos talents !
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Créer une partie
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-6">
              <div className="bg-blue-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Gamepad2 className="w-16 h-16 text-blue-600 animate-bounce" />
              </div>
              <div className="bg-green-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Trophy className="w-16 h-16 text-green-600 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col space-y-6 mt-12">
              <div className="bg-purple-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Target className="w-16 h-16 text-purple-600 animate-spin-slow" />
              </div>
              <div className="bg-yellow-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Coins className="w-16 h-16 text-yellow-600 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}