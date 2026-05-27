# NodeNest_DEPIN

NodeNest_DEPIN is a Web3 modular edge computing device platform for running blockchain nodes, validator infrastructure, and decentralized physical infrastructure network workloads at the edge.

The project presents NodeNest as a plug-and-run hardware and software stack for operators who want to participate in blockchain networks without managing complex server infrastructure from scratch.

## Vision

Blockchain infrastructure is still difficult for everyday operators, communities, and small institutions to run reliably.

NodeNest_DEPIN is designed to make node operation more accessible through a purpose-built edge device experience: compact hardware, modular software, local dashboards, multilingual onboarding, and reward-oriented participation flows.

The long-term vision is to turn node operation into a clear, productized experience for DePIN, validator networks, rollups, data availability layers, RPC services, and community-run blockchain infrastructure.

## Product Concept

NodeNest is built around four core ideas:

- Modular edge computing hardware
- Blockchain node runtime management
- DePIN participation and rewards
- Operator-friendly monitoring and onboarding

The platform should feel closer to a professional device dashboard than a generic marketing site. Users should understand what the device does, how it connects to networks, and how it can generate operational value.

## Core Capabilities

### Modular Edge Device

NodeNest is positioned as a physical edge computing device for Web3 infrastructure.

The device concept supports:

- Local node execution
- Always-on edge workloads
- Compact operator deployment
- Network-specific runtime modules
- Device edition comparison
- Hardware-oriented product presentation

### Blockchain Node Operations

NodeNest_DEPIN focuses on simplifying the lifecycle of running blockchain nodes.

Target node operation workflows include:

- Install and configure network modules
- Monitor node health
- Track sync and uptime status
- View resource usage
- Manage validator or service-node workloads
- Support future RPC, rollup, DA, and DePIN network integrations

### DePIN Rewards

NodeNest connects physical infrastructure participation with Web3 incentive systems.

The product narrative includes:

- Device-based contribution
- Node uptime rewards
- Community operator programs
- Network participation scoring
- Future token or point-based incentive layers

### Operator Dashboard

The frontend MVP includes dashboard-oriented experiences for presenting device activity and network participation.

The dashboard direction includes:

- Device overview
- Node status
- Network metrics
- Reward progress
- Product image gallery
- Admin product image management

## Current Application Scope

This repository contains the official NodeNest_DEPIN frontend base.

Implemented application areas include:

- Landing page
- Hero and product positioning sections
- Device showcase
- How-it-works section
- Dashboard preview
- Rewards section
- Product gallery
- Enhanced product gallery
- Newsletter section
- Community page
- Admin product gallery route
- Product image upload API routes
- Multilingual message and translation files
- NodeNest device and dashboard image assets
- shadcn/ui component system

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- next-intl
- Vercel Blob
- Lucide React

## Project Structure

```txt
app/
  admin/product-gallery/    Admin product gallery page
  api/product-images/       Product image listing API
  api/product-images/upload Product image upload API
  api/upload/               Upload API
  community/                Community route
  globals.css               App global styles
  layout.tsx                Root layout
  page.tsx                  Landing page

components/
  ui/                       shadcn/ui primitives
  dashboard.tsx             Device dashboard preview
  device-showcase.tsx       Product/device showcase
  hero.tsx                  Landing hero
  how-it-works.tsx          Operator workflow section
  image-uploader.tsx        Image upload UI
  navbar.tsx                Navigation
  newsletter.tsx            Newsletter CTA
  product-gallery.tsx       Product gallery
  product-gallery-enhanced.tsx
  rewards-section.tsx       DePIN reward narrative

contexts/
  language-context.tsx      Language state

lib/
  blob.ts                   Vercel Blob helper
  product-images.ts         Product image data
  utils.ts                  Shared utilities

messages/
  en.json
  es.json
  ko.json
  ru.json
  zh.json

public/images/
  NodeNest device, dashboard, logo, roadmap, and stack assets

translations/
  Localized copy files
```

## Development

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start production mode:

```bash
pnpm start
```

## Environment Variables

The current frontend can build without required environment variables.

For image upload or hosted asset workflows, configure Vercel Blob:

```txt
BLOB_READ_WRITE_TOKEN=
```

Future node infrastructure integrations may add:

```txt
NEXT_PUBLIC_NODE_API_URL=
NEXT_PUBLIC_NETWORK_STATUS_API=
NEXT_PUBLIC_REWARDS_API_URL=
NEXT_PUBLIC_DEVICE_REGISTRY_API=
```

## Product Direction

Near-term priorities:

- Stabilize the NodeNest product gallery and image management flow
- Connect dashboard cards to real device and node telemetry
- Define supported blockchain node modules
- Add operator onboarding and device activation flows
- Add DePIN reward and uptime tracking logic
- Prepare production deployment on Vercel

## Status

NodeNest_DEPIN is currently a frontend MVP and product base for a Web3 modular edge computing device platform.

The `node-nest.zip` base defines the official application structure, UI direction, image assets, and multilingual content foundation. Future development should preserve the hardware-first DePIN narrative and focus on making blockchain node operation clear, modular, and operator-friendly.
