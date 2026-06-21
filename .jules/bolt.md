## 2026-06-21 - Asset Inlining Optimization
**Learning:** Vite has a default asset inlining threshold of 4096 bytes (4KB). Assets larger than this are served as separate files, while smaller assets are inlined as base64 strings in the JS bundle. Minifying SVGs that are slightly over this limit can save a network request.
**Action:** Always check the size of static assets. If an SVG is slightly above 4KB, use `svgo` to minify it and trigger Vite's inlining.
