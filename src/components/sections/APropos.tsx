import React from 'react';
import { Shield, Trophy, Users } from 'lucide-react';

export function APropos() {
  return (
    <section className="py-20 bg-white" id="apropos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos de QuiPerd</h2>
          <p className="text-xl text-gray-600">
            Une plateforme innovante pour les passionnés de compétition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Communauté Active</h3>
            <p className="text-gray-600">
              Rejoignez des milliers de joueurs passionnés et trouvez toujours un adversaire à votre niveau
            </p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sécurité Garantie</h3>
            <p className="text-gray-600">
              Système de paiement sécurisé et surveillance des parties pour une expérience sans souci
            </p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Trophy className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Récompenses</h3>
            <p className="text-gray-600">
              Gagnez des récompenses et grimpez dans le classement de notre communauté
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}