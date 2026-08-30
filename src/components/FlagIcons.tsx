// SVG propio, no emoji: en Windows sin fuente de emoji con glifo de bandera,
// 🇪🇸/🇬🇧 caen a texto plano ("ES"/"GB") en vez de dibujar una bandera.

export const BanderaEspana = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
    <rect width="3" height="2" fill="#AA151B" />
    <rect y="0.5" width="3" height="1" fill="#F1BF00" />
  </svg>
);

export const BanderaReinoUnido = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
    <rect width="60" height="36" fill="#00247D" />
    <path d="M0 0 L60 36 M60 0 L0 36" stroke="#FFFFFF" strokeWidth="7.2" />
    <path d="M0 0 L60 36 M60 0 L0 36" stroke="#CF142B" strokeWidth="2.4" />
    <path d="M30 0 V36 M0 18 H60" stroke="#FFFFFF" strokeWidth="12" />
    <path d="M30 0 V36 M0 18 H60" stroke="#CF142B" strokeWidth="7.2" />
  </svg>
);
