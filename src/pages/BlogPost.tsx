import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Phone, MessageCircle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import WhatsAppFab from "@/components/WhatsAppFab";
import logo from "@/assets/logo-icon.png";
import { PHONE, PHONE_DISPLAY, SITE_URL, whatsappUrl } from "@/data/contact";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedService = getServiceBySlug(post.relatedServiceSlug);
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsapp = whatsappUrl(`Hola Alejandro, he leído tu artículo "${post.title}" y me gustaría más información.`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: "Alejandro Romero", jobTitle: "Enfermero colegiado" },
    publisher: {
      "@type": "Organization",
      name: "Enfermero en Casa",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    ...(post.coverImage ? { image: `${SITE_URL}${post.coverImage}` } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        {post.coverImage && <meta property="og:image" content={`${SITE_URL}${post.coverImage}`} />}
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        {post.coverImage && <meta name="twitter:image" content={`${SITE_URL}${post.coverImage}`} />}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container flex items-center justify-between gap-6 py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Volver al inicio">
            <img src={logo} alt="Logo Enfermero en Casa" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-brand-navy md:text-base">
                Enfermero <span className="text-brand-green">en Casa</span>
              </div>
              <div className="text-[10px] text-muted-foreground md:text-[11px]">Alejandro Romero · Granada</div>
            </div>
          </Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Blog
          </Link>
        </nav>
      </header>

      <main id="contenido">
        <article className="py-12 md:py-20">
          <div className="container max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-green hover:underline">
              <ArrowLeft className="h-3 w-3" /> Blog
            </Link>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-brand-navy md:text-5xl">{post.title}</h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingMinutes} min de lectura
              </span>
            </div>

            {post.coverImage && (
              <img
                src={post.coverImage}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                className="mt-8 aspect-[16/9] w-full rounded-[2rem] object-cover shadow-soft"
              />
            )}

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">{post.intro}</p>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-brand-navy">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {section.list && (
                      <ul className="list-disc space-y-2 pl-6">
                        {section.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-5">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-sm text-muted-foreground leading-relaxed">{post.disclaimer}</p>
            </div>

            {relatedService && (
              <div className="mt-10 rounded-[2rem] bg-gradient-hero p-8 text-center text-primary-foreground shadow-soft md:p-10">
                <h2 className="text-xl font-semibold md:text-2xl">
                  ¿Necesitas ayuda profesional con esto en casa?
                </h2>
                <p className="mt-2 text-primary-foreground/85">
                  Ofrezco el servicio de <strong>{relatedService.title}</strong> a domicilio en Granada.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link to={`/servicios/${relatedService.slug}`}>
                    <Button size="lg" className="rounded-full bg-background text-brand-navy hover:bg-background/90">
                      Ver el servicio
                    </Button>
                  </Link>
                  <a href={`tel:+34${PHONE}`}>
                    <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                      <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                    </Button>
                  </a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-background/10">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </article>

        {otherPosts.length > 0 && (
          <section className="bg-gradient-soft py-16 md:py-24">
            <div className="container">
              <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl text-center">Más artículos</h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <h3 className="text-lg font-semibold text-brand-navy">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand-green">Leer artículo →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <WhatsAppFab href={whatsapp} />
    </div>
  );
};

export default BlogPost;
