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
  "o-que-e-ihc": {
    videoUrl: "public/videos/modulo1.mp4",
    materials: [
      { label: "NN/g — Usability 101: Introduction to Usability", url: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/" },
      { label: "Interaction Design Foundation — Human-Computer Interaction", url: "https://www.interaction-design.org/literature/topics/human-computer-interaction" },
    ],
  },
  "boa-interface": {
    videoUrl: "public/videos/modulo2.mp4",
    materials: [
      { label: "10 Heurísticas de Nielsen", url: "https://www.softdesign.com.br/blog/heuristicas-de-nielsen/" },
      { label: "NN/g — 10 Usability Heuristics (original, em inglês)", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
    ],
  },
  "hierarquia-visual":{
    videoUrl: "public/videos/modulo3.mp4",
    materials: [
      { label: "NN/g — Visual Hierarchy", url: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/" },
      { label: "NN/g — Gestalt: proximidade", url: "https://www.nngroup.com/articles/gestalt-proximity/" },
      { label: "Laws of UX", url: "https://lawsofux.com/" }
    ]
  },
  "cores-e-contraste": {
    videoUrl: "public/videos/modulo4.mp4",
    materials: [
      { label: "WCAG 2.2 — Recomendação do W3C", url: "https://www.w3.org/TR/WCAG22/" },
      { label: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" },
      { label: "W3C — Entendendo o contraste mínimo", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" },
    ],
  },
  tipografia: {
    videoUrl: "public/videos/modulo5.mp4",
    materials: [
      { label: "MDN — clamp()", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" },
      { label: "Atkinson Hyperlegible — Braille Institute", url: "https://www.brailleinstitute.org/freefont/" },
      { label: "Google Fonts Knowledge", url: "https://fonts.google.com/knowledge" },
    ],
  },
  "botoes-e-feedback": {
    videoUrl: "public/videos/modulo6.mp4",
    materials: [
      { label: "MDN — ARIA", url: "https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA?" },
      { label: "W3C — Tamanho mínimo de alvo (WCAG 2.2)", url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html" },
      { label: "NN/g — Response Times: The 3 Important Limits", url: "https://www.nngroup.com/articles/response-times-3-important-limits/" },
    ],
  },
  "navegacao": {
    videoUrl: "public/videos/modulo7.mp4",
    materials: [
      { label: "NN/g — Information Foraging", url: "https://www.nngroup.com/articles/information-foraging/" },
      { label: "W3C — Navegação por teclado", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
    ],
  },
  acessibilidade: {
    videoUrl: "public/videos/modulo8.mp4",
    materials: [
      { label: "eMAG — Modelo de Acessibilidade em Governo Eletrônico", url: "https://emag.governoeletronico.gov.br/" },
      { label: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/" },
      { label: "W3C — Introdução à acessibilidade na web", url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" },
      { label: "WCAG 2.2 — Referência rápida", url: "https://www.w3.org/WAI/WCAG22/quickref/" },
    ],
  },
  "dark-patterns": {
    videoUrl: "public/videos/modulo9.mp4",
    materials: [
      { label: "Deceptive Design (antigo Dark Patterns) — Harry Brignull", url: "https://www.deceptive.design/" },
    ],
  },
  "construindo-uma-interface": {
    videoUrl: "public/videos/modulo10.mp4",
    materials: [
      { label: "W3C WAI — Tutorial de formulários acessíveis", url: "https://www.w3.org/WAI/tutorials/forms/" },
      { label: "MDN — Elemento <label>", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label" },
    ]
  },
};

// Link do projeto publicado no GitHub Pages (deixe vazio até ter o link).
export const FINAL_PROJECT_URL = "";

export const getMedia = (slug: string): ModuleMedia => MEDIA[slug] ?? {};
