import React, { useState } from 'react';

const VehicleProblemsByMakeModelYear: React.FC = () => {
  const [make, setMake] = useState<string>(''); // Montadora
  const [model, setModel] = useState<string>(''); // Modelo do carro
  const [year, setYear] = useState<string>(''); // Ano
  const [problems, setProblems] = useState<any[]>([]); // Problemas encontrados
  const [modelsList, setModelsList] = useState<any[]>([]); // Lista de modelos para o fabricante e ano

  // Função para buscar os modelos por montadora e ano
  const fetchModelsByMakeAndYear = async (make: string, year: string) => {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`);
    const data = await response.json();
    setModelsList(data.Results); // Popula a lista de modelos
  };

  // Função para buscar os recalls com base na montadora, modelo e ano
  const fetchRecallsByMakeModelYear = async (make: string, model: string, year: string) => {
    const response = await fetch(`https://api.nhtsa.gov/recalls/recallsByVehicle?make=${make}&model=${model}&year=${year}`);
    const data = await response.json();

    // Filtrando os 3 principais problemas
    if (data.Results && data.Results.length > 0) {
      const top3Problems = data.Results.slice(0, 3); // Pegando os 3 primeiros problemas
      setProblems(top3Problems); // Armazena os problemas
    } else {
      setProblems([]);
      console.log('Nenhum recall encontrado para este modelo.');
    }
  };

  // Função para buscar modelos ao clicar no botão
  const handleFetchModels = () => {
    fetchModelsByMakeAndYear(make, year);
  };

  // Função para buscar problemas ao clicar no botão
  const handleFetchProblems = () => {
    fetchRecallsByMakeModelYear(make, model, year);
  };

  return (
    <div>
      {/* Input para a montadora */}
      <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Montadora (ex: Toyota, Ford)"
      />
      
      {/* Input para o ano */}
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Ano (ex: 2020)"
      />
      
      <button onClick={handleFetchModels}>Buscar Modelos</button>

      {/* Se houver modelos disponíveis, mostrá-los em uma lista suspensa */}
      {modelsList.length > 0 && (
        <div>
          <h3>Selecione o Modelo</h3>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Selecione o modelo</option>
            {modelsList.map((m, index) => (
              <option key={index} value={m.Model_Name}>{m.Model_Name}</option>
            ))}
          </select>
        </div>
      )}

      <button onClick={handleFetchProblems}>Buscar Principais Problemas</button>

      {/* Exibir os problemas encontrados */}
      {problems.length > 0 && (
        <div>
          <h3>Top 3 Problemas do Veículo</h3>
          {problems.map((problem, index) => (
            <div key={index}>
              <h4>{index + 1}. {problem.Component}</h4>
              <p>{problem.Summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleProblemsByMakeModelYear;
