/* eslint-env browser */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PlantPhotoUploader from '../../components/PhotoUploader/PlantPhotoUploader';
import api from '../../services/axios';
import { Container } from '../../styles/Container';
import { FormPlantRegister, Title } from './styled';
import { Centered } from '../../styles/GlobalStyles';

export default function PlantForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // undefined if creating new
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({
    name: '',
    scientific_name: '',
    description: '',
    watering_frequency: '',
    light_requirements: '',
    temperature_range: '',
    humidity_level: '',
    soil_type: '',
    care_difficulty: '',
    notes: '',
    photo: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Reset form when creating a new plant
  useEffect(() => {
    if (!id) {
      setFormData({
        name: '',
        scientific_name: '',
        description: '',
        watering_frequency: '',
        light_requirements: '',
        temperature_range: '',
        humidity_level: '',
        soil_type: '',
        care_difficulty: '',
        notes: '',
        photo: null,
      });
      setPhotoPreview(null);
    }
  }, [id]);

  // Load existing plant for editing
  useEffect(() => {
    if (!id) return;

    const fetchPlant = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/plants/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData({
          ...response.data,
          photo: null, // reset file input for new uploads
        });

        if (response.data.photos && response.data.photos.length > 0) {
          setPhotoPreview(
            `${import.meta.env.VITE_API_URL}/images/${response.data.photos[0].filename}`
          );
        }
      } catch (err) {
        toast.error('Error loading plant data.', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlant();
  }, [id, token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Upload photo
  const uploadPhoto = async (file, plantId) => {
    try {
      const formDataPhoto = new window.FormData();
      formDataPhoto.append('photo', file);
      formDataPhoto.append('plant_id', plantId);

      await api.post('/photos', formDataPhoto, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Photo uploaded successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Error uploading photo.');
    }
  };

  // Handle photo selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhotoPreview(window.URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, photo: file }));

    if (!id) {
      // New plant → must save first before uploading photo
      toast.info('Save the plant first before adding a photo.');
      return;
    }

    // Existing plant → upload immediately
    uploadPhoto(file, id);
  };

  // Handle form submission (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const plantPayload = { ...formData };
      delete plantPayload.photo; // photo will be uploaded separately

      let plantResponse;

      if (id) {
        plantResponse = await api.put(`/plants/${id}`, plantPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Plant updated successfully!');
      } else {
        plantResponse = await api.post('/plants', plantPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Plant created successfully!');
      }

      // Upload photo after creation if it exists
      if (formData.photo && !id) {
        uploadPhoto(formData.photo, plantResponse.data.id);
      }

      navigate('/plants');
    } catch (err) {
      const errors = err.response?.data?.errors ?? [];
      if (errors.length > 0) {
        errors.forEach((error) => toast.error(error));
      } else {
        toast.error('Error saving plant.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>{id ? 'Edit Plant' : 'Register New Plant'}</Title>

      <FormPlantRegister onSubmit={handleSubmit}>
        <Centered>
          <PlantPhotoUploader
            photoPreview={photoPreview}
            onPhotoChange={handlePhotoChange}
          />
        </Centered>

        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Scientific Name:
          <input
            name="scientific_name"
            value={formData.scientific_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Watering Frequency:
          <input
            name="watering_frequency"
            value={formData.watering_frequency}
            onChange={handleChange}
          />
        </label>

        <label>
          Light Requirements:
          <input
            name="light_requirements"
            value={formData.light_requirements}
            onChange={handleChange}
          />
        </label>

        <label>
          Temperature Range:
          <input
            name="temperature_range"
            value={formData.temperature_range}
            onChange={handleChange}
          />
        </label>

        <label>
          Humidity Level:
          <select
            name="humidity_level"
            value={formData.humidity_level}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Soil Type:
          <input
            name="soil_type"
            value={formData.soil_type}
            onChange={handleChange}
          />
        </label>

        <label>
          Care Difficulty:
          <select
            name="care_difficulty"
            value={formData.care_difficulty}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
        </label>

        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : id ? 'Update' : 'Create'}
        </button>
      </FormPlantRegister>
    </Container>
  );
}
