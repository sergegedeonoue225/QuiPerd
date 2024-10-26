import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowLeft } from 'lucide-react';

interface ConnexionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'login' | 'register' | 'forgot-password';

export function ConnexionModal({ isOpen, onClose }: ConnexionModalProps) {
  const [currentView, setCurrentView] = useState<ModalView>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  if (!isOpen) return null;

  const inputClasses = "pl-10 w-full rounded-lg border-2 border-blue-100 bg-white shadow-sm focus:border-blue-700 focus:ring-blue-600 h-12";

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Connexion</h2>
              <p className="text-gray-600">Connectez-vous à votre compte QuiPerd</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    required
                    className={inputClasses}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <button
                onClick={() => setCurrentView('forgot-password')}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium block w-full text-center"
              >
                Mot de passe oublié ?
              </button>
              <button
                onClick={() => setCurrentView('register')}
                className="text-gray-600 hover:text-gray-700 text-sm font-medium block w-full text-center"
              >
                Pas encore de compte ? Inscrivez-vous
              </button>
            </div>
          </>
        );

      case 'register':
        return (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Inscription</h2>
              <p className="text-gray-600">Créez votre compte QuiPerd</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    className={inputClasses}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    required
                    className={inputClasses}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    required
                    className={inputClasses}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                Créer mon compte
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={() => setCurrentView('login')}
                className="text-gray-600 hover:text-gray-700 text-sm font-medium flex items-center justify-center w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la connexion
              </button>
            </div>
          </>
        );

      case 'forgot-password':
        return (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Mot de passe oublié</h2>
              <p className="text-gray-600">Entrez votre email pour réinitialiser votre mot de passe</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-md hover:shadow-lg"
              >
                Réinitialiser le mot de passe
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={() => setCurrentView('login')}
                className="text-gray-600 hover:text-gray-700 text-sm font-medium flex items-center justify-center w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la connexion
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md shadow-2xl transform transition-all">
        <div className="relative p-6">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {renderView()}
        </div>
      </div>
    </div>
  );
}