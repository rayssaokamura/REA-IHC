import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Activity from "../components/Activity";
import Progress from "../components/Progress";
import Video from "../components/Video";
import { MODULES } from "../data";
import { getMedia } from "../media";
import { useProgress } from "../progress";

function Pending() {
  return <p className="muted-box">Material em preparação.</p>;
}

export default function Lesson() {
  const { slug } = useParams();
  const { done, toggle } = useProgress();
  const index = MODULES.findIndex((m) => m.slug === slug);

  // volta ao topo ao trocar de aula
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (index === -1) {
    return <div className="container narrow page"><p>Aula não encontrada. <Link to="/">Voltar ao início</Link></p></div>;
  }

  const m = MODULES[index]!;
  const media = getMedia(m.slug);
  const prev = MODULES[index - 1];
  const next = MODULES[index + 1];
  const concluida = done.includes(m.slug);

  return (
    <article>
      <header className="lesson-head">
        <div className="container narrow">
          <nav aria-label="Você está em" className="crumbs">
            <Link to="/">Início</Link> / <span aria-current="page">Módulo {m.number}</span>
          </nav>
          <p className="tag">Módulo {m.number}</p>
          <h1>{m.title}</h1>
          <p className="lead">{m.intro}</p>
          <div className="chips">
            <span className="chip">Vídeo de {m.videoMin} min</span>
            <span className="chip">Estudo estimado: {m.studyMin} min</span>
          </div>
        </div>
      </header>

      <div className="container narrow page">
      <Video src={media.videoUrl} captions={media.captionsUrl} title={m.title} />
      {media.videoUrl && !media.captionsUrl && <p><small>Legendas em preparação.</small></p>}

      <h2>Objetivos de aprendizagem</h2>
      <ul>{m.objectives.map((o) => <li key={o}>{o}</li>)}</ul>

      <h2>Conteúdo da aula</h2>
      {m.sections.map((s) => (
        <section key={s.heading}>
          <h3>{s.heading}</h3>
          <p>{s.body}</p>
        </section>
      ))}

      <h2>Exemplos práticos</h2>
      <div className="compare">
        <div className="bad">
          <h3>✕ {m.comparison.bad.label}</h3>
          <ul>{m.comparison.bad.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="good">
          <h3>✓ {m.comparison.good.label}</h3>
          <ul>{m.comparison.good.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
      <div className="note">
        <strong>Conceito importante: {m.keyConcept.term}</strong>
        <p>{m.keyConcept.text}</p>
      </div>

      <h2>Atividade</h2>
      {/* key reinicia a atividade ao trocar de aula */}
      <Activity key={m.slug} activity={m.activity} />

      <h2>Transcrição</h2>
      {media.transcript ? (
        <details className="card">
          <summary>Ler transcrição completa</summary>
          <p style={{ whiteSpace: "pre-line" }}>{media.transcript}</p>
        </details>
      ) : <Pending />}

      <h2>Materiais complementares</h2>
      {media.materials?.length ? (
        <ul>
          {media.materials.map((x) => (
            <li key={x.url}>
              <a href={x.url} target="_blank" rel="noreferrer">
                {x.label}<span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      ) : <Pending />}

      <h2>Exercícios opcionais</h2>
      {media.exercises?.length ? <ol>{media.exercises.map((e) => <li key={e}>{e}</li>)}</ol> : <Pending />}

      {m.number === 10 && <p><Link to="/projeto" className="btn">Ir para o projeto prático</Link></p>}

            <button type="button" className="btn" aria-pressed={concluida} onClick={() => toggle(m.slug)}>
        {concluida ? "✓ Aula concluída (clique para desmarcar)" : "Marcar como concluída"}
      </button>
      <Progress done={MODULES.filter((x) => done.includes(x.slug)).length} total={MODULES.length} />

      <nav className="pager" aria-label="Navegação entre aulas">
        {prev ? <Link to={`/aula/${prev.slug}`}><small>Anterior</small>{prev.number}. {prev.title}</Link> : <span />}
        {next ? <Link to={`/aula/${next.slug}`} className="pager-next"><small>Próxima</small>{next.number}. {next.title}</Link> : <span />}
      </nav>
      </div>
    </article>
  );
}
