## 2025-06-19 - Asset Inlining via SVG Optimization
**Learning:** Vite has a default asset inlining threshold of 4096 bytes. Assets slightly above this limit cause an extra network request in production. Minifying these assets below the threshold allows them to be bundled as base64 strings in the JS bundle.
**Action:** Always check the file size of small assets (SVGs, small PNGs) against the 4KB threshold and use optimization tools like `svgo` to bring them under the limit if possible.
