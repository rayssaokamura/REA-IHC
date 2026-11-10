import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Progress from "../components/Progress";
import Team from "../components/Team";
import { COURSE, MODULES } from "../data";
import { useProgress } from "../progress";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#equipe") {
      document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  const { done } = useProgress();
  const concluidas = MODULES.filter((m) => done.includes(m.slug)).length;
  const proxima = MODULES.find((m) => !done.includes(m.slug)) ?? MODULES[0]!;


  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="tag">{COURSE.tagline}</p>
            <h1>Interfaces que as pessoas entendem e conseguem usar</h1>
            <p className="lead">
              Dez módulos contendo videoaulas, texto de apoio e exemplos práticos sobre Interação Humano-Computador,
              boas práticas de design e acessibilidade digital. Gratuito e aberto a toda a comunidade.
            </p>
            <div className="actions">
              <Link to={`/aula/${proxima.slug}`} className="btn">
                {concluidas > 0 ? "Continuar de onde parei" : "Começar a aprender"}
              </Link>
             
            </div>
          </div>


        </div>
      </section>

      <section className="section" id="modulos" aria-labelledby="titulo-modulos">
        <div className="container">
          <h2 id="titulo-modulos">Os 10 módulos</h2>
          <Progress done={concluidas} total={MODULES.length} />
          <ol className="modules">
            {MODULES.map((m) => (
              <li key={m.slug} className={done.includes(m.slug) ? "module is-done" : "module"}>
                <span className="module-num" aria-hidden="true">{m.number}</span>
                <h3><Link to={`/aula/${m.slug}`}>{m.title}</Link></h3>
                <p>{m.short}</p>
                <div className="chips">
                  <span className="chip">Vídeo de {m.videoMin} min</span>
                  {done.includes(m.slug) && <span className="chip chip-done">✓ Concluída</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" aria-labelledby="titulo-projeto">
        <div className="container band-inner">
          <div>
            <h2 id="titulo-projeto">Projeto prático: painel de satisfação</h2>
            <p>Aplique tudo o que aprendeu construindo um formulário acessível, com validação e mensagens claras.</p>
          </div>
          <Link to="/projeto" className="btn btn-accent">Conhecer o desafio</Link>
        </div>
      </section>

      <Team />
    </>
  );
}
