## 2025-06-26 - Asset Inlining via Minification
**Learning:** Vite's default asset inlining threshold is 4096 bytes. Assets slightly above this limit (like the original 4126-byte react.svg) are served as separate files. Minifying these assets below 4KB allows Vite to inline them as base64 strings in the JS bundle, saving a network request. Also, moving assets from 'public/' to 'src/assets/' and importing them allows Vite to process, minify, and potentially inline them.
**Action:** Always check asset sizes against the 4KB threshold and use 'svgo' to bring SVGs under it when possible. Reference assets in 'src/' instead of 'public/' to benefit from Vite's optimization pipeline.

## 2025-06-26 - Asset Pathing in index.html
**Learning:** For Vite to correctly process, hash, and path assets referenced in 'index.html', they must be pointed to using relative paths (e.g., './src/assets/logo.svg') rather than root-absolute paths (e.g., '/src/assets/logo.svg'). Root-absolute paths are often ignored by Vite's build pipeline, leading to broken links in production.
**Action:** Use relative paths for any assets moved from 'public/' to 'src/' when updating references in 'index.html'.
