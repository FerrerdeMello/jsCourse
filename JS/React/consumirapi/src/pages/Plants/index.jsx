import { useEffect, useState } from 'react';
import {
  FaEdit,
  FaExclamation,
  FaUserCircle,
  FaWindowClose,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import api from '../../services/axios';
import { Container } from '../../styles/Container';
import { Centered } from '../../styles/GlobalStyles';
import { PlantContainer, PlantPhoto, PlantRow } from './styled';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Checks if the user is logged in (comes from Redux)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return; // don't fetch if not logged in

    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('plants');
        setPlants(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.error || err.message || 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [isLoggedIn]); // dependency isLoggedIn ensures fetch only when logged in

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Error loading data...</h2>
        <p>{error}</p>
      </div>
    );
  }

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id) => {
    try {
      setIsLoading(true);
      await api.delete(`/plants/${id}`);
      // Updates the local state, removing the deleted item
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
      setIsLoading(false);
      toast.success('Plant successfully removed!');
    } catch (err) {
      const errors = err.response?.data?.errors ?? [];
      if (errors.length > 0) {
        errors.forEach((error) => toast.error(error));
      } else {
        toast.error('Erro ao apagar a planta');
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Centered>
        <h1>Plants List</h1>
      </Centered>

      <PlantContainer>
        {plants.length === 0 ? (
          <p>No plants found.</p>
        ) : (
          <ul>
            {plants.map((plant) => (
              <PlantRow key={plant.id}>
                <PlantPhoto>
                  {plant?.photos?.[0]?.filename ? (
                    <img
                      src={`${API_BASE_URL}/images/${plant.photos[0].filename}`}
                      alt=""
                    />
                  ) : (
                    <FaUserCircle size={35} />
                  )}
                </PlantPhoto>
                <strong>{plant.name}</strong>
                {/* only shows if logged in */}
                {isLoggedIn && (
                  <>
                    <Link to={`/plant/${plant.id}/edit`}>
                      <FaEdit size={16} />
                    </Link>
                    <Link
                      onClick={handleDeleteAsk}
                      to={`/plant/${plant.id}/delete`}
                    >
                      <FaWindowClose size={16} />
                    </Link>
                    <FaExclamation
                      size={16}
                      display="none"
                      cursor="pointer"
                      onClick={(e) => handleDelete(e, plant.id)}
                    />
                  </>
                )}
              </PlantRow>
            ))}
          </ul>
        )}
      </PlantContainer>
      {/* </div> */}
    </Container>
  );
}
