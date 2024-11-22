'use client';

import React, { useState } from 'react';
import resources from '../../data/resources';

const Resources = () => {
  // État pour gérer la saisie de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour gérer le changement dans la barre de recherche
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filtrer les ressources en fonction de la saisie de recherche
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bibliothèque de Ressources</h1>
      <p style={styles.description}>
        Bienvenue dans la bibliothèque. Parcourez les ressources ci-dessous pour en savoir plus sur les compétences nécessaires à la vie adulte.
      </p>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Recherchez une ressource..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchBar}
      />

      <ul style={styles.resourceList}>
        {filteredResources.map((resource) => (
          <li key={resource.id} style={styles.resourceItem}>
            <h3 style={styles.resourceTitle}>{resource.title}</h3>
            <p style={styles.resourceDescription}>{resource.description}</p>
            <span style={styles.resourceCategory}>Catégorie : {resource.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  searchBar: {
    padding: '0.5rem',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  resourceList: {
    listStyleType: 'none',
    padding: 0,
  },
  resourceItem: {
    border: '1px solid #ddd',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
  },
  resourceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  resourceDescription: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  resourceCategory: {
    fontSize: '0.9rem',
    color: '#555',
  },
};

export default Resources;
