import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import EnHome from "./pages/EnHome.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import ZonasCobertura from "./pages/ZonasCobertura.tsx";
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

// El blog y las noticias crecen con cada publicación de sus bots (ver
// scripts/blog-bot/ y scripts/news-bot/) — se cargan aparte (lazy) para no
// engordar el bundle principal que se descarga en cualquier otra página.
// getStaticPaths le dice a vite-react-ssg qué URLs concretas prerenderizar
// para cada ruta dinámica; al leer de los mismos datos que ya usa la app
// (src/data/blog.ts, src/data/noticias.ts, src/data/services.ts), cada
// artículo/noticia/servicio nuevo se prerenderiza solo en el próximo build,
// sin tocar nada aquí.
export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      { path: "en", Component: EnHome },
      {
        path: "servicios/:slug",
        Component: ServiceDetail,
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
      { path: "zonas-cobertura", Component: ZonasCobertura },
      { path: "aviso-legal", Component: AvisoLegal },
      { path: "*", Component: NotFound },
    ],
  },
];
