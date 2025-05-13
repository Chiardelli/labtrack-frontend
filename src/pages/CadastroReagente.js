import React, { useState } from "react";
import "../styles/main.css";

function CadastroReagente() {
  const [nome, setNome] = useState("");
  const [lote, setLote] = useState("");
  const [tipo, setTipo] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdAt = new Date().toISOString(); // formato ISO
    const status = "available";

    const novoReagente = {
      name: nome,
      batch: lote,
      type: tipo,
      quantity: quantidade,
      expiry: dataValidade,
      location: localizacao,
      responsible: responsavel,
      createdAt,
      status,
    };

    console.log(novoReagente);
    // Aqui você pode enviar para o backend ou Firebase
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro de Reagente</h1>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label htmlFor="nome">Nome do Reagente</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lote">Lote</label>
          <input
            type="text"
            id="lote"
            value={lote}
            onChange={(e) => setLote(e.target.value)}
            placeholder="Digite o número do lote"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <input
            type="text"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Ex: Solução, P.A., etc..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="text"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            placeholder="Ex: 500 mL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataValidade">Data de Validade</label>
          <input
            type="date"
            id="dataValidade"
            value={dataValidade}
            onChange={(e) => setDataValidade(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="localizacao">Localização</label>
          <input
            type="text"
            id="localizacao"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Local de armazenamento"
          />
        </div>
        <div className="form-group">
          <label htmlFor="responsavel">Responsável</label>
          <input
            type="text"
            id="responsavel"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            placeholder="Pessoa responsável"
          />
        </div>
        <button type="submit" className="btn-submit">
          Cadastrar Reagente
        </button>
      </form>
    </div>
  );
}

export default CadastroReagente;
