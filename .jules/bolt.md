## 2025-06-30 - SVG Inlining and Asset Management
**Learning:** Vite inlines assets smaller than 4KB (4096 bytes) as base64 strings in the JS bundle. To enable this, assets must be in the `src/` directory and imported via relative paths. Assets in `public/` are never inlined. Minifying SVGs with `svgo` can bring them under this threshold.
**Action:** Always move small assets (like logos) from `public/` to `src/assets/`, minify them to ensure they are under 4KB, and use relative imports.
