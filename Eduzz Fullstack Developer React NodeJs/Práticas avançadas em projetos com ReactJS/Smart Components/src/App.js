import React, { useState } from 'react';
import { PhotosGallery } from './Components';

function App() {

  const photos = [
    'https://placeimg.com/140/60/people',
    'https://placeimg.com/140/60/animals',
    'https://placeimg.com/140/60/nature',
    'https://placeimg.com/140/60/any'
  ];

  return (
    <>
      <h1>Galeria de fotos</h1>
      <PhotosGallery 
        photos={photos}
      />
    </>
  ); 
}

export default App;
