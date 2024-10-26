import React from 'react';
import { Calendar, Clock, DollarSign, User } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
  onJoin: (gameId: string) => void;
}

export function GameCard({ game, onJoin }: GameCardProps) {
  const date = new Date(game.dateTime);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{game.gameType}</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {game.status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <User className="w-4 h-4 mr-2" />
          <span>Created by {game.creator}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>${game.amount}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date.toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{date.toLocaleTimeString()}</span>
        </div>
      </div>
      
      {game.status === 'open' && (
        <button
          onClick={() => onJoin(game.id)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Join Game
        </button>
      )}
    </div>
  );
}