## 2024-06-14 - [State Localization in App.jsx]
**Learning:** In the default Vite + React template, the `App` component holds the `count` state, causing the entire app (including static logos and headers) to re-render on every increment. Isolating this volatile state into a `Counter` component prevents these unnecessary re-renders.
**Action:** Always check if parent components are re-rendering due to child-specific state and apply state localization where appropriate.
