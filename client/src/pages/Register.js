
import api from '../api';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaKey, FaBuilding, FaEye, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import '../styles/Auth.css'; // pour le style

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : appeler votre API d'enregistrement ici (firebase, back-end, etc.)
    // Exemple fictif :
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then((userCred) => {
    //     // éventuellement ajouter fullName + institution dans Firestore
    //     navigate('/dashboard');
    //   })
    //   .catch(err => console.error(err));

    console.log({ fullName, email, password, institution });
    // redirection après enregistrement (par exemple vers la page de connexion ou le dashboard)
    navigate('/login');
  };

  return (
    <div className="register-container">
      {/* Colonne gauche (illustration) */}
      <div className="register-illustration">
        {/* Vous pouvez replacer par votre image/SVG */}
        <img
          src="./assets/Auth Illustration (1).svg"
          alt="Illustration Inscription"
          className="illustration-image"
        />
      </div>

      {/* Colonne droite (formulaire) */}
      <div className="register-form-wrapper">
        <h2 className="register-title">
          Bienvenue sur <span className="brand-name">Sentinelle AI</span>
        </h2>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Nom complet */}
          <div className="form-group">
            <label htmlFor="fullName" className="sr-only">Nom</label>
            <div className="input-icon-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="fullName"
                placeholder="Nom Prénom"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="input-icon-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Exemple@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="input-icon-wrapper">
              <FaKey className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                <FaEye />
              </button>
            </div>
          </div>

          {/* Nom de l’institution */}
          <div className="form-group">
            <label htmlFor="institution" className="sr-only">Nom de l’institution</label>
            <div className="input-icon-wrapper">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                id="institution"
                placeholder="Nom de l'institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Bouton S’inscrire */}
          <button type="submit" className="btn-primary register-btn">
            S’inscrire
          </button>
        </form>

        {/* Lien vers la connexion */}
        <p className="already-account">
          Vous avez déjà de compte ?{' '}
          <Link to="/login" className="link-login">
            Se connecter
          </Link>
        </p>

        {/* Séparateur OU */}
        <div className="separator">
          <span className="line"></span>
          <span className="or-text">OU</span>
          <span className="line"></span>
        </div>

        {/* Boutons sociaux */}
        <div className="social-buttons">
          <button className="btn-social google-btn">
            <FaGoogle className="social-icon" /> Google
          </button>
          <button className="btn-social facebook-btn">
            <FaFacebookF className="social-icon" /> Facebook
          </button>
          <button className="btn-social apple-btn">
            <FaApple className="social-icon" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
