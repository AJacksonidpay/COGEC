## 2026-06-20 - [Vite Asset Inlining Threshold]
**Learning:** Vite inlines assets smaller than 4096 bytes as base64 strings by default. Assets just above this limit (like the original 4126-byte react.svg) cause an extra network request.
**Action:** Always check asset sizes against the 4KB threshold and minify SVGs using `svgo` if they are close to the limit to enable automatic inlining.
