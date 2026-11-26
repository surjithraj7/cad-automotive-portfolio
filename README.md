# SURJITH RAJ S — CAD Design & Automotive Engineering Portfolio

Interactive engineering portfolio showcasing completed **FreeCAD**, **Blender**, and **AutoCAD** design work alongside CNC & G-Code shop-floor experience and B.Tech CSE projects.

## Featured CAD & 3D Projects

- **Floating Wave Brake Disc Rotor Assembly** — FreeCAD 1.1.3 parametric 12-solid assembly (`STEP`/`STL` validated)
- **VX-01 Aeroform Formula Concept** — 131-part formula vehicle & aerodynamic package
- **Buggy 22 — Off-Road Spaceframe & Vehicle** — FreeCAD parametric chassis + Blender 5.2 PBR studio render
- **2.0 L Inline-Four DOHC 16-Valve Engine** — Cutaway assembly with rotating internals
- **2-Stroke Single-Cylinder Engine Cutaway** — 19-part reed-valve air-cooled cutaway
- **Farview Helical Torsion Spring & TechDraw** — Parametric spring + 1:1 engineering drawing (`Rev A`)
- **Bearing Pedestal Mounting Bracket** — Reverse-engineered clevis bracket with surface area metrology
- **SHIELD OS — 8.4 m Tunnel Boring Machine** — Procedural Blender 5.2 EPB TBM visualization
- **Modern Two-Storey Residence & Interiors** — Architectural massing & interior EEVEE GI visualization

## Features

- Category filtering across 7 engineering disciplines
- Interactive Three.js WebGL 3D `.glb` viewer (`OrbitControls`, wireframe & grid toggles)
- High-resolution multi-angle image gallery + full-screen lightbox
- Interactive Before / After comparison slider
- Responsive dark-charcoal automotive engineering layout

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy on Render

This repository includes a [render.yaml](render.yaml) Blueprint for **Render Static Site** hosting:

- **One-click Blueprint Deploy:** https://render.com/deploy?repo=https://github.com/surjithraj7/cad-automotive-portfolio
- **Manual Render Static Site settings:**
  - **Build Command:** `npm ci && npm run build`
  - **Publish Directory:** `dist`

