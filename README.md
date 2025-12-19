🚀 Web Portfolio – Frontend Architecture

Modern frontend application built with React + Vite, designed with a strict separation between development and production environments, and securely exposed using Cloudflare Tunnel.

🧠 Technical Approach

This project prioritizes:

Clear architecture over magic

True hot reload during development

Deterministic, reproducible production builds

Zero coupling between environments

Secure deployment with no public ports

Single codebase, two fully isolated runtimes.

🧱 Tech Stack

React 18

Vite

Docker (multi-stage builds)

Nginx (production)

Cloudflare Tunnel

Linux containers

🧪 Development (DX first)

Vite dev server with Hot Module Reload

Source code mounted as a volume

Dependencies managed inside the container

Secure remote access via Cloudflare Tunnel

Code changes = instant feedback
No rebuilds, no restarts, no friction

🚀 Production (ops first)

Optimized static build (vite build)

Served by Nginx

No Node.js at runtime

No volumes

Minimal, reproducible image

What gets tested is exactly what gets deployed

🌐 Networking & Security

No publicly exposed ports

Traffic flows exclusively through Cloudflare Tunnel

Complete isolation between dev and prod environments

Suitable for home labs, VPS, or self-hosted setups

🧩 Design Principles

Single source of truth

Fail fast

Explicit over implicit

Infrastructure ≠ application code

Debuggable > “easy”

📂 Code & Documentation

Full technical README in the repository

Architecture and debugging documentation

Clear operational commands

👋 About the Author

Developer focused on frontend architecture, developer experience, lightweight infrastructure, and maintainable systems.
I care about things working today — and still working months from now.
