import React, { useState } from 'react';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaKey, FaEye, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import '../styles/Auth.css'; 

const workspaces = [
  { id: 0, name: 'Entreprise0.sarl' },
  { id: 1, name: 'Entreprise1.sarl' },
  { id: 3, name: 'Entreprise3.sarl' },
];

const Workspace = () => {
  const handleSelect = (name) => {
    alert(`Espace sélectionné : ${name}`);
    // Rediriger vers le tableau de bord ou charger les données
  };

  const handleCreate = () => {
    alert('Créer un espace de travail');
    // Rediriger ou ouvrir un formulaire
  };

  const handleDelete = () => {
    alert('Supprimer un espace de travail');
    // Ajouter la logique de suppression
  };

  return (
    <div className="login-container">
      <div className="register-illustration">
        <img
          src="./assets/Auth Illustration (1).svg"
          alt="Illustration Inscription"
          className="illustration-image"
        />
      </div>
      <div className="login-form-wrapper">
        <h2 className="login-title">
          Bon retour <span className="brand-name">Maharram !</span>
        </h2>
        <p>Veuillez choisir un espace de travail pour continuer</p>

        <div className="workspace-list">
        {workspaces.map((ws) => (
            <button
            key={ws.id}
            className="workspace-btn"
            onClick={() => handleSelect(ws.name)}
            >
            🏢&nbsp; <strong>{ws.name}</strong>
            </button>
        ))}
        </div>

        <button className="btn-primary" onClick={handleCreate}>
          Créer un espace de travail
        </button>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={handleDelete}
            style={{
              background: 'none',
              border: 'none',
              color: 'red',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
          >
            Supprimer un espace de travail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
