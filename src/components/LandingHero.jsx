import React from "react";
import "./LandingHero.css";

const LandingHero = () => (
  <div className="landing-hero">
    <nav className="landing-nav">
      <div className="logo">
        EVA <span className="subtitle">Security System</span>
      </div>
      <ul>
        <li>Soluciones</li>
        <li>Clientes</li>
        <li>Seguridad</li>
        <li>Precios</li>
      </ul>
      <div className="nav-actions">
        <span className="login">Iniciar sesión</span>
        <button className="cta-nav">Habla con nosotros</button>
      </div>
    </nav>
    <div className="hero-content">
      <h1>
        La seguridad del <span className="highlight">futuro</span>, hoy
      </h1>
      <p className="subtitle">
        Cuidá tu hogar con monitoreo inteligente, alertas instantáneas y control remoto
      </p>
      <button className="cta-main">Habla con un asesor, hoy</button>
      <p className="whatsapp">
        Cotizá ahora y respondemos por WhatsApp rápido
      </p>
    </div>
  </div>
);

export default LandingHero;