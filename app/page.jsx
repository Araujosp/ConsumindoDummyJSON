"use client";

import { useEffect, useState } from "react";
import CardUsuario from "./components/CardUsuario";

export default function Home() {
  const [listaUsers, setListaUsers] = useState([]);
  const [msgErro, setMsgErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuários");
        return res.json();
      })
      .then((data) => {
        setListaUsers(data.users);
        setMsgErro("");
      })
      .catch((erro) => {
        setMsgErro(erro.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="pagina">
      <header className="cabecalho">
        <h1>API DummyJSON</h1>
        <p>Usuários consumidos através da API DummyJSON</p>
      </header>

      {msgErro !== "" && <p className="erro">Erro: {msgErro}</p>}

      {loading ? (
        <div className="carregando">Carregando usuários...</div>
      ) : listaUsers.length > 0 ? (
        <div className="usuarios-container">
          {listaUsers.map((user) => (
            <CardUsuario key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="sem-usuarios">
          Sem usuários por enquanto!!
          <br />
          Tente novamente mais tarde...
        </div>
      )}
    </main>
  );
}