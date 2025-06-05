import React, { useState } from 'react';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaKey, FaEye, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
// import './Login.css'; // À adapter selon votre méthode de styling
import '../styles/Auth.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO : appeler votre API de login ici (firebase, back-end, etc.)
    // Exemple fictif :
    // auth.signInWithEmailAndPassword(email, password)
    //   .then(() => navigate('/dashboard'))
    //   .catch(err => console.error(err));

    console.log({ email, password, rememberMe });
    // rediriger vers la page souhaitée après connexion
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* Colonne gauche (illustration) */}
      <div className="login-illustration">
        {/* Ici, vous pouvez mettre une <img src="/images/illustration-login.svg" alt="Connexion" /> 
            ou tout autre composant d’illustration */}
        <img
          src="./assets/Auth Illustration (1).svg"
          alt="Illustration Connexion"
          className="illustration-image"
        />
      </div>

      {/* Colonne droite (formulaire) */}
      <div className="login-form-wrapper">
        <h2 className="login-title">
          Bienvenue sur <span className="brand-name">Sentinelle AI</span>
        </h2>

        <form className="login-form" onSubmit={handleSubmit}>
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

          {/* Remember me & Mot de passe oublié */}
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              Se souvenir de moi
            </label>
            <Link to="/forgot-password" className="forgot-password-link">
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Bouton de connexion */}
          <button type="submit" className="btn-primary login-btn">
            Se connecter
          </button>
        </form>

        {/* Lien vers l’enregistrement */}
        <p className="no-account">
          Pas encore de compte ?{' '}
          <Link to="/register" className="link-register">
            S’enregistrer
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

export default Login;
