import "./usuarios.css";

export default function CardUsuario({ user }) {
  return (
    <div className="card-usuario">
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
}