// src/pages/Frascos.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Frascos() {
  const [frascos, setFrascos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFrascos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/frascos');
        if (response.ok) {
          const data = await response.json();
          setFrascos(data);
        } else {
          console.error('Erro ao carregar frascos');
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFrascos();
  }, []);

  const filteredFrascos = frascos.filter(frasco =>
    frasco.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    frasco.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
    frasco.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este frasco?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/frascos/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setFrascos(frascos.filter(frasco => frasco.id !== id));
        } else {
          alert('Erro ao excluir frasco');
        }
      } catch (error) {
        alert('Erro de conexão: ' + error.message);
      }
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Frascos Cadastrados</h1>
        <div className="actions">
          <input
            type="text"
            placeholder="Buscar frascos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Link to="/cadastro" className="btn-primary">
            Novo Frasco
          </Link>
        </div>
      </div>

      <div className="frasco-grid">
        {filteredFrascos.length > 0 ? (
          filteredFrascos.map(frasco => (
            <div key={frasco.id} className="frasco-card">
              <div className="frasco-header">
                <h3>{frasco.nome}</h3>
                <div className="frasco-actions">
                  <Link to={`/frascos/${frasco.id}`} className="btn-edit">
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(frasco.id)}
                    className="btn-delete"
                  >
                    Excluir
                  </button>
                </div>
              </div>
              <div className="frasco-details">
                <p><strong>Quantidade:</strong> {frasco.quantidade} {frasco.unidade}</p>
                <p><strong>Concentração:</strong> {frasco.concentracao || 'N/A'}</p>
                <p><strong>Validade:</strong> {new Date(frasco.validade).toLocaleDateString()}</p>
                <p><strong>Local:</strong> {frasco.local}</p>
                <div className="tags-container">
                  {frasco.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            Nenhum frasco encontrado. <Link to="/cadastro">Cadastre um novo frasco</Link>.
          </div>
        )}
      </div>
    </div>
  );
}

export default Frascos;