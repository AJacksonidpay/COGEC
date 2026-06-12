## 2026-06-12 - [Asset Inlining Threshold Optimization]
**Learning:** Vite's default asset inlining threshold is 4096 bytes. In this codebase, `react.svg` was originally 4126 bytes, causing it to be emitted as a separate network request. Minor SVG minification (removing redundant attributes like `xmlns:xlink` and `preserveAspectRatio`) brought it down to 4016 bytes, triggering inlining into the JS bundle.
**Action:** Always check asset sizes against the 4KB threshold in Vite projects. Small minifications can eliminate network requests without changing visual quality.
