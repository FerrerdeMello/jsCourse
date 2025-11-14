import PropTypes from 'prop-types';
import { useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { EditIcon, PlantPhotoWrapper } from './styled';

export default function PlantPhotoUploader({ photoPreview, onPhotoChange }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    // open the file selector
    inputRef.current?.click();
  };

  return (
    <PlantPhotoWrapper>
      {photoPreview ? (
        <img src={photoPreview} alt="Plant preview" />
      ) : (
        <FaUserCircle size={60} />
      )}

      <EditIcon size={1} onClick={handleClick} title="Click to change photo" />

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onPhotoChange}
        // escondendo sem usar display: none
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          opacity: 0,
          overflow: 'hidden',
          pointerEvents: 'all', // importantíssimo
        }}
      />
    </PlantPhotoWrapper>
  );
}

PlantPhotoUploader.propTypes = {
  photoPreview: PropTypes.string,
  onPhotoChange: PropTypes.func.isRequired,
};
