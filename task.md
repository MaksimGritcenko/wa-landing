This plan outlines a high-end, technical landing page for your web agency, specifically tailored for Claude Code to execute.Design Philosophy (2026 Modernist)Following your requirements, the aesthetic is "Floating Minimalism."No Shadows / No Left Borders: We will replace depth (shadows) with Glassmorphism and Thin Outline Dividers (using border-slate-800 or subtle gradients).Animations: We will use Framer Motion for "Liquid Motion" effects—elements should feel like they are floating in high-viscosity fluid rather than just snapping into place.🛠 Tech Stack & ArchitectureFrontend: Next.js 15 (App Router), Tailwind CSS, Framer Motion.Backend: Node.js (MERN) + PHP/Python Microservices.Infra: K8s-ready Docker configurations.Mobile: React Native (shared UI logic/components).📋 Implementation Plan for Claude CodePhase 1: Core Layout & Global StylesPrompt for Claude: > "Initialize a Next.js 15 project with Tailwind CSS. Set up a global theme in tailwind.config.ts using a dark 'Obsidian' palette. Strict rule: Disable all box-shadows and remove all border-l utilities. Use subtle border-b or full border with 0.5px width for section separation."Phase 2: Hero Section (The "Mastery" Hook)Content: 7+ Years of Production Experience.Animation: Use a "Kinetic Typography" effect where keywords like Scalable, Robust, and High-Performance cycle with a blur-in effect.Visual: A background "Network Web" using Three.js or a lightweight SVG path animation representing your WebSocket & K8s connectivity.Phase 3: Interactive Services Grid (The Market Suggestion)Instead of static cards, create "Active Nodes."Card 1: Web Application MVP (A-Z).Card 2: Legacy Rewrite & Modernization.Card 3: Bug Squashing & Performance Audit.Card 4: Codebase Alignment (Best Practices).Animation Prompt for Claude:"Create a 2x2 grid of cards. On hover, the card should scale slightly (1.02) and trigger a 'border-glow' animation using a CSS variable gradient that travels around the perimeter. Inside the card, icons should perform a subtle 'micro-bounce' using Framer Motion's spring physics."Phase 4: The "Stack Deep-Dive" SectionOrganize your expertise into a technical matrix to show your solid knowledge:LayerTechnologiesExpertise LevelFrontendNext.js, React, TailwindArchitecture & SSR OptimizationBackendNode.js, PHP, PythonMicroservices & API DesignDatabaseMySQL, Redis, MongoDBSchema Design & Query TuningInfraK8s, Docker, CI/CDHigh Availability & Auto-scalingPhase 5: High-Performance FormsDesign: Floating labels with no side borders.Animation: On focus, the bottom border should expand from the center using:initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }}🚀 The Claude Code "System Prompt"Copy and paste this into Claude to start the build:MarkdownRole: Senior Full-Stack Engineer & UI/UX Expert.
Task: Build a landing page for a premium web agency.

Constraints:

- No box-shadows.
- No left borders.
- Use Next.js 15 + Framer Motion.
- Theme: Tech-noir (Dark).
  Content Highlights:
- "7+ Years of Production Experience."
- "Specializing in MVP A-Z, Stack Rewrites, and K8s Infrastructure."
- "Mastery in MERN, PHP, Python, and WebSocket communication."
  Animation Style:
- Cards: Scale + perimeter stroke flow on hover.
- Inputs: Center-out underline expansion on focus.
- Buttons: Magnetic pull effect on cursor proximity.
