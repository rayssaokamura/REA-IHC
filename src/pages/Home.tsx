import { Link } from "react-router-dom";
import Flower from "../components/Flower";
import Progress from "../components/Progress";
import Team from "../components/Team";
import { COURSE, MODULES, UPCOMING_MODULES } from "../data";
import { useProgress } from "../progress";

export default function Home() {
  const { done } = useProgress();
  const concluidas = MODULES.filter((m) => done.includes(m.slug)).length;
  const proxima = MODULES.find((m) => !done.includes(m.slug)) ?? MODULES[0]!;
  const cards: {
    number: number;
    slug: string;
    title: string;
    short: string;
    available: boolean;
    videoMin?: number;
  }[] = [
    ...MODULES.map((m) => ({ ...m, available: true })),
    ...UPCOMING_MODULES.map((m) => ({ ...m, available: false })),
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">{COURSE.tagline}</p>
            <h1>Interfaces que as pessoas entendem e conseguem usar</h1>
            <p className="lead">
              Explore os três primeiros módulos sobre Interação Humano-Computador, boas práticas de design e organização visual. Gratuito e aberto a toda a comunidade.
            </p>
            <div className="actions">
              <Link to={`/aula/${proxima.slug}`} className="btn">
                {concluidas > 0 ? "Continuar de onde parei" : "Começar a aprender"}
              </Link>
              <a href="#modulos" className="btn btn-ghost">Ver módulos</a>
            </div>
          </div>

          <div className="hero-art">
            <Flower />
          </div>
        </div>
      </section>

      <section className="section" id="modulos" aria-labelledby="titulo-modulos">
        <div className="container">
          <h2 id="titulo-modulos">Módulos do curso</h2>
          <Progress done={concluidas} total={MODULES.length} />
          <ol className="modules">
            {cards.map((m) => (
              <li key={m.slug} className={done.includes(m.slug) ? "module is-done" : "module"}>
                <span className="module-num" aria-hidden="true">{m.number}</span>
                <h3>
                  {m.available
                    ? <Link to={`/aula/${m.slug}`}>{m.title}</Link>
                    : <span className="module-title-disabled">{m.title}</span>}
                </h3>
                <p>{m.short}</p>
                <div className="chips">
                  {m.available ? (
                    <>
                      <span className="chip">Vídeo de {m.videoMin} min</span>
                      {done.includes(m.slug) && <span className="chip chip-done">✓ Concluída</span>}
                    </>
                  ) : <span className="chip chip-upcoming">Em breve</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Team />
    </>
  );
}
