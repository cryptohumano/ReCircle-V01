import { useState } from 'react';

interface RecyclingFormProps {
  onSubmit: (materialType: string, weight: number) => void;
}

export const RecyclingForm = ({ onSubmit }: RecyclingFormProps) => {
  const [materialType, setMaterialType] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(materialType, parseFloat(weight));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrar Reciclaje</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Material</label>
          <select
            value={materialType}
            onChange={(e) => setMaterialType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Selecciona un material</option>
            <option value="plastic">Plástico</option>
            <option value="paper">Papel</option>
            <option value="glass">Vidrio</option>
            <option value="metal">Metal</option>
            <option value="electronic">Electrónicos</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            step="0.1"
            min="0"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}; 