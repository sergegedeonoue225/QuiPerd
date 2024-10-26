import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onSectionClick: (section: string) => void;
  onConnexionClick: () => void;
}

export function Navigation({ onSectionClick, onConnexionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
              QuiPerd
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onSectionClick('accueil')} 
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:scale-105 transition-all"
            >
              Accueil
            </button>
            <button 
              onClick={() => onSectionClick('apropos')} 
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:scale-105 transition-all"
            >
              À propos
            </button>
            <button 
              onClick={() => onSectionClick('commentjouer')} 
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:scale-105 transition-all"
            >
              Comment jouer
            </button>
            <button 
              onClick={() => onSectionClick('chiffres')} 
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:scale-105 transition-all"
            >
              Nos chiffres
            </button>
            <button 
              onClick={() => onSectionClick('reclamation')} 
              className="text-gray-700 hover:text-blue-600 text-lg font-medium hover:scale-105 transition-all"
            >
              Réclamation
            </button>
            <button 
              onClick={onConnexionClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
            >
              Se connecter
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <button
                onClick={() => {
                  onSectionClick('accueil');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  onSectionClick('apropos');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                À propos
              </button>
              <button
                onClick={() => {
                  onSectionClick('commentjouer');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Comment jouer
              </button>
              <button
                onClick={() => {
                  onSectionClick('chiffres');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Nos chiffres
              </button>
              <button
                onClick={() => {
                  onSectionClick('reclamation');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Réclamation
              </button>
              <button
                onClick={() => {
                  onConnexionClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full px-3 py-2 text-base font-bold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
              >
                Se connecter
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}