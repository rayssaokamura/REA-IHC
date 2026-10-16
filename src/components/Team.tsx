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
    <section className="section" aria-labelledby="equipe">
      <div className="container">
        <h2 id="equipe">Quem faz o Interface Clara</h2>
        <p className="lead">Pessoas que planejaram, gravaram e construíram este recurso para a comunidade.</p>
        <ul className="team">
          {TEAM.map((m) => (
            <li key={m.name}>
              <Photo m={m} />
              <strong>{m.name}</strong>
              {m.role && <span>{m.role}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
