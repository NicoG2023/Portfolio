// src/data/projects.ts

export type ProjectLink = { label: "github" | "demo" | "doc"; href: string };

export type Project = {
  id: string;
  featured?: boolean;
  year?: string;
  category: "backend" | "fullstack";
  title: { es: string; en: string };
  description: { es: string; en: string };
  role?: { es: string; en: string };
  duration?: { es: string; en: string };
  stack: string[];
  links?: ProjectLink[];
  metrics?: ProjectMetric[];
  sections?: ProjectSection[];
  media?: ProjectMedia;
  comingSoon?: boolean;
  detailEnabled?: boolean;
};

export type ProjectMetric = {
  label: { es: string; en: string };
  value: { es: string; en: string };
};

export type ProjectSection = {
  id:
    | "overview"
    | "problem"
    | "solution"
    | "architecture"
    | "features"
    | "challenges"
    | "results"
    | "next";
  title: { es: string; en: string };
  body: { es: string; en: string };
  bullets?: { es: string[]; en: string[] };
};

export type ProjectMedia = {
  images?: { src: string; alt: { es: string; en: string } }[];
  videos?: {
    kind: "youtube" | "vimeo" | "mp4";
    src: string;
    title: { es: string; en: string };
  }[];
};



export const projects: Project[] = [
  // =========================
  // FEATURED
  // =========================

  {
    id: "cinema-management-system",
    featured: true,
    year: "2025",
    category: "fullstack",
    title: { es: "Cinema Management System", en: "Cinema Management System" },
    description: {
      es: "Sistema full-stack con 2 microservicios (Flask + Quarkus) y frontend en React. Enfocado en recorrer el ciclo completo de ingeniería de software y en testing (unitarias, estrés y aceptación).",
      en: "Full-stack system with 2 microservices (Flask + Quarkus) and a React frontend. Focused on the full software engineering lifecycle and testing (unit, stress, and acceptance).",
    },
    role: {
      es: "Backend & full-stack (diseño de APIs, microservicios, testing, UI)",
      en: "Backend & full-stack (API design, microservices, testing, UI)",
    },
    duration: { es: "—", en: "—" },
    stack: ["Java (Quarkus)", "Python (Flask)", "React", "PostgreSQL", "Docker", "Testing", "CI/CD"],
    links: [{ label: "github", href: "https://github.com/NicoG2023/Cinema-Management-System" }],
    metrics: [
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "2 microservicios", en: "2 microservices" } },
      { label: { es: "Testing", en: "Testing" }, value: { es: "Unit • Stress • Acceptance", en: "Unit • Stress • Acceptance" } },
      { label: { es: "UI", en: "UI" }, value: { es: "React", en: "React" } },
    ],
    media: {
      videos: [
        {
          kind: "mp4",
          src: "/videos/cinema/CinemaManagementSystem.mp4",
          title: { es: "Demo del sistema", en: "System demo" },
        },
      ],
    },
    sections: [
      {
        id: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Sistema de gestión de cine construido end-to-end con arquitectura de microservicios y foco fuerte en calidad: diseño, implementación y pruebas en diferentes niveles.",
          en: "Cinema management system built end-to-end with a microservices architecture and a strong quality focus: design, implementation, and multi-level testing.",
        },
      },
      {
        id: "problem",
        title: { es: "Problema", en: "Problem" },
        body: {
          es: "Necesitaba un proyecto end-to-end que demostrara arquitectura, integración y calidad de software (más allá de solo “que funcione”).",
          en: "Needed an end-to-end project that demonstrates architecture, integration, and software quality (beyond just “it works”).",
        },
        bullets: {
          es: ["Integración entre servicios", "Flujos completos UI→API→DB", "Cobertura de pruebas realista"],
          en: ["Service integration", "End-to-end UI→API→DB flows", "Realistic test coverage"],
        },
      },
      {
        id: "solution",
        title: { es: "Solución", en: "Solution" },
        body: {
          es: "Separé responsabilidades en microservicios, diseñé APIs claras y construí un frontend React para la operación del sistema, complementado con pruebas unitarias, de estrés y de aceptación.",
          en: "Split responsibilities into microservices, designed clear APIs, and built a React frontend to operate the system, complemented by unit, stress, and acceptance tests.",
        },
      },
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "2 servicios (Flask + Quarkus) con endpoints definidos, persistencia y contratos claros; frontend React consumiendo APIs.",
          en: "2 services (Flask + Quarkus) with defined endpoints, persistence, and clear contracts; React frontend consuming APIs.",
        },
      },
      {
        id: "results",
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "Sistema funcional con arquitectura separada y evidencia de calidad mediante pruebas unitarias, de estrés y de aceptación.",
          en: "Working system with separated architecture and quality evidence through unit, stress, and acceptance tests.",
        },
      },
      {
        id: "next",
        title: { es: "Siguientes pasos", en: "Next steps" },
        body: {
          es: "Hardening, observabilidad (métricas/logs) y despliegue reproducible (CI/CD).",
          en: "Hardening, observability (metrics/logs), and reproducible deployment (CI/CD).",
        },
      },
    ],
  },

  {
    id: "probability-quizzes",
    featured: true,
    year: "2024–2025",
    category: "fullstack",
    title: { es: "App de Quices de Probabilidad (crear y calificar)", en: "Probability Quizzes App (create & grade)" },
    description: {
      es: "Aplicación full-stack en Quarkus + React para crear, presentar y calificar quices. Incluye autenticación/autorización con Keycloak.",
      en: "Full-stack app in Quarkus + React to create, take, and grade quizzes. Includes auth/authz with Keycloak.",
    },
    role: {
      es: "Full-stack (backend Quarkus, UI React, auth con Keycloak)",
      en: "Full-stack (Quarkus backend, React UI, Keycloak auth)",
    },
    duration: { es: "—", en: "—" },
    stack: ["Java (Quarkus)", "React", "Keycloak", "PostgreSQL", "Docker"],
    links: [{ label: "github", href: "https://github.com/NicoG2023/App-Quices-Probabilidad" }],
    metrics: [
      { label: { es: "Auth", en: "Auth" }, value: { es: "Keycloak", en: "Keycloak" } },
      { label: { es: "Tipo", en: "Type" }, value: { es: "Full-stack", en: "Full-stack" } },
      { label: { es: "Enfoque", en: "Focus" }, value: { es: "Proyecto completo", en: "End-to-end build" } },
    ],
    media: {
      videos: [
        {
          kind: "mp4",
          src: "/videos/quizzes/AppProbabilidad.mp4",
          title: { es: "Demo de la app", en: "App demo" },
        },
      ],
    },
    sections: [
      {
        id: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Plataforma para administrar quices, responderlos y calificarlos, con autenticación y roles para control de acceso.",
          en: "Platform to manage quizzes, take them, and grade them, with authentication and roles for access control.",
        },
      },
      {
        id: "features",
        title: { es: "Funcionalidades clave", en: "Key features" },
        body: {
          es: "Creación de quices, banca de preguntas, presentación a usuarios y calificación automática con resultados.",
          en: "Quiz creation, question bank, user delivery, and automatic grading with results.",
        },
      },
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "API en Quarkus con endpoints REST y seguridad integrada con Keycloak; UI React consumiendo la API.",
          en: "Quarkus REST API secured with Keycloak; React UI consuming the API.",
        },
      },
    ],
  },

  {
    id: "access-platform",
    featured: false,
    year: "2025",
    category: "fullstack",
    title: { es: "Plataforma de control de acceso (Reconocimiento facial)", en: "Access Control Platform (Face Recognition)" },
    description: {
      es: "Plataforma full-stack en Quarkus + React: monolito modular + microservicio, decisiones por eventos con Kafka, seguridad con Keycloak y observabilidad con Prometheus, Grafana y Alertmanager.",
      en: "Full-stack platform in Quarkus + React: modular monolith + microservice, event-driven decisions with Kafka, security with Keycloak, and observability with Prometheus, Grafana, and Alertmanager.",
    },
    comingSoon: true,
    detailEnabled: false,
    role: {
      es: "Full-stack (arquitectura, backend Quarkus, observabilidad, integración frontend)",
      en: "Full-stack (architecture, Quarkus backend, observability, frontend integration)",
    },
    duration: { es: "3 meses", en: "3 months" },
    stack: ["Java (Quarkus)", "React", "Keycloak", "Kafka", "PostgreSQL", "Prometheus", "Grafana", "Alertmanager", "Docker", "CI/CD"],
    links: [
      { label: "github", href: "https://github.com/tuusuario/tu-repo" },
      { label: "demo", href: "https://tu-demo.vercel.app" },
    ],
    metrics: [
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "Monolito modular + microservicio", en: "Modular monolith + microservice" } },
      { label: { es: "Eventos", en: "Events" }, value: { es: "Kafka (event-driven)", en: "Kafka (event-driven)" } },
      { label: { es: "Observabilidad", en: "Observability" }, value: { es: "Prometheus + Grafana + Alertmanager", en: "Prometheus + Grafana + Alertmanager" } },
    ],
    media: {
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
          es: "Plataforma para gestionar accesos con multitenancy, auditoría y decisiones desacopladas por eventos. Construida en Quarkus (monolito modular + microservicio) y frontend React.",
          en: "Access platform with multitenancy, auditing, and event-decoupled decisions. Built in Quarkus (modular monolith + microservice) with a React frontend.",
        },
      },
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "Core en Quarkus como monolito modular (dominios separados), más un microservicio para integración/edge. Eventos con Kafka y seguridad centralizada con Keycloak.",
          en: "Core in Quarkus as a modular monolith (separated domains) plus a microservice for integration/edge. Kafka for events and centralized security with Keycloak.",
        },
      },
      {
        id: "features",
        title: { es: "Funcionalidades clave", en: "Key features" },
        body: {
          es: "Gestión de residentes/áreas/dispositivos, intentos y decisiones de acceso, trazabilidad completa, y panel de operación en React.",
          en: "Residents/areas/devices management, access attempts and decisions, full traceability, and an operations panel in React.",
        },
      },
      {
        id: "results",
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "Base sólida para producción con seguridad, eventos y observabilidad: métricas, dashboards y alertas operativas.",
          en: "Production-grade foundation with security, events, and observability: metrics, dashboards, and operational alerts.",
        },
      },
    ],
  },

  // =========================
  // REST (NON-FEATURED)
  // =========================

  {
    id: "diagseg",
    year: "2025",
    category: "fullstack",
    title: { es: "DiagSEG", en: "DiagSEG" },
    description: {
      es: "Aplicación para evaluar riesgo de IPs y dominios usando reglas e integraciones con múltiples fuentes. Backend en Quarkus y frontend en Vue.",
      en: "App to assess risk for IPs and domains using rules and integrations with multiple sources. Quarkus backend and Vue frontend.",
    },
    role: {
      es: "Backend (Quarkus) + Frontend (Vue) + integraciones",
      en: "Backend (Quarkus) + Frontend (Vue) + integrations",
    },
    duration: { es: "—", en: "—" },
    stack: ["Java (Quarkus)", "Vue", "PostgreSQL", "Docker", "Integrations"],
    links: [{ label: "github", href: "https://github.com/EngJuanSER/ASNs-Security/tree/main/Proyect" }],
    media: {
      videos: [
        {
          kind: "mp4",
          src: "/videos/diagseg/DiagSeg.mp4",
          title: { es: "Demo de DiagSEG", en: "DiagSEG demo" },
        },
      ],
    },
    sections: [
      {
        id: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Proyecto orientado a seguridad: integra fuentes y reglas para calificar dominios/IPs y facilitar diagnóstico.",
          en: "Security-oriented project: integrates sources and rules to score domains/IPs and support diagnosis.",
        },
      },
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "Backend en Quarkus que centraliza la lógica de scoring y persistencia; UI en Vue para consultar resultados e historial.",
          en: "Quarkus backend centralizing scoring logic and persistence; Vue UI to browse results and history.",
        },
      },
    ],
  },

  {
    id: "ecommerce-artesanias",
    year: "2024",
    category: "fullstack",
    title: { es: "E-commerce Artesanías", en: "Handicrafts E-commerce" },
    description: {
      es: "Plataforma e-commerce con microservicios en Express, comunicación por eventos con Kafka y frontend en React.",
      en: "E-commerce platform with Express microservices, Kafka event-driven communication, and a React frontend.",
    },
    role: { es: "Full-stack (microservicios, eventos, UI)", en: "Full-stack (microservices, events, UI)" },
    duration: { es: "—", en: "—" },
    stack: ["Node.js (Express)", "Kafka", "React", "PostgreSQL", "Docker"],
    links: [{ label: "github", href: "https://github.com/NicoG2023/Artesanias_Bogota_Ltda" }],
    media: {
      videos: [
        {
          kind: "mp4",
          src: "/videos/artesanias/ArtesaniasBogota.mp4",
          title: { es: "Demo general", en: "General demo" },
        },
        {
          kind: "mp4",
          src: "/videos/artesanias/ArtesaniasBogota-cliente.mp4",
          title: { es: "Video demo para caso cliente", en: "Client flow demo video" },
        },
        {
          kind: "mp4",
          src: "/videos/artesanias/ArtesaniasBogota-staff.mp4",
          title: { es: "Video demo para caso staff", en: "Staff flow demo video" },
        },
      ],
    },
    sections: [
      {
        id: "architecture",
        title: { es: "Arquitectura", en: "Architecture" },
        body: {
          es: "Microservicios desacoplados con comunicación asíncrona (eventos Kafka) para flujos clave del negocio.",
          en: "Decoupled microservices with asynchronous communication (Kafka events) for key business flows.",
        },
      },
      {
        id: "results",
        title: { es: "Resultados", en: "Results" },
        body: {
          es: "Base escalable para catálogo/órdenes, integración entre servicios y UI React para el flujo de compra.",
          en: "Scalable base for catalog/orders, service integration, and a React UI for the purchase flow.",
        },
      },
    ],
  },

  {
    id: "restaurant-app",
    year: "2024",
    category: "fullstack",
    title: { es: "Aplicación Restaurante", en: "Restaurant App" },
    description: {
      es: "Sistema en Django + React: clientes ordenan desde la app y el restaurante gestiona mesas, órdenes, empleados y operación.",
      en: "Django + React system: customers order in-app and the restaurant manages tables, orders, employees, and operations.",
    },
    role: { es: "Full-stack (backend Django, UI React)", en: "Full-stack (Django backend, React UI)" },
    duration: { es: "—", en: "—" },
    stack: ["Python (Django)", "React", "PostgreSQL", "Docker"],
    links: [{ label: "github", href: "https://github.com/NicoG2023/App-Restaurante" }],
    media: {
      videos: [
        {
          kind: "mp4",
          src: "/videos/Restaurante/AppRestaurante.mp4",
          title: { es: "Demo del sistema", en: "System demo" },
        },
      ],
    },
    sections: [
      {
        id: "features",
        title: { es: "Funcionalidades clave", en: "Key features" },
        body: {
          es: "Órdenes, gestión de mesas, empleados, clientes y estados de servicio.",
          en: "Ordering flow, table management, staff and customer management, and service states.",
        },
      },
    ],
  },

  {
    id: "academic-cli",
    year: "2022",
    category: "backend",
    title: { es: "Sistema Académico CLI (C++ + estructuras desde cero)", en: "Academic CLI System (C++ + data structures from scratch)" },
    description: {
      es: "Sistema de gestión académica en C++ (CLI) construido sin librerías modernas: estructuras de datos implementadas desde cero. Usa un árbol AVL con multilistas para gestionar notas de forma eficiente.",
      en: "Academic management system in C++ (CLI) built without modern libraries: data structures implemented from scratch. Uses an AVL tree with multilists for efficient grade management.",
    },
    role: { es: "Backend/algoritmos (diseño e implementación de estructuras de datos)", en: "Backend/algorithms (data structure design & implementation)" },
    duration: { es: "—", en: "—" },
    stack: ["C++ (legacy standard)", "CLI", "AVL Tree", "Multilists", "File I/O"],
    links: [{ label: "github", href: "https://github.com/NicoG2023/Sistema-Academico-CLI" }],
    media: {
      images: [
        {
          src: "/images/SistemaAcademico/SistemaAcademico1.png",
          alt: { es: "Vista del sistema", en: "System view" },
        },
        {
          src: "/images/SistemaAcademico/SistemaAcademico2.png",
          alt: { es: "Menús y reportes", en: "Menus and reports" },
        },
      ],
    },
    sections: [
      {
        id: "overview",
        title: { es: "Resumen", en: "Overview" },
        body: {
          es: "Proyecto orientado a fundamentos: implementar estructuras y operaciones desde cero para modelar cursos, estudiantes y notas en una aplicación de consola.",
          en: "Fundamentals-focused project: implement data structures and operations from scratch to model courses, students, and grades in a CLI app.",
        },
      },
      {
        id: "architecture",
        title: { es: "Estructura de datos", en: "Data structure" },
        body: {
          es: "Un árbol AVL organiza entidades principales y, en cada nodo, multilistas permiten relacionar materias/estudiantes/notas de forma eficiente.",
          en: "An AVL tree organizes core entities and, per node, multilists connect subjects/students/grades efficiently.",
        },
      },
      {
        id: "challenges",
        title: { es: "Retos", en: "Challenges" },
        body: {
          es: "Mantener consistencia y rendimiento sin STL moderna: punteros, balanceo AVL, inserciones/borrados y recorridos para reportes.",
          en: "Keeping consistency and performance without modern STL: pointers, AVL balancing, insert/delete operations, and traversals for reporting.",
        },
      },
    ],
  },
];
