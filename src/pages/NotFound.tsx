import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SITE = "https://enfermeroencasa.lovable.app";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    const url = `${SITE}${location.pathname}`;
    document.title = "Página no encontrada (404) · Enfermero en Casa";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description = "La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio de Enfermero en Casa Granada.";
    setMeta("description", description);
    setMeta("robots", "noindex, follow");
    setMeta("og:title", "Página no encontrada (404) · Enfermero en Casa", "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    return () => {
      document.title = prevTitle;
      if (canonical && prevCanonical) canonical.href = prevCanonical;
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-foreground">Página no encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Volver al inicio
        </a>
      </div>
    </main>
  );
};

export default NotFound;
