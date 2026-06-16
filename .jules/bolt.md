## 2025-06-16 - Performance Pattern: State Localization
**Learning:** Moving volatile state (like a counter) into a separate child component prevents the parent component and its other children from re-rendering. In this Vite + React 19 app, the App component's static sections (logos, headers) were re-rendering on every count increment.
**Action:** Use state localization (colocation) to isolate state in the smallest possible component scope.
