import React, { useState } from "react";
import "./Header.less";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  React.useEffect(() => {
    const root = document.body;
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(`${theme}-mode`);
  }, [theme]);

  return (
    <header className="header">
      <nav className="nav">
        <ul className={mobileOpen ? "open" : ""}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#products">Productos</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#cart">Carrito</a>
          </li>
        </ul>
        <button
          className={`burger ${mobileOpen ? "open" : ""}`}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className="header-actions">
        <button
          className="mode-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>
        <a href="#login" className="login-link">
          Iniciar sesión
        </a>
      </div>
    </header>
  );
};

export default Header;
