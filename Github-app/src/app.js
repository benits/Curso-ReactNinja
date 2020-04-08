"use strict";
import React from "react";

const App = () => (
  <div>
    <div className="search">
      <input type="search" placeholder="Digite o nome de usuário no GitHub" />
    </div>

    <div className="user-info">
      <img
        src="https://avatars1.githubusercontent.com/u/39008435?v=4"
        alt="user avatar"
      />
      <h2>
        <a href="https://github.com/benits">Matheus Benites</a>
      </h2>

      <ul className="repos-info">
        <li>Repositórios: 32</li>
        <li>Seguidores: 32</li>
        <li>Seguindo: 32</li>
      </ul>

      <div className="actions">
        <button>Ver Repositórios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className="repos">
        <h2>Repositórios</h2>
        <ul>
          <li>
            <a href="">Nome do Repositório</a>
          </li>
          <li>
            <a href="">Nome do Repositório</a>
          </li>
        </ul>
      </div>

      <div className="starred">
        <h2>Favoritos</h2>
        <ul>
          <li>
            <a href="">Nome do favorito</a>
          </li>
          <li>
            <a href="">Nome do favorito</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default App;
