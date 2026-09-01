import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./index.css";
import "./lib/parcheGoogleTranslate.ts";

export const createRoot = ViteReactSSG({ routes, basename: "/" });
