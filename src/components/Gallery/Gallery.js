import React from "react";

import "./Gallery.scss";

const Gallery = props => {

  const { photos, deletePhoto } = props;

  return (
    photos.length > 0 && (
      <div className="gallery">
        {photos.map((photo) => (
          <div className="photoContainer" key={photo.id}>
            <div className="closeButton" onClick={() => deletePhoto(photo.id)}>
              <span className="closeArrow" />
              <span className="closeArrow" />
            </div>
            <img 
              src={photo.photo} 
              alt="thumbnail preview"
            />
          </div>
        ))}
      </div>
    )
  );
}

export default Gallery;
