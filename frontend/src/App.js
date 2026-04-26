import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("Chargement...");

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => setData("Erreur de connexion au backend"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Projet Test CI/CD</h1>
      <p>Réponse du serveur : <strong>{data}</strong></p>
    </div>
  );
}

export default App;