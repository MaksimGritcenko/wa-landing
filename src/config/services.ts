/**
 * Services configuration - 4 core service offerings
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "code" | "refresh" | "bug" | "shield";
  features: string[];
}

export const services: Service[] = [
  {
    id: "mvp",
    title: "Web Application MVP (A-Z)",
    description:
      "Full-stack development from concept to production deployment. Modern architecture, scalable infrastructure, and production-ready code.",
    icon: "code",
    features: [
      "Architecture & Design",
      "Frontend + Backend Development",
      "Database Schema Design",
      "CI/CD Pipeline Setup",
      "Production Deployment",
    ],
  },
  {
    id: "rewrite",
    title: "Legacy Rewrite & Modernization",
    description:
      "Transform outdated codebases into modern, maintainable systems. Strategic migration with improved performance.",
    icon: "refresh",
    features: [
      "Codebase Analysis",
      "Migration Strategy",
      "Refactoring",
      "Performance Optimization",
      "Team Knowledge Transfer",
    ],
  },
  {
    id: "debugging",
    title: "Bug Fixing & Performance Audit",
    description:
      "Deep-dive debugging and performance optimization. Identify bottlenecks, fix critical bugs, and improve system reliability.",
    icon: "bug",
    features: [
      "Root Cause Analysis",
      "Performance Profiling",
      "Memory Leak Detection",
      "Query Optimization",
      // "Load Testing",
    ],
  },

  {
    id: "alignment",
    title: "Codebase Alignment (Best Practices)",
    description:
      "Implement industry best practices and coding standards. Architecture improvements, and documentation.",
    icon: "shield",
    features: [
      "Code Quality Audit",
      "Testing Strategy",
      // "Security Review",
      "Documentation",
      "Team Training",
    ],
  },
];
