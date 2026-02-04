/**
 * Technology stack configuration - Technical expertise matrix
 */

export interface StackLayer {
  layer: string;
  technologies: string[];
  expertiseLevel:
    | "Architecture & Optimization"
    | "Microservices & API Design"
    | "Schema Design & Query Tuning"
    | "High Availability & Auto-scaling";
  description: string;
}

export const stackLayers: StackLayer[] = [
  {
    layer: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    expertiseLevel: "Architecture & Optimization",
    description:
      "Modern UI frameworks with SSR, CSR, and optimal bundle splitting",
  },
  {
    layer: "Backend",
    technologies: ["Node.js", "PHP", "Python", "Express", "FastAPI"],
    expertiseLevel: "Microservices & API Design",
    description:
      "RESTful APIs, GraphQL, WebSocket communication, and microservice orchestration",
  },
  {
    layer: "Database",
    technologies: ["MySQL", "MongoDB", "Redis"],
    expertiseLevel: "Schema Design & Query Tuning",
    description:
      "Relational and NoSQL databases with advanced query optimization",
  },
  {
    layer: "Infrastructure",
    technologies: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
    expertiseLevel: "High Availability & Auto-scaling",
    description:
      "Container orchestration, cloud infrastructure, and automated deployments",
  },
];

export const additionalSkills = [
  "WebSocket & Real-time Communication",
  "Message Queues (RabbitMQ, Kafka)",
  "Monitoring & Observability (Grafana, Sentry)",
  // "Security Best Practices (OWASP)",
  "Load Balancing & Caching Strategies",
];
