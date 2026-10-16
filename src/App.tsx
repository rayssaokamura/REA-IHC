import { Link, NavLink, Route, Routes } from "react-router-dom";
import { COURSE } from "./data";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip">Pular para o conteúdo</a>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">{COURSE.name}</Link>
          <nav aria-label="Principal">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/projeto">Projeto prático</NavLink>
          </nav>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aula/:slug" element={<Lesson />} />
          <Route path="/projeto" element={<Project />} />
          <Route
            path="*"
            element={<div className="container narrow page"><p>Página não encontrada. <Link to="/">Voltar ao início</Link></p></div>}
          />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h2>Vamos conversar?</h2>
            <p>Tem uma dúvida, uma sugestão ou quer usar o Interface Clara com a sua turma? Escreva para a gente.</p>
          </div>
          <a className="btn btn-accent" href={`mailto:${COURSE.email}`}>{COURSE.email}</a>
        </div>
       
      </footer>
    </>
  );
}
