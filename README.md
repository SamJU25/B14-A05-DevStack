# 🧱 DevStack - Development Stack Builder

**DevStack** is an interactive web application that helps developers explore, compare, and build their custom tech stacks. Whether you are planning a new side project or organizing full-stack technologies, DevStack provides a quick visual way to select frontend, backend, database, language, styling, and DevOps tools.

---

## 🔗 Live Demo & Links
- **Live Preview**: https://devstack-alpha.vercel.app/
- **GitHub Repository**: [https://github.com/SamJU25/B14-A05-DevStack](https://github.com/SamJU25/B14-A05-DevStack)

---

## 🛠️ Built With
- **React.js** - Component-based UI library (Hooks, Props, State)
- **Vite** - Fast local development environment and build tool
- **Tailwind CSS** - Utility-first styling for clean, responsive layout
- **React-Toastify** - User-friendly toast notifications for actions
- **JSON** - Tech stack dataset loaded dynamically via `fetch`

---

## ✨ Key Features
1. **Interactive Stack Builder**: Browse through categorized cards and click "Add to Stack" to compile items into the right-hand panel. Added cards are disabled to keep the stack organized.
2. **Duplicate Prevention & Alerts**: Prevents adding the same technology twice with a warning alert. Actions like adding items, deleting a single item, or clearing the entire stack trigger clear toast feedback.
3. **Responsive Design with Theme Gradient**: Fully responsive on desktop, tablet, and mobile (featuring a hamburger menu drawer). Powered by a unified brand gradient (Orange → Pink → Violet) defined in one place.

---

## 💡 React Concepts & Learnings

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for JavaScript XML. It lets developers write HTML-style code directly inside JavaScript files. It is used because it makes UI markup easy to write and understand alongside component logic, instead of having to call raw `React.createElement()` functions.

### 2. What is the difference between props and state?
**Answer:**  
- **Props**: Data passed down from a parent component to a child component. Props are read-only for the child and cannot be modified directly by it.
- **State**: Internal data managed directly inside a component. State changes over time based on user interactions (like clicking buttons). When state updates, React automatically re-renders the component to update the UI.

### 3. What does the `useState` hook do, and where is it used in this project?
**Answer:**  
The `useState` hook lets functional components declare and update local state variables. In this project, it is used in:
- `App.jsx` for `technologies` (storing the fetched technology list), `stack` (selected items), and `loading` (data loading state).
- `Navbar.jsx` for `isMobileMenuOpen` (opening and closing the mobile navigation menu).

### 4. What does the `useEffect` hook do, and why is it needed to load the JSON data?
**Answer:**  
The `useEffect` hook handles side effects in components, such as fetching data from an external file or API. It was used here with an empty dependency array `[]` so that `fetch('/technologies.json')` runs only once when the app mounts. Without `useEffect`, fetching data directly in the component would cause an infinite re-render loop.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React relies on the `key` prop (like `tech.id`) to track which items in a list have been added, updated, or removed. A unique key helps React update only that specific DOM node instead of re-rendering the whole list, improving performance and avoiding rendering glitches.

### 6. What is conditional rendering? (Example from this project)
**Answer:**  
Conditional rendering means showing different UI elements based on certain conditions or state values. In this project, it is used in `YourStack.jsx`:
```jsx
{isStackEmpty ? (
  <div className="empty-box">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div className="stack-items">
    {/* List of selected items */}
  </div>
)}
```
It is also used on the card button to conditionally show `"✓ Added to Stack"` when the technology is already selected, or `"Add to Stack"` when it is available.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child**: Data is passed down through **props** as attributes (e.g., `<TechCard tech={tech} />`).
- **Child to Parent**: The parent passes a callback function down via props (e.g., `onAddToStack={handleAddToStack}`). When the user performs an action in the child (like clicking a button), the child calls that function with data as arguments (e.g., `onAddToStack(tech)`).
