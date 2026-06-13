## 2025-06-13 - Leveraging Vite Asset Inlining Threshold
**Learning:** Vite has a default asset inlining threshold of 4096 bytes (4KB). Assets smaller than this are inlined as base64 in the JS bundle, while larger ones are kept as separate files. In this project, `react.svg` was slightly over the limit (4126 bytes), causing an extra network request.
**Action:** Minify SVG assets that are close to the 4KB threshold using SVGO to trigger automatic inlining and reduce network overhead.
