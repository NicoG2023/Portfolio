import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      // ES
      hero: {
        badge: "Disponible para proyectos",
        microProof: "Backend • Arquitectura • Sistemas reales",

        headlineA: "Construyo backends",
        headlineAccent: "que escalan",
        headlineB: "en Java y full-stack cuando hace sentido",

        subtitle:
          "APIs, arquitectura limpia y flujos event-driven con seguridad y observabilidad desde el día uno.",

        ctaPrimary: "Ver proyectos",
        ctaSecondary: "Contactarme",

        highlights: {
          arch: "Arquitectura limpia",
          security: "Seguridad (AuthN/AuthZ)",
          obs: "Observabilidad (logs/métricas)",
        },

        cardTitle: "Resumen rápido",
        cardTag: "v1.0",

        cardBullet1: "APIs y dominios bien modelados (DDD cuando aplica).",
        cardBullet2: "Integraciones y eventos con enfoque en resiliencia.",
        cardBullet3: "Listo para producción: seguridad, logs y métricas.",

        cardMetric1Label: "Enfoque",
        cardMetric1Value: "Backend & Arquitectura",

        scroll: "Desliza para ver más",
      },
      stack: {
        title: "Stack tecnológico",
        subtitle: "Herramientas que uso para construir backends listos para producción (curado, lo principal).",
        cta: "Ver proyectos",
        note: "Más detalles (y herramientas específicas) dentro de cada proyecto.",
        groups: {
          backend: "Backend",
          data: "Datos",
          security: "Seguridad",
          obs: "Observabilidad",
          infra: "Infra / Cloud",
          frontend: "Frontend",
        },
        items: {
          java: "Java",
          quarkus: "Quarkus",
          spring: "Spring Boot",
          postgres: "PostgreSQL",
          mysql: "MySQL",
          keycloak: "Keycloak",
          auth: "OAuth2 / JWT",
          prometheus: "Prometheus",
          grafana: "Grafana",
          docker: "Docker",
          aws: "AWS",
          gcp: "GCP",
          react: "React",
          ts: "TypeScript",
        },
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
        microProof: "Backend • Architecture • Real systems",

        headlineA: "I build backends",
        headlineAccent: "that scale",
        headlineB: "in Java and full-stack when it makes sense",

        subtitle:
          "APIs, clean architecture, and event-driven flows with security and observability from day one.",

        ctaPrimary: "View projects",
        ctaSecondary: "Contact me",

        highlights: {
          arch: "Clean architecture",
          security: "Security (AuthN/AuthZ)",
          obs: "Observability (logs/metrics)",
        },

        cardTitle: "Quick snapshot",
        cardTag: "v1.0",

        cardBullet1: "Well-modeled domains (DDD when it fits).",
        cardBullet2: "Integrations and events with resilience in mind.",
        cardBullet3: "Production-ready: security, logging, and metrics.",

        cardMetric1Label: "Focus",
        cardMetric1Value: "Backend & Architecture",

        scroll: "Scroll to explore",
      },
      stack: {
        title: "Tech stack",
        subtitle: "Tools I use to build production-ready backends.",
        cta: "View projects",
        note: "More details (and project-specific tools) inside each project.",
        groups: {
          backend: "Backend",
          data: "Data",
          security: "Security",
          obs: "Observability",
          infra: "Infra / Cloud",
          frontend: "Frontend",
        },
        items: {
          java: "Java",
          quarkus: "Quarkus",
          spring: "Spring Boot",
          postgres: "PostgreSQL",
          mysql: "MySQL",
          keycloak: "Keycloak",
          auth: "OAuth2 / JWT",
          prometheus: "Prometheus",
          grafana: "Grafana",
          docker: "Docker",
          aws: "AWS",
          gcp: "GCP",
          react: "React",
          ts: "TypeScript",
        },
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
