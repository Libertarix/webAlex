import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AvisoLegal from "./pages/AvisoLegal.tsx";
import NotFound from "./pages/NotFound.tsx";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { noticias } from "@/data/noticias";

// Proveedores globales (tooltips, toasts) que envolvían <BrowserRouter> en
// la versión anterior — con vite-react-ssg las rutas se declaran como datos
// (ver routes más abajo), así que este layout raíz hace ese mismo papel de
// envoltorio compartido, con <Outlet /> en vez de <Routes>.
function RootLayout() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  );
}

// Todas las rutas salvo la portada ("/") van con lazy — reduce lo que
// tiene que descargar quien aterriza en "/" (la página con más tráfico),
// ya que el prerenderizado hace que el contenido estático no dependa en
// absoluto de si la ruta es lazy o no (eso solo afecta a cuánto JS se
// descarga para hidratar, no a qué ve un rastreador). getStaticPaths le
// dice a vite-react-ssg qué URLs concretas prerenderizar para cada ruta
// dinámica; al leer de los mismos datos que ya usa la app (src/data/
// services.ts, blog.ts, noticias.ts), cada servicio/artículo/noticia
// nuevo se prerenderiza solo en el próximo build, sin tocar nada aquí.
export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      {
        path: "en",
        lazy: () => import("./pages/EnHome.tsx").then((m) => ({ Component: m.default })),
      },
      {
        path: "servicios/:slug",
        lazy: () => import("./pages/ServiceDetail.tsx").then((m) => ({ Component: m.default })),
        getStaticPaths: () => services.map((s) => `/servicios/${s.slug}`),
      },
      {
        path: "blog",
        lazy: () => import("./pages/Blog.tsx").then((m) => ({ Component: m.default })),
      },
      {
        path: "blog/:slug",
        lazy: () => import("./pages/BlogPost.tsx").then((m) => ({ Component: m.default })),
        getStaticPaths: () => blogPosts.map((p) => `/blog/${p.slug}`),
      },
      {
        path: "noticias",
        lazy: () => import("./pages/Noticias.tsx").then((m) => ({ Component: m.default })),
      },
      {
        path: "noticias/:slug",
        lazy: () => import("./pages/NoticiaDetalle.tsx").then((m) => ({ Component: m.default })),
        getStaticPaths: () => noticias.map((n) => `/noticias/${n.slug}`),
      },
      {
        path: "zonas-cobertura",
        lazy: () => import("./pages/ZonasCobertura.tsx").then((m) => ({ Component: m.default })),
      },
      { path: "aviso-legal", Component: AvisoLegal },
      { path: "*", Component: NotFound },
    ],
  },
];
