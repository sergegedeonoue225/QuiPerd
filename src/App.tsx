import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Accueil } from './components/sections/Accueil';
import { APropos } from './components/sections/APropos';
import { CommentJouer } from './components/sections/CommentJouer';
import { NosChiffres } from './components/sections/NosChiffres';
import { Reclamation } from './components/sections/Reclamation';
import { ConnexionModal } from './components/modals/ConnexionModal';
import { Footer } from './components/Footer';

function App() {
  const [isConnexionModalOpen, setIsConnexionModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        onSectionClick={handleSectionClick}
        onConnexionClick={() => setIsConnexionModalOpen(true)}
      />

      <main>
        <Accueil />
        <APropos />
        <CommentJouer />
        <NosChiffres />
        <Reclamation />
      </main>

      <Footer />

      <ConnexionModal
        isOpen={isConnexionModalOpen}
        onClose={() => setIsConnexionModalOpen(false)}
      />
    </div>
  );
}

export default App;