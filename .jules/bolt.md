# Bolt's Performance Journal

## 2025-06-23 - Vite Asset Inlining Optimization
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets in the `public/` directory are never inlined. Minifying SVGs below this threshold and moving them to `src/assets/` allows them to be bundled as base64 strings, saving network requests.
**Action:** Always check asset sizes and locations; use `svgo` to bring SVGs under the 4KB limit and ensure they are imported from `src/` to benefit from automatic inlining.
