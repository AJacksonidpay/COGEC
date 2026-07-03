## 2026-07-03 - Vite Asset Inlining Threshold
**Learning:** Vite has a default `assetsInlineLimit` of 4096 bytes (4KB). Assets larger than this are emitted as separate files, while smaller ones are inlined as base64 in the JS bundle. Minifying assets just below this threshold can save a network request without increasing bundle size significantly compared to the original unminified asset.
**Action:** When working with small SVGs or images, check their size against the 4KB limit. Use `svgo` or other minification tools to push them under the threshold if they are close.
