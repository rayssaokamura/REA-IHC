// Vídeos e materiais de cada aula. Para publicar um vídeo, preencha "videoUrl"
// com um link do YouTube ou um arquivo .mp4. Legendas: "captionsUrl" (.vtt).
export interface ModuleMedia {
  videoUrl?: string;
  captionsUrl?: string;
  transcript?: string;
  materials?: { label: string; url: string }[];
  exercises?: string[];
}

export const MEDIA: Record<string, ModuleMedia> = {
  "cores-e-contraste": {
    materials: [
      { label: "WCAG 2.2 — Recomendação do W3C", url: "https://www.w3.org/TR/WCAG22/" },
      { label: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" },
    ],
  },
  "boa-interface": {
    materials: [
      { label: "10 Heurísticas de Nielsen", url: "https://www.softdesign.com.br/blog/heuristicas-de-nielsen/" },
    ],
  },
  "botoes-e-feedback": {
    materials: [
      { label: "MDN — ARIA", url: "https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA?" },
    ],
  },
  acessibilidade: {
    materials: [
      { label: "eMAG — Modelo de Acessibilidade em Governo Eletrônico", url: "https://emag.governoeletronico.gov.br/" },
      { label: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/" },
    ],
  },
  tipografia: {
    materials: [{ label: "MDN — clamp()", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" }],
  },
};

// Link do projeto publicado no GitHub Pages (deixe vazio até ter o link).
export const FINAL_PROJECT_URL = "";

export const getMedia = (slug: string): ModuleMedia => MEDIA[slug] ?? {};
