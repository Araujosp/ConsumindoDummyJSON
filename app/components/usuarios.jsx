"use client";

import { useEffect, useState } from "react";
import "./usuarios.css";

export default function Usuarios() {
    const [listaUsers, setListaUsers] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaUsers(data.users);
                setMsgErro("");
            })
            .catch(erro => {
                setMsgErro(erro.message);
            });
    }, []);

    return (
        <main className="pagina">
            <header className="cabecalho">
                <h1>API DummyJSON</h1>
                <p>Usuários consumidos através da API DummyJSON</p>
            </header>

            {msgErro !== "" && (
                <p className="erro">Erro: {msgErro}</p>
            )}

            {listaUsers.length > 0 ? (
                <div className="usuarios-container">
                    {listaUsers.map((user) => {
                        return (
                            <div className="card-usuario" key={user.id}>
                                <img
                                    className="foto-usuario"
                                    src={user.image}
                                    alt={`Foto de ${user.firstName}`}
                                />

                                <h2>
                                    {user.firstName} {user.lastName}
                                </h2>

                                <div className="informacoes">
                                    <p>
                                        <span>E-mail</span>
                                        {user.email}
                                    </p>

                                    <p>
                                        <span>Idade</span>
                                        {user.age} anos
                                    </p>

                                    <p>
                                        <span>Telefone</span>
                                        {user.phone}
                                    </p>

                                    <p>
                                        <span>Gênero</span>
                                        {user.gender}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
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
