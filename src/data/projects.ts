export type ProjectLink = { label: "github" | "demo" | "doc"; href: string };

export type Project = {
  id: string;
  featured?: boolean;
  year?: string;
  category: "software" | "data" | "consulting";
  title: { es: string; en: string };
  description: { es: string; en: string };
  role?: { es: string; en: string };
  duration?: { es: string; en: string };
  stack: string[];
  links?: ProjectLink[];
  metrics?: ProjectMetric[];
  sections?: ProjectSection[];
  media?: ProjectMedia;
};

export type ProjectMetric = {
  label: { es: string; en: string };
  value: { es: string; en: string };
};

export type ProjectSection = {
  id: "overview" | "problem" | "solution" | "architecture" | "features" | "challenges" | "results" | "next";
  title: { es: string; en: string };
  body: { es: string; en: string };
  bullets?: { es: string[]; en: string[] };
};

export type ProjectMedia = {
  // Imagen (local en /src/assets o URL)
  images?: { src: string; alt: { es: string; en: string } }[];
  // Video demo: preferible YouTube/Vimeo embed o mp4 en public/
  video?: {
    kind: "youtube" | "vimeo" | "mp4";
    src: string; // youtube/vimeo: URL completa; mp4: "/videos/demo.mp4"
    title: { es: string; en: string };
  };
};

export const projects: Project[] = [
  {
    id: "access-platform",
    featured: true,
    year: "2025",
    category: "software",
    title: {
      es: "Plataforma de control de acceso (Reconocimiento facial)",
      en: "Access Control Platform (Face Recognition)",
    },
    description: {
      es: "Sistema full-stack con multitenancy, control de acceso por eventos y enfoque en arquitectura limpia.",
      en: "Full-stack system with multitenancy, event-driven access decisions, and clean architecture.",
    },
    role: {
      es: "Full-stack (arquitectura, backend, integración frontend)",
      en: "Full-stack (architecture, backend, frontend integration)",
    },
    duration: { es: "3 meses", en: "3 months" },
    stack: ["React", "Vite", "Django/FastAPI", "PostgreSQL", "Docker", "AWS"],
    links: [
      { label: "github", href: "https://github.com/tuusuario/tu-repo" },
      { label: "demo", href: "https://tu-demo.vercel.app" },
    ],
    metrics: [
      {
        label: { es: "Arquitectura", en: "Architecture" },
        value: { es: "Multitenant + eventos", en: "Multitenant + events" },
      },
      {
        label: { es: "Enfoque", en: "Focus" },
        value: { es: "Seguridad y trazabilidad", en: "Security & traceability" },
      },
      {
        label: { es: "Entrega", en: "Delivery" },
        value: { es: "MVP + iteraciones", en: "MVP + iterations" },
      },
    ],
    media: {
      video: {
        kind: "youtube",
        src: "https://www.youtube.com/watch?v=TU_VIDEO_ID",
        title: { es: "Demo del sistema", en: "System demo" },
      },
      images: [
        { src: "/images/access-1.png", alt: { es: "Pantalla principal", en: "Main screen" } },
        { src: "/images/access-2.png", alt: { es: "Historial de accesos", en: "Access history" } },
      ],
    },
    sections: [
      {
        id: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Construí una plataforma para gestionar accesos, integrando decisiones de acceso, trazabilidad y administración multi-organización.",
          en: "I built an access platform combining access decisions, traceability, and multi-organization administration.",
        },
      },
      {
        id: "problem",
        title: { es: "Problema", en: "Problem" },
        body: {
          es: "Se necesitaba controlar quién entra, cuándo y por qué, con auditoría clara y escalabilidad por organizaciones.",
          en: "Needed to control who enters, when and why, with clear auditability and scalable multi-org setup.",
        },
        bullets: {
          es: ["Auditoría completa", "Multi-tenant real", "Integración con dispositivos"],
          en: ["Full auditing", "Real multitenancy", "Device integration"],
        },
      },
      {
        id: "solution",
        title: { es: "Solución", en: "Solution" },
        body: {
          es: "Implementé un flujo basado en eventos para resolver acceso, con backend desacoplado y frontend moderno.",
          en: "Implemented an event-driven flow for access decisions with a decoupled backend and modern frontend.",
        },
      },
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "Diseño por capas, entidades auditable/tenant-only, y servicios separados por dominio. Preparado para evolución a microservicios.",
          en: "Layered design with auditable/tenant-only entities and domain services. Ready to evolve into microservices.",
        },
      },
      {
        id: "features",
        title: { es: "Funcionalidades clave", en: "Key features" },
        body: {
          es: "Módulos de residentes, áreas, dispositivos, intentos y decisiones de acceso, con búsqueda e historial.",
          en: "Modules for residents, areas, devices, access attempts and decisions, with search and history.",
        },
      },
      {
        id: "challenges",
        title: { es: "Retos", en: "Challenges" },
        body: {
          es: "Alineación de modelo multi-tenant, consistencia de datos y experiencia fluida en UI.",
          en: "Multitenant data modeling, consistency guarantees, and smooth UI experience.",
        },
      },
      {
        id: "results",
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "Se logró trazabilidad completa y una base sólida para escalar con componentes desacoplados.",
          en: "Achieved full traceability and a solid foundation to scale with decoupled components.",
        },
      },
      {
        id: "next",
        title: { es: "Siguientes pasos", en: "Next steps" },
        body: {
          es: "Optimizar colas/eventos, métricas operativas y hardening de seguridad.",
          en: "Improve queues/events, operational metrics, and security hardening.",
        },
      },
    ],
  },
  {
    id: "diagseg",
    year: "2025",
    category: "data",
    title: { es: "DiagSEG: scoring de seguridad IP/ASN", en: "DiagSEG: IP/ASN Security Scoring" },
    description: {
      es: "Backend de análisis con pipeline de scoring, integración de fuentes y vista de historial.",
      en: "Analysis backend with scoring pipeline, multi-source integration, and history view.",
    },
    stack: ["Quarkus/Java", "Nmap", "NVD API", "PostgreSQL", "Docker"],
    links: [{ label: "doc", href: "https://tu-doc" }],
  },
  {
    id: "sme-decks",
    year: "2024–2025",
    category: "consulting",
    title: { es: "Benchmark & propuesta SME (Pagos)", en: "SME Benchmark & Proposal (Payments)" },
    description: {
      es: "Análisis de portafolio y propuesta de valor para tarjetas SME con foco en crecimiento y primacy.",
      en: "Portfolio analysis and SME card value proposition focused on growth and primacy.",
    },
    stack: ["Analytics", "Strategy", "Deck building", "Stakeholder mgmt"],
  },
];
