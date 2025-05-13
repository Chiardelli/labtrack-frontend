import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaCog, FaPlusCircle, FaUser } from "react-icons/fa"; // Importando os ícones
import "../styles/main.css";

function Sidebar() {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>LabTrack</h2>
            </div>
            <nav className="sidebar-nav">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <FaHome size={24} /> Dashboard
                </Link>
                <Link to="/cadastro-reagente" className={location.pathname === "/cadastro-reagente" ? "active" : ""}>
                    <FaPlusCircle size={24} /> Cadastrar Reagente
                </Link>
                <Link to="/analytics" className={location.pathname === "/analytics" ? "active" : ""}>
                    <FaChartBar size={24} /> Analytics
                </Link>
                <Link to="/settings" className={location.pathname === "/settings" ? "active" : ""}>
                    <FaCog size={24} /> Configurações
                </Link>
                <Link to="/user" className={location.pathname === "/user" ? "active" : ""}>
                    <FaUser size={24} /> Perfil
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
