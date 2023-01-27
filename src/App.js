import React from 'react';
import './App.css';
import profileImage from  "./img/nacho.png"

function App() {
  return (
    <div className="App">
      <h1>Nachorz React app</h1>
      <h2>Author: nachorz</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
