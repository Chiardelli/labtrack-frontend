// pages/Dashboard.js
import React, { useState } from "react";
import "../styles/main.css";

function Dashboard() {
  const [selectedReagent, setSelectedReagent] = useState(null);

  const budgets = [
    {
      title: "Reagente A",
      total: 5000,
      usado: 3000,
      dataInicio: "01-05-2025",
      dataFim: "31-12-2025",
      tags: ["Inflamável", "Corrosivo"]
    },
    {
      title: "Reagente B",
      total: 12000,
      usado: 4000,
      dataInicio: "01-05-2025",
      dataFim: "31-12-2025",
      tags: ["Controle Especial"]
    },
    {
      title: "Reagente C",
      total: 7000,
      usado: 1000,
      dataInicio: "01-05-2025",
      dataFim: "31-12-2025",
      tags: ["Frágil", "Precisa de refrigeração"]
    }
  ];

  const handleReagentClick = (reagent) => {
    setSelectedReagent(reagent);
  };

  const closeModal = () => {
    setSelectedReagent(null);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Controle de Frascos</h1>
      {budgets.map((b, i) => {
        const porcentagem = Math.round((b.usado / b.total) * 100);
        return (
          <div key={i} className="budget-card" onClick={() => handleReagentClick(b)}>
            <div className="budget-header">
              <h2>${b.total.toLocaleString()} - {b.title}</h2>
              <span className="progress-label">{porcentagem}% usado</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${porcentagem}%` }}></div>
            </div>
            <div className="budget-info">
              <div>
                <strong>Usado:</strong> {b.usado.toLocaleString()}
              </div>
              <div>
                <strong>De:</strong> {b.dataInicio} 
              </div>
              <div>
                <strong>Até:</strong> {b.dataFim}
              </div>
            </div>
            <div className="tags">
              {b.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        );
      })}

      {selectedReagent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedReagent.title}</h2>
            <p><strong>Total:</strong>   {selectedReagent.total}</p>
            <p><strong>Usado:</strong> {selectedReagent.usado}</p>
            <p><strong>Data de Início:</strong> {selectedReagent.dataInicio}</p>
            <p><strong>Data de Fim:</strong> {selectedReagent.dataFim}</p>
            <p><strong>Tags:</strong> {selectedReagent.tags.join(", ")}</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
