import { useState } from "react";
import type { Activity as ActivityType } from "../data";

export default function Activity({ activity }: { activity: ActivityType }) {
  return activity.kind === "quiz" ? <Quiz a={activity} /> : <Checklist a={activity} />;
}

function Quiz({ a }: { a: Extract<ActivityType, { kind: "quiz" }> }) {
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const picked = choice === null ? undefined : a.options[choice];

  let message = "";
  if (checked) {
    if (!picked) message = "Selecione uma opção antes de verificar.";
    else message = `${picked.correct ? "Resposta adequada." : "Ainda não."} ${picked.explanation}`;
  }

  return (
    <form className="card" onSubmit={(e) => { e.preventDefault(); setChecked(true); }}>
      <fieldset>
        <legend>{a.prompt}</legend>
        {a.options.map((o, i) => (
          <label key={o.text} className="option">
            <input
              type="radio"
              name="quiz"
              checked={choice === i}
              onChange={() => { setChoice(i); setChecked(false); }}
            />
            {o.text}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="btn">Verificar resposta</button>
      <p aria-live="polite" className="message">{message}</p>
    </form>
  );
}

function Checklist({ a }: { a: Extract<ActivityType, { kind: "checklist" }> }) {
  const [marked, setMarked] = useState<string[]>([]);
  const toggle = (item: string) =>
    setMarked((m) => (m.includes(item) ? m.filter((x) => x !== item) : [...m, item]));

  return (
    <fieldset className="card">
      <legend>{a.prompt}</legend>
      {a.items.map((item) => (
        <label key={item} className="option">
          <input type="checkbox" checked={marked.includes(item)} onChange={() => toggle(item)} />
          {item}
        </label>
      ))}
      <p aria-live="polite" className="message">
        {marked.length} de {a.items.length} itens marcados.
        {marked.length > 0 && marked.length < a.items.length && " Os itens não marcados indicam pontos de melhoria."}
        {marked.length === a.items.length && " Ótimo: todos os pontos foram atendidos."}
      </p>
    </fieldset>
  );
}
