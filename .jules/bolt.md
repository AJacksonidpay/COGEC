## 2025-05-15 - State Isolation for Re-render Optimization
**Learning:** In React, moving state down to the smallest possible component subtree is a simple but effective way to prevent unnecessary re-renders of unrelated UI elements (like heavy logos or static headers).
**Action:** Always check if state used in a large component can be encapsulated in a smaller, specialized child component.
