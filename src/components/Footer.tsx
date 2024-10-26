import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">QuiPerd</h3>
            <p className="text-gray-400">
              La première plateforme de confrontation en ligne où le défi rencontre le divertissement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#commentjouer" className="text-gray-400 hover:text-white transition-colors">Comment jouer</a></li>
              <li><a href="#reclamation" className="text-gray-400 hover:text-white transition-colors">Réclamation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">support@quiperd.com</li>
              <li className="text-gray-400">+33 1 23 45 67 89</li>
              <li className="text-gray-400">Paris, France</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuiPerd. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}