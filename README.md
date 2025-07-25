# learning-react

 -------------------------------------
 
 # Beginner React Topics


## 1. JSX (JavaScript XML)
```
Theory: JSX allows writing HTML inside JavaScript. It's syntactic sugar for React.createElement.

Practice:

Create a functional component that returns a "Hello, World!" message.

Use inline styles in JSX.

Render dynamic data using JSX.

Interview Questions:

What is JSX?

Can browsers read JSX directly?

Why use JSX in React?

```

## 2. Functional Components vs Class Components
```

Theory: Functional components are simpler and are preferred in modern React. Class components are older and use this.

Practice:

Write both a class and functional component to display a user's name.

Convert a class component into a functional one using hooks.

Interview Questions:

Difference between class and functional components?

When to use each?
```

## 3. Props and State
```

Theory: Props are read-only and passed from parent to child. State is mutable and local to the component.

Practice:

Create a parent component that sends props to a child.

Add a button that changes state on click.

Interview Questions:

What is the difference between props and state?

Can you pass state as props?
```

## 4. useState Hook
```

Theory: Allows functional components to have local state.

Practice:

Build a counter with increment/decrement buttons.

Toggle a div’s visibility.

Interview Questions:

How does useState work?

Can you update state directly?
```

# 🟡 Intermediate React Topics
## 5. useEffect Hook
```

Theory: Performs side effects in function components (e.g., API calls, event listeners).

Practice:

Fetch data from a mock API when the component mounts.

Add/remove event listeners with cleanup.

Interview Questions:

How does useEffect differ from lifecycle methods?

What happens if you don’t use the dependency array?
```

## 6. Conditional Rendering
```

Theory: Conditionally render UI using ternary, &&, or if statements.

Practice:

Show login/logout buttons based on authentication state.

Interview Questions:

Different ways to conditionally render components?

Which is best for readability?
```

## 7. Lists and Keys
```

Theory: React uses keys to identify elements and optimize rendering.

Practice:

Render a list of users with unique keys.

Add delete functionality.

Interview Questions:

Why are keys important?

What happens if keys are not unique?
```

## 8. Forms and Controlled Components
```

Theory: Controlled components keep form input in sync with React state.

Practice:

Create a form with name, email, and password fields.

Show real-time form data below the form.

Interview Questions:

Difference between controlled and uncontrolled components?

How to validate form data?
```

# 🟠 Advanced React Topics
## 9. Context API
```

Theory: Provides global data access without prop drilling.

Practice:

Create a theme context with light/dark mode toggle.

Interview Questions:

What problem does Context API solve?

Difference between Context API and Redux?
```
## 10. useReducer Hook
```

Theory: An alternative to useState for complex state logic.

Practice:

Create a todo app using useReducer.

Interview Questions:

When to use useReducer over useState?

How does reducer improve performance?
```
## 11. Custom Hooks
```

Theory: Reusable logic using hooks.

Practice:

Create a custom hook for form handling.

Create a useFetch hook to reuse API logic.

Interview Questions:

What are custom hooks?

Can hooks call other hooks?
```
## 12. React Router
```

Theory: Handles navigation in single-page applications.

Practice:

Create a SPA with Home, About, and Contact pages.

Use useParams and useNavigate.

Interview Questions:

How does React Router differ from traditional navigation?

What is the purpose of <Outlet>?
```

## 13. React Performance Optimization
```

Theory: Techniques include memoization, lazy loading, virtualization.

Practice:

Use React.memo, useCallback, and useMemo.

Lazy load components with React.lazy.

Interview Questions:

How do you optimize rendering?

What is the difference between React.memo and useMemo?
```

## 14. Testing in React
```

Theory: Unit and integration tests using libraries like Jest and React Testing Library.

Practice:

Write a test for a simple component that renders a prop.

Test a button click using fireEvent.

Interview Questions:

How do you test a component?

What is snapshot testing?
```

# 🔴 Expert React Topics
## 15. Code Splitting and Lazy Loading
```

Theory: Improves performance by loading components only when needed.

Practice:

Use React.lazy and Suspense.

Interview Questions:

How does lazy loading work in React?

What is dynamic import?
```

## 16. Server-Side Rendering (SSR) & Next.js
```

Theory: SSR helps with SEO and faster page loads. Next.js is a framework for SSR React apps.

Practice:

Create a basic Next.js app with dynamic routing.

Fetch data using getServerSideProps.

Interview Questions:

Benefits of SSR vs CSR?

What is hydration?
```

## 17. React Query / TanStack Query
```

Theory: Handles server state, caching, background refetching, etc.

Practice:

Fetch and cache API data using useQuery.

Interview Questions:

Why use React Query over useEffect?

How does caching work?
```


# 🧠 SullyBud Style Project Practice (Mini Projects)
```


     Project Name	                       Topics Covered
Todo App	-                   useState, props, lists, conditional rendering
Weather App	-                   useEffect, API calls, error handling
Blog Manager -               	useReducer, Context, form handling
React Auth App - 	            routing, context, protected routes
Dark Mode Switcher - 	        context API, useEffect, localStorage
React + Firebase Notes App - 	CRUD operations, real-time DB, custom hooks
E-commerce Cart	 -              Redux / useReducer, conditional rendering, cart logic
```
