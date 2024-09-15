import { useState, FormEvent } from 'react';

interface CarImageResponse {
  string: string[];
}

export default function ApiResquestImage() {
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
    <div className="container-form-login">
      <form onSubmit={handleSubmit} className='form-request-image'>

      <legend className="titulo-request-image">Informe os dados do seu veículo</legend>

        <div className='container-label'>
          <label htmlFor="make" className='label-request-image'>Fabricante:</label>
          <input
            type="text"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Ex: Toyota"
            required
            className='input-request-image'
          />
        </div>

        <div className='container-label'>
          <label htmlFor="model" className='label-request-image'>Modelo:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Ex: Corolla"
            required
            className='input-request-image'
          />
        </div>

        <div className='container-label' >
          <label htmlFor="year" className='label-request-image'>Ano:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="Ex: 2005"
            required
            className='input-request-image'
          />
        </div>

        <button type="submit" className='submit-button-request-image'>Buscar</button>

      </form>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div className='container-image-request' >
          <img src={imageUrl} alt={`${make} ${model} ${year}`} className='img-request' />
        </div>
      )}
      
    </div>
  );
};