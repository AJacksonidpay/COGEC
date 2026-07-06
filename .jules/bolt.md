## 2026-07-06 - Asset Inlining via Minification
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets slightly above this limit (like the 4126-byte React logo) can be minified below the threshold to save a network request without losing visual quality. Assets referenced in `index.html` (like favicons) are typically emitted as standalone files even if they are below the threshold and also imported in JS.
**Action:** Always check asset sizes against the 4KB threshold. If an asset is slightly over, try minifying it with `svgo` to enable inlining.
