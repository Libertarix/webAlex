import { useEffect, useState } from "react";
import { BanderaEspana, BanderaReinoUnido } from "@/components/FlagIcons";

// Controla el widget de Google Translate (cargado en index.html) mediante
// su cookie estándar "googtrans", sin mostrar nunca la interfaz propia de
// Google (oculta por CSS) — el botón visible es 100% nuestro, para que
// encaje con el resto del diseño de la web en vez de parecer un plugin.
const COOKIE = "googtrans";

function idiomaActual(): "es" | "en" {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  return match && decodeURIComponent(match[1]) === "/es/en" ? "en" : "es";
}

function escribirCookie(valor: string | null) {
  const dominio = window.location.hostname;
  const expira = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  // Borra en todas las variantes de dominio que el widget puede usar —
  // dejar una a medias es la causa más común de que "no vuelva" a español.
  for (const d of [null, dominio, `.${dominio}`]) {
    document.cookie = `${COOKIE}=; path=/;${d ? ` domain=${d};` : ""} ${expira}`;
  }
  if (valor) {
    for (const d of [null, dominio, `.${dominio}`]) {
      document.cookie = `${COOKIE}=${valor}; path=/;${d ? ` domain=${d};` : ""}`;
    }
  }
}

const TranslateButton = () => {
  const [idioma, setIdioma] = useState<"es" | "en">("es");

  useEffect(() => {
    setIdioma(idiomaActual());
  }, []);

  const alternar = () => {
    escribirCookie(idioma === "es" ? "/es/en" : null);
    window.location.reload();
  };

  // Muestra la bandera del idioma AL QUE se cambiaría al pulsar (patrón
  // habitual: en español se ve la bandera del Reino Unido invitando a
  // pasar a inglés, y viceversa una vez ya traducida).
  return (
    <button
      type="button"
      onClick={alternar}
      className="notranslate inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-background px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-brand-green hover:text-brand-navy"
      aria-label={idioma === "es" ? "Ver esta página en inglés" : "Ver esta página en español"}
      title={idioma === "es" ? "Translate to English" : "Volver al español"}
    >
      {idioma === "es" ? (
        <BanderaReinoUnido className="h-3.5 w-5 rounded-[2px]" />
      ) : (
        <BanderaEspana className="h-3.5 w-5 rounded-[2px]" />
      )}
      {idioma === "es" ? "EN" : "ES"}
    </button>
  );
};

export default TranslateButton;
