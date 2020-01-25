import React, { useState, useEffect } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import "./App.scss";
 
function App (props) {

  const initialError = {
    hasError: false,
    errorMessage: ""
  }

  const initialPreview = {
    hasPreview: false,
    previewUrl: ""
  }

  const [error, setError] = useState(initialError);
  const [photos, setPhotos] = useState([]);
  const [preview, setPreview] = useState(initialPreview);

  useEffect(() => {
    console.log(error);
  }, [error])

  useEffect(() => {
    console.log(photos)
  }, [photos])

  useEffect(() => {
    console.log(preview)
  }, [preview])
  
  const handleTakePhoto = (dataUri) => {
    console.log('Foto tirada');
    console.log(dataUri);
    setPhotos([
      ...photos,
      dataUri
    ]);
  }

  const handleError = (cameraError) => {
    console.log(cameraError);
    !error.hasError && setError({
      hasError: true,
      errorMessage: "Você precisa garantir permissão de acesso à câmera para continuar."
    });
  }

  const handlePreview = (photoToPreview) => {
    setPreview({
      ...preview,
      showPreview: true,
      previewUrl: photoToPreview
    });
  }

  const toggleShowPreview = () => {
    setPreview({
      ...preview,
      showPreview: !preview.showPreview,
      previewUrl: ""
    });
  }
 
  return (
    <div className="app">
      {photos.length > 0 && (
        <div className="gallery">
          {photos.map((photo, index) => (
            <img 
              src={photo} 
              alt="thumbnail preview"
              key={index}
              onClick={() => handlePreview(photo)}
            />
          ))}
        </div>
      )}
      {preview.showPreview && (
        <div className="modalPreview">
          <div className="previewContainer">
            <div className="closeButton" onClick={() => toggleShowPreview()}>
              <span className="closeArrow" />
              <span className="closeArrow" />
            </div>

            <img 
              src={preview.previewUrl}
              alt="thumbnail preview"
            />
          </div>
        </div>
      )}
      <Camera
        onCameraStart={console.log("STATUS::: Camera iniciada")}
        idealResolution={{width: 360, height: 640}}
        onCameraError={(cameraError) => {handleError(cameraError)}}
        onTakePhoto={(dataUri) => {handleTakePhoto(dataUri)}}
        sizeFactor={1}
      />
      {error.hasError && (
        <div className="errorScreen">
          <span>{error.errorMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
