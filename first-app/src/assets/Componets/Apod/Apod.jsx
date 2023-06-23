import  { useState, useEffect } from 'react';
import './Apod.css'


function NasaImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(data => setImageUrl(data.url))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="card">
    {imageUrl && <img className="card-img" src={imageUrl} alt="NASA APOD" />}
  </div>
  );
}

export default NasaImage;