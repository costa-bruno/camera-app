import React, { useState, useEffect } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import "./App.scss";
import Buttons from './components/Buttons/Buttons';
import Gallery from './components/Gallery/Gallery';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
 
function App (props) {

  const initialError = {
    hasError: false,
    errorMessage: ""
  };

  const [error, setError] = useState(initialError);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    console.log(photos)
  }, [photos]);
  
  const handleTakePhoto = (dataUri) => {
    console.log('Photo taken');
    console.log(dataUri);
    const _photo = {
      photo: dataUri,
      id: new Date()
    };

    setPhotos([
      ...photos,
      {
        photo: _photo.photo,
        id: _photo.id
      }
    ]);
  };

  const handleError = (cameraError) => {
    console.log(cameraError);
    !error.hasError && setError({
      hasError: true,
      errorMessage: "Você precisa garantir permissão de acesso à câmera para continuar."
    });
  };

  const deletePhoto = photoId => {
    const _photos = photos.filter(photo => photo.id !== photoId);
    setPhotos(_photos);
  };
 
  return (
    <div className="app">
      <ErrorScreen error={error} />
      <Camera
        onCameraStart={console.log("Status: Camera started")}
        isFullscreen={true}
        onCameraError={(cameraError) => {handleError(cameraError)}}
        onTakePhoto={(dataUri) => {handleTakePhoto(dataUri)}}
        sizeFactor={1}
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        isImageMirror = {false}
        imageType = {IMAGE_TYPES.JPG}
      />
      <Gallery 
        photos={photos} 
        deletePhoto={deletePhoto}
      />
      <Buttons photosLength={photos.length} />
    </div>
  );
}

export default App;
