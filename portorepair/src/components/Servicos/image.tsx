// src/CarImageSearch.tsx
import React, { useState, FormEvent } from 'react';

interface CarImageResponse {
  string: string[];
}

const CarImageSearch: React.FC = () => {
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<number | ''>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchCarImage = async () => {
    if (!make || !model || !year) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const searchTerm = `${make} ${model} ${year}`.replace(/ /g, '+');

      const apiUrl = `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${searchTerm}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Erro ao buscar a imagem do carro.');
      }

      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      const urlElement = xmlDoc.getElementsByTagName('string')[0];

      if (urlElement && urlElement.textContent) {
        setImageUrl(urlElement.textContent);
      } else {
        setError('Imagem não encontrada para o veículo especificado.');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCarImage();
  };

  return (
    <div>
      <h1>Buscar Imagem do Carro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="make">Fabricante:</label>
          <input
            type="text"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Ex: Toyota"
            required
          />
        </div>
        <div>
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Ex: Corolla"
            required
          />
        </div>
        <div>
          <label htmlFor="year">Ano:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="Ex: 2005"
            required
          />
        </div>
        <button type="submit">Buscar Imagem</button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div>
          <img src={imageUrl} alt={`${make} ${model} ${year}`} />
        </div>
      )}
    </div>
  );
};

export default CarImageSearch;
