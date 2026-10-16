// Mostra o vídeo da aula. Aceita link do YouTube ou arquivo de vídeo (.mp4).
function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1]! : null;
}

export default function Video({ src, captions, title }: { src?: string; captions?: string; title: string }) {
  if (!src) {
    return (
      <div className="video video-empty">
        <p><strong>Vídeo em breve</strong></p>
        <p>O vídeo desta aula ainda não foi publicado. Enquanto isso, consulte o conteúdo abaixo.</p>
      </div>
    );
  }

  const yt = youtubeId(src);
  if (yt) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt}`}
          title={`Vídeo da aula: ${title}`}
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="video">
      <video controls preload="metadata" aria-label={`Vídeo da aula: ${title}`}>
        <source src={src} />
        {captions && <track kind="captions" src={captions} srcLang="pt-BR" label="Português" default />}
        Seu navegador não reproduz este vídeo.
      </video>
    </div>
  );
}
