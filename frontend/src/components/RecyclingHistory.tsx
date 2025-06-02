interface RecyclingRecord {
  _id: string;
  materialType: string;
  weight: number;
  points: number;
  createdAt: string;
  nftMinted: boolean;
  nftTokenId?: number;
}

interface RecyclingHistoryProps {
  records: RecyclingRecord[];
}

export const RecyclingHistory = ({ records }: RecyclingHistoryProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getMaterialName = (type: string) => {
    const materials: { [key: string]: string } = {
      plastic: 'Plástico',
      paper: 'Papel',
      glass: 'Vidrio',
      metal: 'Metal',
      electronic: 'Electrónicos',
    };
    return materials[type] || type;
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Historial de Reciclaje</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Material
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Peso (kg)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puntos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NFT
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(record.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getMaterialName(record.materialType)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.weight.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.points}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.nftMinted ? (
                    <span className="text-green-600">Mintado #{record.nftTokenId}</span>
                  ) : (
                    <span className="text-gray-400">Pendiente</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 