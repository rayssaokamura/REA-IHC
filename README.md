<<<<<<< HEAD
# Interface Clara — Recurso Educacional Aberto (REA)

Curso aberto de IHC, UI/UX e Acessibilidade Digital: 10 módulos com videoaula,
texto, exemplos práticos, atividade e materiais, mais um projeto final.

```sh
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ (pode publicar no GitHub Pages)
```

## Onde editar

- `src/media.ts`: **vídeos**, legendas, transcrição, materiais e exercícios de cada aula.
  Exemplo:
  ```ts
  "o-que-e-ihc": {
    videoUrl: "https://youtu.be/XXXXXXXXXXX",   // YouTube ou arquivo .mp4
    captionsUrl: "/legendas/aula1.vtt",         // só para .mp4
    transcript: "Texto da transcrição...",
    exercises: ["Exercício 1...", "Exercício 2..."],
  },
  ```
  O link do projeto publicado fica em `FINAL_PROJECT_URL` (mesmo arquivo).
- `src/data.ts`: textos das aulas, comparações, conceitos e atividades. Também tem
  o nome do curso, o responsável e a licença (`COURSE`).
- `src/data.ts`: o e-mail do rodapé fica em `COURSE.email` (troque o de exemplo pelo real).
- `src/team.ts`: **equipe** da página inicial (nome, função e foto). Coloque as fotos em
  `public/equipe/` e preencha `photo: "nome-do-arquivo.jpg"`. Sem foto, aparece um avatar com as iniciais.
- `src/pages/`: Início, Aula e Projeto.
- `src/styles.css`: visual. As cores ficam no topo, em `:root`.
- **Paleta:** em `index.html`, troque `data-palette="lavanda"` por `"rosa"` ou `"salvia"`.
- `src/components/Flower.tsx`: a flor da página inicial (usa as cores da paleta).
=======

>>>>>>> 18f21f758ae53f26b80c22a9f2d59a23b1297286
