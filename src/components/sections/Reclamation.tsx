import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import type { ReclamationForm } from '../../types';

export function Reclamation() {
  const [formData, setFormData] = useState<ReclamationForm>({
    email: '',
    idPartie: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" id="reclamation">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Réclamation</h2>
          <p className="text-xl text-gray-600">
            Un problème avec une partie ? Nous sommes là pour vous aider
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center mb-6 p-4 bg-yellow-50 rounded-lg">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
            <p className="text-yellow-700">
              Assurez-vous de fournir tous les détails nécessaires pour nous permettre de traiter votre réclamation efficacement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID de la partie
              </label>
              <input
                type="text"
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.idPartie}
                onChange={(e) => setFormData({ ...formData, idPartie: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Envoyer la réclamation</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}