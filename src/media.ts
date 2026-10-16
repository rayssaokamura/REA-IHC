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
  "boa-interface": {
    materials: [
      { label: "Heurísticas de Nielsen: o que são e como aprimoram interfaces", url: "https://www.softdesign.com.br/blog/heuristicas-de-nielsen/" },
    ],
  },
};

// Link do projeto publicado no GitHub Pages (deixe vazio até ter o link).
export const FINAL_PROJECT_URL = "";

export const getMedia = (slug: string): ModuleMedia => MEDIA[slug] ?? {};
