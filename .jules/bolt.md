## 2025-06-17 - [SVG Inlining via Minification]
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets just over this limit (like the default `react.svg` at 4126 bytes) trigger separate network requests. Minifying these assets below the threshold allows Vite to inline them as base64 in the bundle.
**Action:** Use `svgo` to minify SVGs that are near the 4KB limit to ensure they are inlined, reducing the number of network requests.
