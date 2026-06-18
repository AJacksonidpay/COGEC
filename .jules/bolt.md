## 2025-06-18 - [SVG Inlining via Minification]
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets slightly above this limit (like the default `react.svg` at 4126 bytes) trigger a separate network request. Minifying these assets below the threshold allows them to be inlined as base64 in the JS bundle, saving a round-trip.
**Action:** Always check asset sizes against the 4KB threshold and use `svgo` to bring them under the limit if possible.
