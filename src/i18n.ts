import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      // ES
      hero: {
        badge: "Disponible para proyectos",
        headlineA: "Construyo sistemas",
        headlineB: "backend en Java y full-stack",
        subtitle:
          "Portafolio de proyectos enfocados en APIs, arquitectura limpia, microservicios cuando aplica y entregas con impacto medible.",
        ctaPrimary: "Ver proyectos",
        ctaSecondary: "Contactarme",
        chips: {
          one: "Java • Spring/Quarkus",
          two: "APIs REST • Seguridad",
          three: "Microservicios • Eventos",
          four: "Cloud • Docker",
        },
        cardTitle: "Resumen rápido",
        cardBody:
          "Experiencia construyendo backends robustos: diseño de dominios, integraciones, observabilidad y buenas prácticas para producción.",
        cardMetric1Label: "Enfoque",
        cardMetric1Value: "Backend & Arquitectura",
        cardMetric2Label: "Stack",
        cardMetric2Value: "Java • PostgreSQL • Docker",
        scroll: "Desliza para ver más",
      },
      site: { brand: "Nicolás Guevara" },
      nav: { projects: "Proyectos", contact: "Contacto" },
      projects: {
        title: "Proyectos",
        subtitle: "Selección curada de proyectos full-stack con fortaleza en backend (Java, APIs, arquitectura).",
        filters: {
          all: "Todos",
          backend: "Backend",
          fullstack: "Full-stack",
        },
      },
      project: {
        back: "Volver a proyectos",
        backHome: "Volver al inicio",
        notFound: "No encontré este proyecto.",
        stack: "Stack",
        links: "Enlaces",
        problem: "Problema",
        solution: "Solución",
        impact: "Impacto",
        role: "Mi rol",
        todo: "Pendiente: completar esta sección con contenido del proyecto.",
      },
      contact: {
        title: "Hablemos",
        subtitle: "¿Tienes una oportunidad, proyecto o idea? Escríbeme y te respondo lo más pronto posible.",
        ctaEmail: "Enviar email",
        copy: "Copiar email",
        copied: "Copiado",
        copyFallback: "Copia este email:",
        quickTitle: "Info rápida",
        quick1: "Disponible para proyectos freelance y roles full-time.",
        quick2: "Interesado en backend, full-stack y arquitectura.",
        quick3: "Trabajo remoto o híbrido.",
        emailLabel: "Email",
        linksTitle: "Links",
        linksBody: "Encuéntrame aquí (o descarga mi CV).",
        linkedin: "LinkedIn",
        linkedinHint: "Experiencia y background",
        github: "GitHub",
        githubHint: "Código y repositorios",
        resume: "CV / Resume",
        resumeHint: "PDF (una página)",
        footerNote: "Tip: si me escribes, incluye contexto y links para responder más rápido.",
      },
    },
  },
  en: {
    translation: {
      // EN
      hero: {
        badge: "Open to projects",
        headlineA: "I build systems",
        headlineB: "Java backends and full-stack apps",
        subtitle:
          "Portfolio focused on APIs, clean architecture, microservices when needed, and shipping with measurable impact.",
        ctaPrimary: "View projects",
        ctaSecondary: "Contact me",
        chips: {
          one: "Java • Spring/Quarkus",
          two: "REST APIs • Security",
          three: "Microservices • Events",
          four: "Cloud • Docker",
        },
        cardTitle: "Quick snapshot",
        cardBody:
          "Experience building production-grade backends: domain design, integrations, observability, and strong engineering practices.",
        cardMetric1Label: "Focus",
        cardMetric1Value: "Backend & Architecture",
        cardMetric2Label: "Stack",
        cardMetric2Value: "Java • PostgreSQL • Docker",
        scroll: "Scroll to explore",
      },
      site: { brand: "Nicolás Guevara" },
      nav: { projects: "Projects", contact: "Contact" },
      projects: {
        title: "Projects",
        subtitle: "A curated selection of full-stack projects with strong backend focus (Java, APIs, architecture).",
        filters: {
          all: "All",
          backend: "Backend",
          fullstack: "Full-stack",
        },
      },
      project: {
        back: "Back to projects",
        backHome: "Back home",
        notFound: "Project not found.",
        stack: "Stack",
        links: "Links",
        problem: "Problem",
        solution: "Solution",
        impact: "Impact",
        role: "My role",
        todo: "TODO: fill this section with project details.",
      },
      contact: {
        title: "Let’s connect",
        subtitle: "Got an opportunity, project, or idea? Email me — I’ll get back to you soon.",
        ctaEmail: "Send email",
        copy: "Copy email",
        copied: "Copied",
        copyFallback: "Copy this email:",
        quickTitle: "Quick info",
        quick1: "Available for freelance projects and full-time roles.",
        quick2: "Interested in backend, full-stack, and architecture.",
        quick3: "Remote or hybrid.",
        emailLabel: "Email",
        linksTitle: "Links",
        linksBody: "Find me here (or download my resume).",
        linkedin: "LinkedIn",
        linkedinHint: "Experience & background",
        github: "GitHub",
        githubHint: "Code & repositories",
        resume: "CV / Resume",
        resumeHint: "PDF (one page)",
        footerNote: "Tip: include context and links so I can respond faster.",
      },
    },
  },
};


i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
