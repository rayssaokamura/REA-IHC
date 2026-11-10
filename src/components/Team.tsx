import { useState } from "react";
import { TEAM, type Member } from "../team";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]![0] : "";
  return (first + last).toUpperCase();
}

function Photo({ m }: { m: Member }) {
  const [broken, setBroken] = useState(false);
  if (m.photo && !broken) {
    return (
      <img
        className="photo"
        src={`${import.meta.env.BASE_URL}equipe/${m.photo}`}
        alt={`Foto de ${m.name}`}
        loading="lazy"
        onError={() => setBroken(true)}
      />
    );
  }
  return <span className="photo photo-initials" aria-hidden="true">{initials(m.name)}</span>;
}

export default function Team() {
  return (
    <section className="section team-section" id="equipe" aria-labelledby="titulo-equipe">
      <div className="container">
        <p className="tag">POR TRÁS DO PROJETO</p>
        <h2 id="titulo-equipe">Quem faz o Interface Clara</h2>
        <p className="lead">Conheça as pessoas que planejaram e construíram este recurso para a comunidade.</p>
        <ul className="team">
          {TEAM.map((m, index) => (
            <li key={m.name} className={`team-card team-card-${index + 1}`}>
              <div className="team-photo-wrap">
                <span className="team-index" aria-hidden="true">0{index + 1}</span>
                <Photo m={m} />
              </div>
              <div className="team-card-info">
                <span className="team-kicker">EQUIPE DO PROJETO</span>
                <strong>{m.name}</strong>
                {m.role && <span className="team-role">{m.role}</span>}
                <span className="team-underline" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
