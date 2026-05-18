import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-icon.png";

const PHONE_DISPLAY = "626 78 43 27";
const EMAIL = "cuidate@enfermeroencasa.com";
const COLEGIADO = "47384";
const TITULAR = "Alejandro Romero Muñoz";
const DOMICILIO = "Granada, España (domicilio profesional disponible bajo solicitud por correo electrónico)";

const SITE_URL = "https://enfermeroencasa.com/aviso-legal";

const AvisoLegal = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Aviso legal y privacidad · Enfermero en Casa Granada";

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "Aviso legal y política de privacidad de Enfermero en Casa (Alejandro Romero, enfermero colegiado nº 47384 en Granada). Información LSSI-CE y tratamiento de datos conforme al RGPD.";
    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:title", "Aviso legal y Política de privacidad · Enfermero en Casa", "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", SITE_URL, "property");
    setMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;

    return () => {
      document.title = prevTitle;
      if (canonical && prevCanonical) canonical.href = prevCanonical;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex items-center justify-between gap-4 py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Volver al inicio">
            <img src={logo} alt="Logo Enfermero en Casa" className="h-11 w-11 object-contain md:h-12 md:w-12" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-brand-navy md:text-base">
                Enfermero <span className="text-brand-green">en Casa</span>
              </div>
              <div className="text-[10px] text-muted-foreground md:text-[11px]">Alejandro Romero · Col. {COLEGIADO}</div>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowLeft className="h-4 w-4" /> Volver
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container max-w-3xl py-12 md:py-20">
        <header className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Información legal</span>
          <h1 className="mt-3 text-3xl font-semibold text-brand-navy md:text-5xl">
            Aviso legal y política de privacidad
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <article className="prose prose-slate max-w-none space-y-10 text-foreground/90 leading-relaxed">
          <section aria-labelledby="aviso-legal">
            <h2 id="aviso-legal" className="text-2xl font-semibold text-brand-navy md:text-3xl">
              1. Aviso legal
            </h2>
            <p className="mt-4 text-muted-foreground">
              En cumplimiento de la <strong className="text-foreground">Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se informa a los usuarios de los siguientes datos identificativos del titular de esta página web.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.1. Titular de la web</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Nombre y apellidos:</strong> {TITULAR}</li>
              <li><strong className="text-foreground">Profesión:</strong> Enfermero colegiado</li>
              <li><strong className="text-foreground">N.º de colegiado:</strong> {COLEGIADO}</li>
              
              <li><strong className="text-foreground">Correo electrónico:</strong> <a href={`mailto:${EMAIL}`} className="text-brand-green hover:underline">{EMAIL}</a></li>
              <li><strong className="text-foreground">Teléfono de contacto:</strong> <a href="tel:+34626784327" className="text-brand-green hover:underline">{PHONE_DISPLAY}</a></li>
              <li><strong className="text-foreground">Sitio web:</strong> enfermeroencasa.com</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.2. Objeto</h3>
            <p className="mt-3 text-muted-foreground">
              La presente página web tiene como finalidad ofrecer información sobre los servicios profesionales de enfermería a domicilio prestados por el titular en Granada y su área metropolitana, así como facilitar el contacto con los usuarios interesados.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.3. Condiciones de uso</h3>
            <p className="mt-3 text-muted-foreground">
              El acceso y la utilización de esta web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a realizar un uso adecuado y lícito de los contenidos y servicios ofrecidos, conforme a la legislación vigente, la moral y el orden público.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.4. Propiedad intelectual e industrial</h3>
            <p className="mt-3 text-muted-foreground">
              Todos los contenidos de esta web, incluyendo a título enunciativo textos, imágenes, fotografías, logotipos, marcas, gráficos, diseño y código fuente, están protegidos por la normativa española e internacional sobre propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización expresa y por escrito del titular.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.5. Responsabilidad</h3>
            <p className="mt-3 text-muted-foreground">
              El titular no se responsabiliza del uso indebido que pueda hacerse de la información publicada en esta web, ni de los posibles daños o perjuicios derivados del acceso o uso de la misma, incluyendo errores u omisiones en los contenidos o problemas técnicos de acceso. La información publicada tiene carácter meramente informativo y no sustituye en ningún caso al juicio clínico profesional ni a la valoración presencial.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">1.6. Legislación aplicable</h3>
            <p className="mt-3 text-muted-foreground">
              La relación entre el titular y el usuario se regirá por la legislación española vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales competentes según la normativa aplicable.
            </p>
          </section>

          <section aria-labelledby="privacidad">
            <h2 id="privacidad" className="text-2xl font-semibold text-brand-navy md:text-3xl">
              2. Política de privacidad
            </h2>
            <p className="mt-4 text-muted-foreground">
              De conformidad con el <strong className="text-foreground">Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong className="text-foreground">Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong>, se informa al usuario del tratamiento que se realiza de sus datos personales.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.1. Responsable del tratamiento</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Responsable:</strong> {TITULAR} (enfermero colegiado nº {COLEGIADO}).</li>
              <li><strong className="text-foreground">Contacto:</strong> <a href={`mailto:${EMAIL}`} className="text-brand-green hover:underline">{EMAIL}</a></li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.2. Finalidad del tratamiento</h3>
            <p className="mt-3 text-muted-foreground">Los datos personales facilitados a través de esta web serán utilizados para:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Gestionar las solicitudes de contacto recibidas por formulario, correo electrónico, teléfono o WhatsApp.</li>
              <li>Responder a las consultas realizadas por los usuarios.</li>
              <li>Gestionar la relación profesional derivada de la prestación de servicios sanitarios de enfermería.</li>
              <li>Cumplir con las obligaciones legales que resulten aplicables (sanitarias, fiscales, contables).</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.3. Legitimación</h3>
            <p className="mt-3 text-muted-foreground">La base legal para el tratamiento de los datos es:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>El <strong className="text-foreground">consentimiento</strong> del interesado al cumplimentar el formulario o contactar voluntariamente.</li>
              <li>La <strong className="text-foreground">ejecución de un contrato</strong> o relación profesional derivada de la solicitud realizada.</li>
              <li>El <strong className="text-foreground">cumplimiento de obligaciones legales</strong> aplicables al ejercicio profesional sanitario.</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.4. Conservación de los datos</h3>
            <p className="mt-3 text-muted-foreground">
              Los datos se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legales mínimos exigidos por la normativa sanitaria, fiscal y administrativa correspondiente. Una vez transcurridos dichos plazos, los datos se suprimirán de forma segura.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.5. Destinatarios</h3>
            <p className="mt-3 text-muted-foreground">
              Los datos personales no serán cedidos a terceros, salvo obligación legal o cuando resulte estrictamente necesario para la prestación del servicio solicitado (por ejemplo, coordinación con su médico u otro profesional sanitario cuando el usuario lo autorice).
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.6. Derechos del usuario</h3>
            <p className="mt-3 text-muted-foreground">El usuario puede ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de los datos inexactos.</li>
              <li>Supresión de los datos cuando ya no sean necesarios.</li>
              <li>Oposición al tratamiento.</li>
              <li>Limitación del tratamiento.</li>
              <li>Portabilidad de los datos.</li>
              <li>Revocación del consentimiento previamente otorgado.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Para ejercer estos derechos basta con remitir una solicitud por escrito al correo electrónico <a href={`mailto:${EMAIL}`} className="text-brand-green hover:underline">{EMAIL}</a>, indicando el derecho que desea ejercer y adjuntando copia de un documento que acredite su identidad.
            </p>
            <p className="mt-3 text-muted-foreground">
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la <strong className="text-foreground">Agencia Española de Protección de Datos (AEPD)</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">www.aepd.es</a>) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.7. Seguridad de los datos</h3>
            <p className="mt-3 text-muted-foreground">
              El responsable adopta las medidas técnicas y organizativas razonables y proporcionadas al estado de la técnica para garantizar la confidencialidad, integridad y disponibilidad de los datos personales facilitados, evitando su alteración, pérdida o acceso no autorizado.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-brand-navy">2.8. Secreto profesional sanitario</h3>
            <p className="mt-3 text-muted-foreground">
              Toda la información de carácter clínico que el usuario comparta queda amparada por el <strong className="text-foreground">secreto profesional sanitario</strong> al que está sujeto el titular como enfermero colegiado, conforme a la legislación sanitaria vigente.
            </p>
          </section>
        </article>

        <div className="mt-12 flex justify-center">
          <Link to="/">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Enfermero en Casa · {TITULAR} · Col. {COLEGIADO}
        </div>
      </footer>
    </div>
  );
};

export default AvisoLegal;
