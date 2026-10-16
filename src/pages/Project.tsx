import { useState } from "react";
import { FINAL_PROJECT_URL } from "../media";

const OPTIONS = ["Insatisfeito", "Neutro", "Satisfeito"];

const GUIDE = [
  { title: "HTML", items: ["Use <form>, <fieldset> e <legend>.", "Três <input type=\"radio\"> com o mesmo name.", "Cada opção com <label> associado.", "Uma <div aria-live=\"polite\"> para mensagens."] },
  { title: "CSS", items: ["Contraste mínimo de 4,5:1 no texto.", "Estados :hover e :focus-visible visíveis.", "Área de toque confortável (acima de 24 × 24 px).", "Não indique a seleção apenas pela cor."] },
  { title: "JavaScript", items: ["Intercepte o evento submit.", "Valide se uma opção foi escolhida.", "Mostre o erro na região aria-live.", "No sucesso: “Obrigado pelo seu feedback”."] },
];

const SNIPPET = `<form id="feedback" novalidate>
  <fieldset>
    <legend>Como foi sua experiência?</legend>
    <label><input type="radio" name="satisfacao" value="insatisfeito"> Insatisfeito</label>
    <label><input type="radio" name="satisfacao" value="neutro"> Neutro</label>
    <label><input type="radio" name="satisfacao" value="satisfeito"> Satisfeito</label>
  </fieldset>
  <button type="submit">Enviar feedback</button>
  <div id="msg" aria-live="polite" aria-atomic="true"></div>
</form>

<script>
  const form = document.getElementById("feedback");
  const msg = document.getElementById("msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const escolha = form.querySelector('input[name="satisfacao"]:checked');
    msg.textContent = escolha
      ? "Obrigado pelo seu feedback"
      : "Erro: selecione uma opção antes de enviar.";
  });
</script>`;

export default function Project() {
  const [choice, setChoice] = useState("");
  const [message, setMessage] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    setMessage(choice ? "Obrigado pelo seu feedback" : "Erro: selecione uma opção antes de enviar.");
  }

  return (
    <>
      <header className="lesson-head">
        <div className="container narrow">
          <p className="tag">Módulo 10</p>
          <h1>Projeto: painel de satisfação do cliente</h1>
          <p className="lead">
            O desafio: criar um formulário que qualquer pessoa consiga usar, com mouse, toque, teclado ou leitor de tela,
        para dizer se ficou insatisfeita, neutra ou satisfeita.
          </p>
        </div>
      </header>

      <div className="container narrow page">
      <h2>Resultado esperado</h2>
      <p>Este painel funciona de verdade. Tente enviar sem escolher e depois escolha uma opção com Tab e as setas.</p>
      <form className="card" onSubmit={send}>
        <fieldset>
          <legend>Como foi sua experiência?</legend>
          {OPTIONS.map((text) => (
            <label key={text} className="option">
              <input
                type="radio"
                name="satisfacao"
                value={text}
                checked={choice === text}
                onChange={() => { setChoice(text); setMessage(""); }}
              />
              {text}
            </label>
          ))}
        </fieldset>
        <button type="submit" className="btn">Enviar feedback</button>
        <p aria-live="polite" className="message">{message}</p>
      </form>

      <h2>Orientações</h2>
      <div className="grid3">
        {GUIDE.map((g) => (
          <div key={g.title} className="card">
            <h3>{g.title}</h3>
            <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>

      <h2>Ponto de partida</h2>
      <pre tabIndex={0} aria-label="Exemplo de código HTML e JavaScript"><code>{SNIPPET}</code></pre>

      <h2>Projeto publicado</h2>
      {FINAL_PROJECT_URL ? (
        <a href={FINAL_PROJECT_URL} target="_blank" rel="noreferrer" className="btn">
          Ver no GitHub Pages<span className="sr-only"> (abre em nova aba)</span>
        </a>
      ) : <p className="muted-box">O link para o projeto no GitHub Pages será adicionado em breve.</p>}
      </div>
    </>
  );
}
