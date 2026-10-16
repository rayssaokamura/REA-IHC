import { useEffect, useState } from "react";

const KEY = "interface-clara-progresso";

function load(): string[] {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

// Guarda no navegador quais aulas foram concluídas.
export function useProgress() {
  const [done, setDone] = useState<string[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(done));
    } catch {
      /* sem armazenamento: segue sem salvar */
    }
  }, [done]);

  const toggle = (slug: string) =>
    setDone((d) => (d.includes(slug) ? d.filter((s) => s !== slug) : [...d, slug]));

  return { done, toggle };
}
