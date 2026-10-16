// Ilustração decorativa da página inicial. As cores vêm da paleta (variáveis CSS).
function Petals({ cx, cy, count, length, width, offset = 0, fill }: {
  cx: number; cy: number; count: number; length: number; width: number; offset?: number; fill: string;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy - length * 0.62}
          rx={width}
          ry={length * 0.62}
          fill={fill}
          transform={`rotate(${offset + (360 / count) * i} ${cx} ${cy})`}
        />
      ))}
    </>
  );
}

export default function Flower() {
  return (
    <svg className="flower" viewBox="0 0 400 420" aria-hidden="true" focusable="false">
      {/* fundo suave */}
      <circle cx="200" cy="190" r="178" fill="var(--soft)" />

      {/* haste e folhas */}
      <path d="M200 262 C 196 320, 204 360, 200 405" fill="none" stroke="var(--leaf)" strokeWidth="7" strokeLinecap="round" />
      <path d="M200 340 C 160 338, 138 316, 132 292 C 170 292, 195 312, 200 340 Z" fill="var(--leaf)" />
      <path d="M201 318 C 240 316, 262 296, 268 272 C 230 272, 206 292, 201 318 Z" fill="var(--leaf)" opacity=".8" />

      {/* flor principal */}
      <g className="bloom">
        <Petals cx={200} cy={190} count={8} length={118} width={32} fill="var(--petal)" />
        <Petals cx={200} cy={190} count={8} length={92} width={26} offset={22.5} fill="var(--primary)" />
        <circle cx="200" cy="190" r="30" fill="var(--accent)" />
        <circle cx="190" cy="184" r="4" fill="var(--ink)" opacity=".35" />
        <circle cx="208" cy="180" r="4" fill="var(--ink)" opacity=".35" />
        <circle cx="203" cy="199" r="4" fill="var(--ink)" opacity=".35" />
      </g>

      {/* flores pequenas */}
      <g>
        <Petals cx={82} cy={92} count={5} length={36} width={13} fill="var(--primary)" />
        <circle cx="82" cy="92" r="9" fill="var(--accent)" />
      </g>
      <g>
        <Petals cx={326} cy={300} count={5} length={42} width={15} offset={36} fill="var(--petal)" />
        <circle cx="326" cy="300" r="10" fill="var(--accent)" />
      </g>
      <circle cx="318" cy="76" r="7" fill="var(--accent)" />
      <circle cx="64" cy="270" r="5" fill="var(--petal)" />
    </svg>
  );
}
