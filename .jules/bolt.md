## 2026-06-15 - State Localization Pattern
**Learning:** Isolating volatile state into separate child components (state localization) prevents unnecessary re-renders of static sections in the parent component. This is especially effective for components with heavy static content or complex subtrees that don't depend on that state.
**Action:** When a component's state only affects a small part of its render output, move that state and the dependent JSX into a dedicated child component.
