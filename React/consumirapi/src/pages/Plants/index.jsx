import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import { PlantContainer, PlantPhoto } from './styled';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        console.warn('🔄 Buscando plantas de:', `${API_BASE_URL}/plants`);

        const response = await axios.get(`${API_BASE_URL}/plants`);

        console.warn('✅ Dados recebidos:', response.data);
        setPlants(response.data);
        setError(null);
      } catch (err) {
        console.error('❌ Erro ao buscar plantas:', err);
        setError(
          err.response?.data?.error || err.message || 'Erro desconhecido'
        );
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div style={{ padding: '20px' }}>Carregando plantas...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Erro ao carregar dados</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Container>
      {/* <div style={{ padding: '20px' }}> */}
      <h1>Lista de Plantas</h1>

      <PlantContainer>
        {plants.length === 0 ? (
          <p>Nenhuma planta encontrado</p>
        ) : (
          <ul>
            {plants.map((plant) => (
              <div key={plant.id}>
                <PlantPhoto>
                  {plant?.Fotos?.[0]?.url ? (
                    <img src={plant.Fotos[0].url} alt="" />
                  ) : (
                    <FaUserCircle size={35} />
                  )}
                </PlantPhoto>
                <strong>{plant.nome}</strong> - {plant.idade} anos
                {plant.email && ` - ${plant.email}`}
                <Link to={`/plant/${plant.id}/edit`}>
                  <FaEdit size={16} />
                </Link>
                <Link to={`/plant/${plant.id}/delete`}>
                  <FaWindowClose size={16} />
                </Link>
              </div>
            ))}
          </ul>
        )}
      </PlantContainer>
      {/* </div> */}
    </Container>
  );
}
