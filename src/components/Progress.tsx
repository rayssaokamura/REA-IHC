export default function Progress({ done, total }: { done: number; total: number }) {
  return (
    <div className="progress">
      <progress value={done} max={total} aria-label="Progresso geral" />
      <span>{done} de {total} aulas concluídas</span>
      <small>Seu progresso fica salvo só neste navegador.</small>
    </div>
  );
}
