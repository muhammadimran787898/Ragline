---
name: threejs-animation
description: Build restrained Three.js backgrounds and interactive animation for the Enragline marketing page, preserving responsive content and brand colors.
---

# Enragline Three.js animation

Use Three.js for requested spatial or shader animation; use CSS for ordinary hover, accordion, and entrance transitions.

- Preserve the existing 1024px content width. Full-width backgrounds and architectural bands sit outside that content constraint.
- Keep canvas decoration behind semantic HTML. Never put navigation or essential copy inside WebGL.
- Use the Enragline violet, blue, red, and amber palette. Keep the center of the hero quiet and readable.
- Load Three.js on the client with a dynamic import. Provide a CSS background when WebGL is unavailable.
- Synchronize the canvas with a React ref lifecycle. Cancel asynchronous initialization after unmount, dispose geometry/material/renderer, and disconnect observers and listeners.
- Cap pixel ratio at 1.5, resize with ResizeObserver, and stop continuous rendering when the canvas is offscreen or the document is hidden.
- Respect live changes to prefers-reduced-motion: render a still frame rather than an animation loop.
- Verify mobile widths of 320px, 375px, and 768px plus desktop: no horizontal scrolling, usable navigation, readable text, and no console errors.
- Consult the installed Three.js API and official https://threejs.org/docs/ for version-specific behavior.
