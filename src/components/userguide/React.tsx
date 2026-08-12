import React, { useState, useMemo, useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
const SECTIONS = [
 {
  "id": "s1",
  "num": 1,
  "title": "React Fundamentals",
  "group": "Fundamentals",
  "overview": "React is a JavaScript library (not a full framework) for building user interfaces out of small, reusable pieces called components. It uses a declarative style: you describe *what* the UI should look like for a given state, and React figures out *how* to update the DOM to match.",
  "points": [
   "React \u2014 a UI library from Meta for building component-based interfaces.",
   "React Features \u2014 declarative UI, component-based, virtual DOM, one-way data binding, JSX, huge ecosystem, hooks.",
   "React Architecture \u2014 components at the top, virtual DOM diffing in the middle, real DOM updates at the bottom.",
   "SPA (Single Page Application) \u2014 one HTML shell, JS swaps views without full page reloads.",
   "Component-Based Architecture \u2014 UI split into independent, reusable, composable pieces.",
   "Declarative Programming \u2014 describe the end result; the library handles the steps.",
   "Imperative vs Declarative \u2014 imperative = 'do this, then this'; declarative = 'this is what it should look like'.",
   "React vs Angular \u2014 React is a view library + ecosystem choice; Angular is a full opinionated framework with built-in DI, routing, forms.",
   "React vs Vue \u2014 React uses JSX and is more 'just JavaScript'; Vue uses template syntax and is more batteries-included."
  ],
  "code": "// Imperative (vanilla JS)\nconst btn = document.createElement('button');\nbtn.textContent = 'Click me';\nbtn.onclick = () => alert('Hi');\ndocument.body.appendChild(btn);\n\n// Declarative (React)\nfunction App() {\n  return <button onClick={() => alert('Hi')}>Click me</button>;\n}",
  "compare": {
   "headers": [
    "Aspect",
    "React",
    "Angular",
    "Vue"
   ],
   "rows": [
    [
     "Type",
     "Library",
     "Framework",
     "Framework"
    ],
    [
     "Syntax",
     "JSX (JS + HTML)",
     "TypeScript + templates",
     "Templates (HTML-like)"
    ],
    [
     "Learning curve",
     "Moderate",
     "Steep",
     "Gentle"
    ],
    [
     "Data binding",
     "One-way",
     "Two-way",
     "Two-way (v-model)"
    ]
   ]
  }
 },
 {
  "id": "s2",
  "num": 2,
  "title": "JSX",
  "group": "Fundamentals",
  "overview": "JSX (JavaScript XML) lets you write HTML-like syntax directly inside JavaScript. It isn't understood by browsers directly \u2014 a transpiler (Babel/SWC) converts it into React.createElement() calls.",
  "points": [
   "JSX \u2014 syntax extension that looks like HTML but compiles to JS function calls.",
   "JSX Expressions \u2014 embed any JS expression using curly braces {expr}.",
   "JSX Attributes \u2014 camelCase props like className, onClick, tabIndex instead of HTML's class, onclick.",
   "JSX Fragments \u2014 <>...</> or <React.Fragment> group elements without adding an extra DOM node.",
   "JSX Comments \u2014 {/* comment */} inside JSX blocks.",
   "JSX Rules \u2014 must return a single root element (or Fragment), all tags must close, expressions only (no statements like if) inside {}.",
   "JSX Transpilation \u2014 Babel converts <div>Hi</div> into React.createElement('div', null, 'Hi').",
   "JSX vs HTML \u2014 JSX uses className not class, htmlFor not for, camelCase events, self-closing tags required (<img />)."
  ],
  "code": "function Greeting({ name }) {\n  const isMorning = new Date().getHours() < 12;\n  return (\n    <>\n      {/* fragment avoids an extra wrapper div */}\n      <h1 className=\"title\">Hello, {name}!</h1>\n      {isMorning ? <p>Good morning \u2600\ufe0f</p> : <p>Good day \ud83c\udf19</p>}\n    </>\n  );\n}\n// Compiles roughly to:\n// React.createElement('h1', {className:'title'}, 'Hello, ', name, '!')",
  "compare": null
 },
 {
  "id": "s3",
  "num": 3,
  "title": "Components",
  "group": "Fundamentals",
  "overview": "Components are the building blocks of a React app \u2014 independent, reusable pieces of UI that return JSX. Modern React overwhelmingly favors function components + hooks over class components.",
  "points": [
   "Functional Components \u2014 plain JS functions returning JSX; use hooks for state/effects.",
   "Class Components \u2014 ES6 classes extending React.Component with a render() method (legacy style).",
   "Component Composition \u2014 building complex UIs by nesting simpler components.",
   "Component Nesting \u2014 parent components render child components inside their JSX.",
   "Reusable Components \u2014 generic, prop-driven components used in many places (Button, Card, Modal).",
   "Presentational Components \u2014 focus purely on how things look (receive data via props).",
   "Container Components \u2014 focus on how things work (fetch data, manage state, pass down to presentational children).",
   "Pure Components \u2014 re-render only when props/state actually change (React.memo for functions, PureComponent for classes).",
   "Component Props \u2014 the read-only inputs passed into a component.",
   "children \u2014 special prop representing whatever is nested between a component's opening/closing tags.",
   "Component Naming \u2014 must start with a capital letter so React can distinguish it from a DOM tag.",
   "Component Design \u2014 keep components small, single-purpose, and composable."
  ],
  "code": "// Functional component\nfunction Card({ title, children }) {\n  return (\n    <div className=\"card\">\n      <h2>{title}</h2>\n      {children}\n    </div>\n  );\n}\n\n// Class component (legacy)\nclass OldCard extends React.Component {\n  render() {\n    return <div className=\"card\"><h2>{this.props.title}</h2></div>;\n  }\n}\n\n// Usage \u2014 composition + children\n<Card title=\"Profile\">\n  <p>This content becomes props.children</p>\n</Card>",
  "compare": null
 },
 {
  "id": "s4",
  "num": 4,
  "title": "Props",
  "group": "Fundamentals",
  "overview": "Props (short for 'properties') are how data flows from a parent component down into a child. Props are read-only \u2014 a component must never mutate its own props.",
  "points": [
   "Passing Props \u2014 <Child name=\"Alex\" age={20} /> passes name and age down.",
   "Props Destructuring \u2014 function Child({ name, age }) instead of props.name, props.age.",
   "Default Props \u2014 function Child({ size = 'medium' }) or Component.defaultProps.",
   "Props Validation \u2014 PropTypes or TypeScript interfaces to catch wrong prop shapes early.",
   "Props Drilling \u2014 passing a prop through many nested levels just to reach a deep child (solved by Context or state libraries).",
   "Function Props \u2014 passing callbacks (e.g. onSave) so children can notify parents of events.",
   "Object Props \u2014 passing whole objects, e.g. <UserCard user={userObj} />.",
   "Array Props \u2014 passing lists, e.g. <List items={[1,2,3]} />.",
   "Component Props \u2014 the general term for any data passed into a component.",
   "children Props \u2014 content nested between opening/closing tags, available as props.children."
  ],
  "code": "function Button({ label, onClick, variant = 'primary' }) {\n  return <button className={variant} onClick={onClick}>{label}</button>;\n}\n\nfunction Parent() {\n  const handleSave = () => console.log('saved!');\n  return <Button label=\"Save\" onClick={handleSave} />;\n}",
  "compare": null
 },
 {
  "id": "s5",
  "num": 5,
  "title": "State",
  "group": "Fundamentals",
  "overview": "State is data that a component owns and that can change over time. Updating state triggers a re-render. Unlike props, state is local and mutable (through its setter, never directly).",
  "points": [
   "Component State \u2014 data managed inside a component via useState/useReducer.",
   "Local State \u2014 state scoped to a single component (not shared globally).",
   "State Initialization \u2014 the starting value passed to useState(initialValue).",
   "State Updates \u2014 calling the setter function (setCount) schedules a re-render.",
   "State Immutability \u2014 never mutate state directly; always create a new object/array.",
   "Object State \u2014 spread the old object and override changed keys: setUser({...user, age: 21}).",
   "Array State \u2014 spread + add/filter/map instead of push/splice.",
   "Derived State \u2014 values computed from existing state/props rather than stored separately.",
   "State Batching \u2014 React groups multiple setState calls in one event handler into a single re-render.",
   "State Preservation \u2014 state persists across re-renders as long as the component stays in the same position in the tree.",
   "State Resetting \u2014 changing a component's `key` forces React to unmount/remount it, resetting state.",
   "Functional State Updates \u2014 setCount(prev => prev + 1) avoids stale-closure bugs when updating based on previous state."
  ],
  "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const [user, setUser] = useState({ name: 'Ana', age: 20 });\n\n  // \u274c mutating directly \u2014 won't trigger a re-render reliably\n  // user.age = 21;\n\n  // \u2705 immutable update\n  const birthday = () => setUser(prev => ({ ...prev, age: prev.age + 1 }));\n\n  // \u2705 functional update avoids stale state in rapid clicks\n  const incTwice = () => {\n    setCount(c => c + 1);\n    setCount(c => c + 1); // count goes +2, not +1\n  };\n\n  return <button onClick={incTwice}>{count} / {user.age}</button>;\n}",
  "compare": null
 },
 {
  "id": "s6",
  "num": 6,
  "title": "Events",
  "group": "Fundamentals",
  "overview": "React wraps native DOM events in SyntheticEvents \u2014 a cross-browser wrapper with the same interface everywhere. Event handlers are passed as camelCase props like onClick.",
  "points": [
   "Event Handling \u2014 pass a function reference: onClick={handleClick} (not onClick={handleClick()}).",
   "onClick / onChange / onSubmit / onFocus / onBlur / onKeyDown / onKeyUp \u2014 common synthetic event props.",
   "Mouse Events \u2014 onClick, onMouseEnter, onMouseLeave, onDoubleClick, etc.",
   "Keyboard Events \u2014 onKeyDown, onKeyUp, onKeyPress (deprecated), read e.key.",
   "Form Events \u2014 onChange, onSubmit, onInput for controlled inputs.",
   "Event Propagation \u2014 events bubble up through parent handlers by default.",
   "Event Bubbling \u2014 event fires on the target then travels up to ancestors.",
   "Event Capturing \u2014 opposite direction; use onClickCapture to listen during the capture phase.",
   "preventDefault \u2014 e.preventDefault() stops the browser's default action (e.g. form submit reload).",
   "stopPropagation \u2014 e.stopPropagation() stops the event from bubbling further."
  ],
  "code": "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();       // stop page reload\n    console.log('submitted');\n  };\n  const handleInnerClick = (e) => {\n    e.stopPropagation();      // don't let outer div's onClick fire\n    console.log('inner clicked');\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <div onClick={() => console.log('outer clicked')}>\n        <button onClick={handleInnerClick}>Click</button>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
  "compare": null
 },
 {
  "id": "s7",
  "num": 7,
  "title": "Conditional Rendering",
  "group": "Fundamentals",
  "overview": "React has no special template syntax for conditionals \u2014 you just use normal JavaScript expressions inside {}.",
  "points": [
   "if \u2014 use outside JSX (e.g. early return) since if is a statement, not an expression.",
   "Ternary Operator \u2014 condition ? <A/> : <B/>, works inline in JSX.",
   "Logical AND (&&) \u2014 condition && <A/> renders A only when condition is truthy (watch out for 0 rendering literally).",
   "Logical OR (||) \u2014 value || <Fallback/> renders a fallback when value is falsy.",
   "Switch Rendering \u2014 a switch statement (or lookup object) picking between several UI states.",
   "Conditional Components \u2014 swapping entire components based on state, e.g. LoggedIn vs LoggedOut.",
   "Loading States \u2014 show a spinner/skeleton while data is being fetched.",
   "Empty States \u2014 friendly message when a list/result set is empty.",
   "Error States \u2014 fallback UI when a request or render fails."
  ],
  "code": "function Status({ status, items }) {\n  if (status === 'loading') return <Spinner />;   // early return (if)\n  if (status === 'error') return <ErrorMsg />;     // error state\n\n  return (\n    <div>\n      {items.length === 0 ? (\n        <EmptyState />                              // ternary\n      ) : (\n        <List items={items} />\n      )}\n      {items.length > 0 && <p>{items.length} results</p> {/* && */}\n    </div>\n  );\n}",
  "compare": null
 },
 {
  "id": "s8",
  "num": 8,
  "title": "Lists",
  "group": "Fundamentals",
  "overview": "Rendering collections of data is done with array.map(), and each rendered item needs a stable, unique `key` prop so React can track it efficiently across re-renders.",
  "points": [
   "map() \u2014 transforms an array of data into an array of JSX elements.",
   "Dynamic Lists \u2014 lists whose content/length changes over time (fetched data, filtered results).",
   "Keys \u2014 a special string prop that helps React identify which items changed/added/removed.",
   "Unique Keys \u2014 keys must be unique among siblings (usually a database id).",
   "Key Identity \u2014 React uses keys, not array position, to match elements across renders.",
   "Index as Key \u2014 using the array index as key works only for static, never-reordered lists; otherwise it causes bugs (wrong state attached to wrong item).",
   "List Rendering \u2014 combine map() with JSX to output <li> etc.",
   "Nested Lists \u2014 lists of lists, e.g. categories each containing items \u2014 key at every level.",
   "List Performance \u2014 virtualization (windowing) for very large lists so only visible rows render."
  ],
  "code": "function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>{todo.text}</li>   // \u2705 stable unique id as key\n      ))}\n    </ul>\n  );\n}\n// \u274c Avoid: todos.map((todo, i) => <li key={i}>...) when list can reorder/filter</li>",
  "compare": null
 },
 {
  "id": "s9",
  "num": 9,
  "title": "Forms",
  "group": "Fundamentals",
  "overview": "Forms in React are usually 'controlled' \u2014 the input's value lives in React state, and every keystroke updates that state via onChange.",
  "points": [
   "Controlled Components \u2014 input value is driven by React state; single source of truth.",
   "Uncontrolled Components \u2014 input manages its own DOM state; React reads it via a ref when needed.",
   "Text Inputs \u2014 value={state} + onChange={e => setState(e.target.value)}.",
   "Checkbox \u2014 checked={state} + onChange reading e.target.checked.",
   "Radio Buttons \u2014 group of inputs sharing a name, one controlled state holds the selected value.",
   "Select \u2014 value on the <select>, onChange to update, <option> children.",
   "Multi-Select \u2014 <select multiple> or a list of checkboxes for multiple values.",
   "Textarea \u2014 controlled just like text input (React normalizes it to use a value prop, unlike HTML).",
   "File Upload \u2014 usually uncontrolled; read files from e.target.files (a FileList).",
   "Form Submission \u2014 handle via onSubmit on the <form>, call preventDefault().",
   "Form Validation \u2014 client-side checks (required, patterns) often paired with libraries like React Hook Form + Zod.",
   "Form Reset \u2014 clear state back to initial values, or call formRef.current.reset() for uncontrolled forms.",
   "Dynamic Forms \u2014 fields added/removed at runtime, each backed by an array in state."
  ],
  "code": "function LoginForm() {\n  const [email, setEmail] = useState('');\n  const fileRef = useRef(null); // uncontrolled\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(email, fileRef.current.files[0]);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={email} onChange={e => setEmail(e.target.value)} />\n      <input type=\"file\" ref={fileRef} />\n      <button type=\"submit\">Login</button>\n    </form>\n  );\n}",
  "compare": {
   "headers": [
    "Aspect",
    "Controlled",
    "Uncontrolled"
   ],
   "rows": [
    [
     "Source of truth",
     "React state",
     "The DOM itself"
    ],
    [
     "Read value",
     "From state",
     "Via ref (inputRef.current.value)"
    ],
    [
     "Validation timing",
     "On every change",
     "Usually on submit"
    ],
    [
     "Best for",
     "Most forms, instant validation",
     "Simple forms, file inputs, migrating legacy code"
    ]
   ]
  }
 },
 {
  "id": "s10",
  "num": 10,
  "title": "React Hooks",
  "group": "Hooks",
  "overview": "Hooks let function components use state, side effects, context, and more \u2014 without writing a class. They must follow strict rules to work correctly.",
  "points": [
   "Rules of Hooks \u2014 only call hooks at the top level (never in loops/conditions/nested functions), only call them from React function components or custom hooks.",
   "Built-in Hooks \u2014 useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback, etc. (provided by React).",
   "Custom Hooks \u2014 your own function starting with 'use' that composes built-in hooks for reusable logic.",
   "Hook Composition \u2014 combining multiple hooks inside one custom hook.",
   "State Hooks \u2014 useState, useReducer.",
   "Effect Hooks \u2014 useEffect, useLayoutEffect, useInsertionEffect.",
   "Context Hooks \u2014 useContext.",
   "Ref Hooks \u2014 useRef, useImperativeHandle.",
   "Performance Hooks \u2014 useMemo, useCallback, useTransition, useDeferredValue.",
   "Other Hooks \u2014 useId, useDebugValue, useSyncExternalStore."
  ],
  "code": "// \u274c breaks Rules of Hooks \u2014 conditional hook call\nfunction Bad({ show }) {\n  if (show) {\n    const [x] = useState(0); // NEVER do this\n  }\n}\n\n// \u2705 hook always called, condition applied to the logic instead\nfunction Good({ show }) {\n  const [x] = useState(0);\n  if (!show) return null;\n  return <div>{x}</div>;\n}",
  "compare": null
 },
 {
  "id": "s11",
  "num": 11,
  "title": "useState",
  "group": "Hooks",
  "overview": "useState adds local state to a function component. It returns a [value, setter] pair.",
  "points": [
   "State Initialization \u2014 const [state, setState] = useState(initialValue).",
   "Functional Updates \u2014 setState(prev => prev + 1) when the new value depends on the old one.",
   "Object State \u2014 spread previous state to update part of an object.",
   "Array State \u2014 spread/filter/map to add, remove, or update items immutably.",
   "Multiple State Variables \u2014 prefer several useState calls for unrelated values over one giant object.",
   "Lazy Initialization \u2014 useState(() => expensiveComputation()) so it only runs once, on mount.",
   "State Batching \u2014 multiple setState calls inside one handler are batched into a single re-render (React 18+ batches everywhere, even in promises/timeouts).",
   "State Immutability \u2014 always replace, never mutate, arrays/objects held in state."
  ],
  "code": "function Form() {\n  const [values, setValues] = useState({ name: '', email: '' });\n  const [big] = useState(() => computeExpensiveDefault()); // lazy init, runs once\n\n  const update = (key) => (e) =>\n    setValues(prev => ({ ...prev, [key]: e.target.value })); // object state\n\n  return (\n    <>\n      <input value={values.name} onChange={update('name')} />\n      <input value={values.email} onChange={update('email')} />\n    </>\n  );\n}",
  "compare": null
 },
 {
  "id": "s12",
  "num": 12,
  "title": "useEffect",
  "group": "Hooks",
  "overview": "useEffect runs side effects (data fetching, subscriptions, timers, manual DOM work) after render, and can clean up after itself.",
  "points": [
   "Effect Execution \u2014 runs after the DOM has been painted (asynchronously, after commit).",
   "Dependency Array \u2014 [dep1, dep2] controls when the effect re-runs; changed values trigger it again.",
   "Empty Dependency Array \u2014 [] means 'run once, on mount only'.",
   "Effect Cleanup \u2014 return a function from the effect to clean up (unsubscribe, clear timers) before the next run or on unmount.",
   "Mounting / Updating / Unmounting \u2014 the three lifecycle moments an effect can respond to.",
   "Effect Dependencies \u2014 must include every reactive value used inside the effect (ESLint's exhaustive-deps rule helps).",
   "Infinite Effect Loops \u2014 happens when an effect updates a state that's also in its own dependency array.",
   "Stale Effects \u2014 an effect closing over an old value because it wasn't in the dependency array (a 'stale closure').",
   "Effect Synchronization \u2014 think of useEffect as 'synchronize this component with an external system', not as a lifecycle hook."
  ],
  "code": "function Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(id); // cleanup on unmount/re-run\n  }, []); // run once\n\n  return <p>{seconds}s</p>;\n}\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  useEffect(() => {\n    let cancelled = false;\n    fetch(`/api/users/${userId}`).then(r => r.json()).then(data => {\n      if (!cancelled) setUser(data);\n    });\n    return () => { cancelled = true; }; // avoid setting state after unmount\n  }, [userId]); // re-fetch whenever userId changes\n\n  return <div>{user?.name}</div>;\n}",
  "compare": null
 },
 {
  "id": "s13",
  "num": 13,
  "title": "useRef",
  "group": "Hooks",
  "overview": "useRef gives you a mutable box (.current) that persists across renders without causing a re-render when it changes. Commonly used for DOM access and for storing values you don't want tied to rendering.",
  "points": [
   "DOM References \u2014 ref={myRef} then myRef.current is the actual DOM node.",
   "Mutable Values \u2014 store any value across renders without triggering re-renders (e.g. a timer id).",
   "Previous Values \u2014 store the previous prop/state value by updating a ref inside an effect.",
   "Instance-like Variables \u2014 mimic 'this.something' from class components.",
   "Focus Management \u2014 inputRef.current.focus() to programmatically focus an element.",
   "Avoiding Re-renders \u2014 unlike state, changing ref.current does not schedule a render."
  ],
  "code": "function SearchBox() {\n  const inputRef = useRef(null);\n  const renderCount = useRef(0);\n  renderCount.current++; // doesn't cause a re-render\n\n  useEffect(() => { inputRef.current.focus(); }, []); // focus on mount\n\n  return <input ref={inputRef} placeholder={`renders: ${renderCount.current}`} />;\n}",
  "compare": null
 },
 {
  "id": "s14",
  "num": 14,
  "title": "useContext",
  "group": "Hooks",
  "overview": "Context lets you share values (theme, auth user, locale) across a component tree without manually passing props at every level.",
  "points": [
   "Context Creation \u2014 const ThemeContext = createContext(defaultValue).",
   "Context Provider \u2014 <ThemeContext.Provider value={...}> wraps the subtree that should see the value.",
   "Context Consumer \u2014 the older render-prop API; mostly replaced by useContext.",
   "Context Value \u2014 whatever you pass to the Provider's `value` prop.",
   "Context API \u2014 createContext + Provider + useContext together.",
   "Context Performance \u2014 every consumer re-renders when the value changes, so avoid huge/rapidly changing objects; split contexts if needed.",
   "Multiple Contexts \u2014 you can nest/use as many contexts as needed (Theme, Auth, Locale, etc.).",
   "Context vs Props \u2014 Context skips 'prop drilling' for values many components need; props remain best for local, direct communication.",
   "Context vs Redux \u2014 Context is built-in and great for simple/rarely-changing global values; Redux/RTK adds devtools, middleware, and better performance for large, frequently-updating state."
  ],
  "code": "const ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  return <ThemedButton />; // no need to pass theme down manually\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Click</button>;\n}",
  "compare": {
   "headers": [
    "Aspect",
    "Context API",
    "Redux / RTK"
   ],
   "rows": [
    [
     "Setup",
     "Built into React",
     "External library"
    ],
    [
     "Best for",
     "Rarely-changing global values (theme, auth)",
     "Large, complex, frequently-updated state"
    ],
    [
     "DevTools",
     "None built-in",
     "Rich Redux DevTools (time travel)"
    ],
    [
     "Performance at scale",
     "Can cause broad re-renders",
     "Optimized selectors, less re-render overhead"
    ]
   ]
  }
 },
 {
  "id": "s15",
  "num": 15,
  "title": "Custom Hooks",
  "group": "Hooks",
  "overview": "A custom hook is just a JS function whose name starts with 'use' and that calls other hooks inside it \u2014 a way to extract and reuse stateful logic across components.",
  "points": [
   "Custom Hook Creation \u2014 write a function useSomething() that uses built-in hooks internally.",
   "Hook Reusability \u2014 share logic (not UI) across many components.",
   "Hook Composition \u2014 build bigger hooks out of smaller ones.",
   "Data Fetching Hooks \u2014 e.g. useFetch(url) wrapping useState + useEffect.",
   "Form Hooks \u2014 e.g. useForm() managing values, errors, and submit handling.",
   "Authentication Hooks \u2014 e.g. useAuth() exposing user, login(), logout().",
   "Local Storage Hooks \u2014 e.g. useLocalStorage(key, initial) syncing state with localStorage.",
   "Debounce Hooks \u2014 e.g. useDebounce(value, delay) delaying updates until typing pauses.",
   "Pagination Hooks \u2014 e.g. usePagination(items, pageSize) managing current page slice."
  ],
  "code": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    setLoading(true);\n    fetch(url).then(r => r.json()).then(setData).finally(() => setLoading(false));\n  }, [url]);\n\n  return { data, loading };\n}\n\n// Usage \u2014 logic is reusable across any component\nfunction Users() {\n  const { data, loading } = useFetch('/api/users');\n  if (loading) return <Spinner />;\n  return <List items={data} />;\n}",
  "compare": null
 },
 {
  "id": "s16",
  "num": 16,
  "title": "Component Lifecycle",
  "group": "Lifecycle",
  "overview": "Every component goes through mounting (created + inserted), updating (re-rendered due to new props/state), and unmounting (removed). Class components exposed this directly; hooks model it through useEffect.",
  "points": [
   "Mounting \u2014 component instance created and inserted into the DOM for the first time.",
   "Updating \u2014 re-renders triggered by new props, state, or context.",
   "Unmounting \u2014 component removed from the DOM (cleanup time).",
   "componentDidMount \u2014 class lifecycle method, runs once after first render (\u2248 useEffect(fn, [])).",
   "componentDidUpdate \u2014 class method after every update (\u2248 useEffect(fn, [deps])).",
   "componentWillUnmount \u2014 class method right before removal (\u2248 the cleanup function returned from useEffect).",
   "Lifecycle with Hooks \u2014 a single useEffect can cover mount+update+unmount depending on its dependency array and cleanup function."
  ],
  "code": null,
  "compare": {
   "headers": [
    "Class lifecycle",
    "Hook equivalent"
   ],
   "rows": [
    [
     "componentDidMount",
     "useEffect(fn, [])"
    ],
    [
     "componentDidUpdate",
     "useEffect(fn, [dep1, dep2])"
    ],
    [
     "componentWillUnmount",
     "useEffect(() => { return () => cleanup() }, [])"
    ]
   ]
  }
 },
 {
  "id": "s17",
  "num": 17,
  "title": "Virtual DOM",
  "group": "Rendering Internals",
  "overview": "React keeps a lightweight in-memory copy of the UI tree (the Virtual DOM). When state changes, React builds a new virtual tree, diffs it against the previous one, and applies only the minimal set of real DOM changes needed.",
  "points": [
   "Virtual DOM \u2014 a plain JS object representation of the UI, cheap to create and compare.",
   "Real DOM \u2014 the actual browser DOM, expensive to touch/read/write.",
   "Virtual DOM Tree \u2014 the nested object structure mirroring your component tree.",
   "Rendering \u2014 React calls your components to produce a new virtual tree.",
   "Re-rendering \u2014 happens when state/props/context change; produces a new virtual tree to diff.",
   "DOM Updates \u2014 only the differences ('patches') are applied to the real DOM.",
   "Reconciliation \u2014 the algorithm that compares old vs new virtual trees to compute the minimal patch."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s18",
  "num": 18,
  "title": "Reconciliation",
  "group": "Rendering Internals",
  "overview": "Reconciliation is React's diffing algorithm: it compares the previous and next virtual DOM trees and decides what actually needs to change in the real DOM.",
  "points": [
   "Reconciliation Algorithm \u2014 assumes elements of the same type produce similar trees; diffs children by key.",
   "Fiber \u2014 React's internal data structure/engine (since React 16) that makes reconciliation interruptible.",
   "Fiber Tree \u2014 a linked-list-like tree of 'fiber' nodes, one per component/element.",
   "Element Identity \u2014 same type + same key = React reuses/updates the existing instance instead of remounting.",
   "Component Identity \u2014 changing a component's type at the same position remounts it, losing state.",
   "Keys \u2014 tell React which array items map across renders (see Lists section).",
   "State Preservation \u2014 as long as type+key stay the same, state carries over between renders.",
   "Component Remounting \u2014 happens when key or type changes, wiping local state and re-running mount effects."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s19",
  "num": 19,
  "title": "Rendering",
  "group": "Rendering Internals",
  "overview": "Rendering is the process of React calling your components to figure out what should be on screen, split into a render phase (pure, no side effects) and a commit phase (actually touches the DOM).",
  "points": [
   "Initial Render \u2014 the first time a component tree is rendered and mounted.",
   "Re-render \u2014 subsequent renders triggered by state/props/context changes.",
   "Render Phase \u2014 React calls components and computes the virtual DOM diff (must be pure \u2014 no side effects here).",
   "Commit Phase \u2014 React applies the computed changes to the real DOM and runs effects.",
   "Browser Paint \u2014 the browser visually updates the screen after the commit phase.",
   "Render Optimization \u2014 memoization, splitting components, avoiding unnecessary state changes.",
   "Render Bailout \u2014 React skips re-rendering a subtree if props/state are referentially equal (e.g. via React.memo).",
   "Strict Mode Rendering \u2014 <React.StrictMode> intentionally double-invokes renders/effects in development to surface impure code."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s20",
  "num": 20,
  "title": "React Fiber",
  "group": "Rendering Internals",
  "overview": "Fiber is the reimplementation of React's core algorithm (React 16+) that enables incremental, interruptible rendering \u2014 the foundation for Concurrent React.",
  "points": [
   "Fiber Architecture \u2014 breaks rendering work into small units that can be paused, resumed, or abandoned.",
   "Fiber Tree \u2014 mirrors the component tree; each fiber node holds type, props, state, and pointers to related fibers.",
   "Work Units \u2014 rendering is split into small chunks instead of one giant blocking pass.",
   "Scheduling \u2014 React can prioritize urgent updates (typing) over less urgent ones (data fetched in background).",
   "Priorities \u2014 different update types get different priority levels internally.",
   "Interruptible Rendering \u2014 high-priority updates can pause in-progress low-priority rendering work.",
   "Concurrent Rendering \u2014 React can work on multiple versions of the UI 'in the background' before committing."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s21",
  "num": 21,
  "title": "React Performance",
  "group": "Performance",
  "overview": "React is fast by default, but larger apps benefit from deliberate optimization: avoiding unnecessary re-renders, shrinking bundles, and only rendering what's visible.",
  "points": [
   "React.memo \u2014 skips re-rendering a component if its props haven't changed.",
   "useMemo \u2014 caches an expensive computed value between renders.",
   "useCallback \u2014 caches a function reference between renders.",
   "Memoization \u2014 general technique of caching results to avoid recomputation.",
   "Preventing Re-renders \u2014 memoize components/values, keep state as local as possible, avoid inline object/array literals as props.",
   "Code Splitting \u2014 break the bundle into chunks loaded on demand (React.lazy, dynamic import()).",
   "Lazy Loading \u2014 defer loading a component/resource until it's actually needed.",
   "Bundle Optimization \u2014 analyze and shrink JS bundle size (tree shaking, smaller deps).",
   "Tree Shaking \u2014 bundlers remove unused exports from the final bundle.",
   "List Virtualization \u2014 render only the visible rows of a huge list (react-window, react-virtualized).",
   "Debouncing / Throttling \u2014 limit how often a handler runs (e.g. on search input or scroll).",
   "React Profiler \u2014 dev tool that measures render cost per component.",
   "Performance Profiling \u2014 using the Profiler tab / browser devtools to find bottlenecks."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s22",
  "num": 22,
  "title": "React.memo",
  "group": "Performance",
  "overview": "React.memo wraps a component so React skips re-rendering it when its props are shallowly equal to the previous render's props.",
  "points": [
   "Memoized Components \u2014 const Fast = React.memo(SlowComponent).",
   "Shallow Comparison \u2014 default comparison checks each prop with Object.is (one level deep).",
   "Custom Comparison \u2014 pass a second argument (prevProps, nextProps) => boolean for custom equality logic.",
   "Props Reference \u2014 new object/array/function literals created every render break memoization (they're 'different' by reference).",
   "Referential Equality \u2014 same object reference in memory === true equality for React's shallow check."
  ],
  "code": "const Row = React.memo(function Row({ item }) {\n  console.log('rendering', item.id);\n  return <li>{item.text}</li>;\n});\n// Row only re-renders if `item` reference changes \u2014 pair with useMemo/useCallback\n// upstream so you don't pass a brand-new object/function every render.",
  "compare": null
 },
 {
  "id": "s23",
  "num": 23,
  "title": "useMemo",
  "group": "Performance",
  "overview": "useMemo memoizes the *result* of a calculation, recomputing it only when its dependencies change.",
  "points": [
   "Memoized Values \u2014 const value = useMemo(() => compute(a, b), [a, b]).",
   "Expensive Calculations \u2014 good candidates: sorting/filtering large arrays, heavy math.",
   "Dependency Tracking \u2014 recomputes only when listed dependencies change.",
   "Memoization \u2014 trades memory for avoiding repeated CPU work; don't overuse for cheap computations."
  ],
  "code": "function ProductList({ products, query }) {\n  const filtered = useMemo(\n    () => products.filter(p => p.name.includes(query)),\n    [products, query] // only refilter when these change\n  );\n  return <List items={filtered} />;\n}",
  "compare": null
 },
 {
  "id": "s24",
  "num": 24,
  "title": "useCallback",
  "group": "Performance",
  "overview": "useCallback memoizes a *function reference* itself, so a child receiving it as a prop doesn't see a 'new' function on every render.",
  "points": [
   "Memoized Functions \u2014 const fn = useCallback(() => doThing(a), [a]).",
   "Function References \u2014 without useCallback, a new function is created on every render (breaks React.memo children).",
   "Dependency Tracking \u2014 recreates the function only when its dependencies change.",
   "React.memo Integration \u2014 pairing useCallback (parent) with React.memo (child) is what actually prevents child re-renders."
  ],
  "code": "function Parent() {\n  const [count, setCount] = useState(0);\n  const handleClick = useCallback(() => console.log('clicked'), []); // stable ref\n  return <MemoButton onClick={handleClick} />; // won't re-render on count change\n}\nconst MemoButton = React.memo(({ onClick }) => <button onClick={onClick}>Go</button>);",
  "compare": {
   "headers": [
    "Hook",
    "Memoizes",
    "Use when"
   ],
   "rows": [
    [
     "useMemo",
     "A computed value",
     "Expensive calculation used in render"
    ],
    [
     "useCallback",
     "A function reference",
     "Passing a stable callback to a memoized child / dependency array"
    ]
   ]
  }
 },
 {
  "id": "s25",
  "num": 25,
  "title": "Context API",
  "group": "State Management",
  "overview": "The Context API is React's built-in mechanism for sharing state across the tree without prop drilling \u2014 createContext + Provider + useContext.",
  "points": [
   "createContext \u2014 creates a context object with an optional default value.",
   "Provider \u2014 supplies the actual value to everything nested inside it.",
   "Consumer \u2014 legacy render-prop way to read context (rare in modern code).",
   "useContext \u2014 the hook-based, modern way to read a context's current value.",
   "Global/Shared State \u2014 good fit for auth user, theme, locale, feature flags.",
   "Context Composition \u2014 nesting multiple providers (Theme, Auth, i18n) around the app.",
   "Context Performance \u2014 every consumer re-renders on value change; split contexts by concern to limit blast radius."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s26",
  "num": 26,
  "title": "State Management",
  "group": "State Management",
  "overview": "As apps grow, you need a strategy for where state lives: kept local to a component, lifted to a shared ancestor, put in Context, or handled by a dedicated state library.",
  "points": [
   "Local State \u2014 useState/useReducer inside one component; the default choice.",
   "Context API \u2014 built-in sharing for rarely-changing global values.",
   "Redux \u2014 predictable, centralized state container with a single store and pure reducers.",
   "Redux Toolkit \u2014 the modern, official, less-boilerplate way to write Redux.",
   "Zustand \u2014 tiny, hook-based state library, minimal boilerplate, no Provider required.",
   "MobX \u2014 observable-based state management with automatic reactivity.",
   "Recoil / Jotai \u2014 atomic state management (state split into small independent 'atoms').",
   "Server State \u2014 data that actually lives on a server (see TanStack Query/SWR) \u2014 different concerns than client UI state.",
   "Client State \u2014 state that only exists in the browser/UI (modals open, form drafts, theme).",
   "Global State \u2014 state needed by many unrelated parts of the app."
  ],
  "code": null,
  "compare": {
   "headers": [
    "Tool",
    "Boilerplate",
    "Best for"
   ],
   "rows": [
    [
     "useState/useReducer",
     "Minimal",
     "Local, component-scoped state"
    ],
    [
     "Context API",
     "Low",
     "Simple global values, rarely changing"
    ],
    [
     "Redux Toolkit",
     "Medium",
     "Large apps, complex state, time-travel debugging"
    ],
    [
     "Zustand",
     "Very low",
     "Medium apps wanting simplicity without Context re-render issues"
    ],
    [
     "TanStack Query / SWR",
     "Low",
     "Server/remote data \u2014 caching, refetching, sync"
    ]
   ]
  }
 },
 {
  "id": "s27",
  "num": 27,
  "title": "Redux",
  "group": "State Management",
  "overview": "Redux centralizes application state in a single store, updated only through pure reducer functions in response to dispatched actions \u2014 enabling predictable state changes and time-travel debugging.",
  "points": [
   "Store \u2014 the single object holding the entire app's state tree.",
   "State \u2014 the current data snapshot inside the store.",
   "Actions \u2014 plain objects describing 'what happened' ({ type: 'ADD_TODO', payload }).",
   "Action Creators \u2014 functions that build/return action objects.",
   "Reducers \u2014 pure functions (state, action) => newState; never mutate state directly.",
   "Dispatch \u2014 store.dispatch(action) is the only way to trigger a state change.",
   "Selectors \u2014 functions that read/derive specific slices of state from the store.",
   "Middleware \u2014 intercepts dispatched actions (e.g. redux-thunk for async logic, logging).",
   "Redux DevTools \u2014 inspect every dispatched action and time-travel between states.",
   "Immutable Updates \u2014 reducers must return new state objects, never mutate the old ones."
  ],
  "code": "function counterReducer(state = { count: 0 }, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 }; // new object, no mutation\n    case 'decrement': return { count: state.count - 1 };\n    default: return state;\n  }\n}\nstore.dispatch({ type: 'increment' });",
  "compare": null
 },
 {
  "id": "s28",
  "num": 28,
  "title": "Redux Toolkit",
  "group": "State Management",
  "overview": "Redux Toolkit (RTK) is the official, opinionated way to write Redux with far less boilerplate \u2014 it uses Immer internally so you can 'mutate' draft state safely.",
  "points": [
   "configureStore \u2014 sets up the store with good defaults (devtools, thunk middleware) in one call.",
   "createSlice \u2014 generates action creators + a reducer together from a single object.",
   "createAsyncThunk \u2014 standardized way to handle async logic (pending/fulfilled/rejected actions).",
   "createSelector \u2014 memoized selectors (from Reselect) to avoid recomputing derived data.",
   "RTK Query \u2014 built-in data-fetching & caching layer (an alternative to TanStack Query/SWR).",
   "Immer \u2014 lets you write 'mutating' code in reducers that's actually converted to immutable updates.",
   "Redux Middleware \u2014 customizable pipeline RTK sets up for you by default."
  ],
  "code": "const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { count: 0 },\n  reducers: {\n    increment: (state) => { state.count += 1; }, // looks mutable, Immer makes it safe\n  },\n});\nexport const { increment } = counterSlice.actions;\nconst store = configureStore({ reducer: { counter: counterSlice.reducer } });",
  "compare": null
 },
 {
  "id": "s29",
  "num": 29,
  "title": "API Integration",
  "group": "Data",
  "overview": "Connecting a React app to a backend means making HTTP requests (Fetch or Axios), handling the request/response lifecycle, and dealing with errors gracefully.",
  "points": [
   "Fetch API \u2014 browser-native, promise-based HTTP client.",
   "Axios \u2014 popular third-party HTTP client with nicer defaults (auto JSON parsing, interceptors).",
   "REST API \u2014 resource-based API style using GET/POST/PUT/PATCH/DELETE + URLs.",
   "GET/POST/PUT/PATCH/DELETE \u2014 standard HTTP methods for read/create/replace/partial-update/delete.",
   "API Headers \u2014 metadata sent with a request (Content-Type, Authorization).",
   "Request Parameters / Query Parameters \u2014 data appended to the URL (?page=2).",
   "Request Body \u2014 JSON payload sent with POST/PUT/PATCH.",
   "API Response \u2014 the data + status + headers returned by the server.",
   "API Error Handling \u2014 check response.ok / status codes, wrap in try/catch, show user feedback.",
   "API Interceptors \u2014 Axios feature to transform/inspect every request or response (e.g. auto-attach auth token).",
   "Authentication Headers \u2014 commonly Authorization: Bearer <token>."
  ],
  "code": "// Fetch\nasync function getUsers() {\n  const res = await fetch('/api/users');\n  if (!res.ok) throw new Error('Failed to load users');\n  return res.json();\n}\n\n// Axios with interceptor\naxios.interceptors.request.use(config => {\n  config.headers.Authorization = `Bearer ${getToken()}`;\n  return config;\n});",
  "compare": null
 },
 {
  "id": "s30",
  "num": 30,
  "title": "Server State",
  "group": "Data",
  "overview": "'Server state' is data that actually lives on a remote server \u2014 it can be stale, needs caching, and can change outside your app. Libraries like TanStack Query and SWR handle this far better than manual useState+useEffect.",
  "points": [
   "TanStack Query (React Query) \u2014 declarative fetching/caching library: useQuery, useMutation.",
   "SWR \u2014 lightweight data-fetching library from Vercel using a 'stale-while-revalidate' strategy.",
   "Query \u2014 a read operation (GET-like) with automatic caching.",
   "Mutation \u2014 a write operation (create/update/delete) that can invalidate cached queries.",
   "Caching \u2014 responses are stored and reused instead of re-fetched every time.",
   "Refetching \u2014 re-running a query (on window focus, interval, or manually).",
   "Stale Data \u2014 cached data considered outdated after a configurable time; triggers a background refetch.",
   "Retry \u2014 automatic retry of failed requests with backoff.",
   "Background Refetch \u2014 silently update data behind the scenes without a loading spinner.",
   "Optimistic Updates \u2014 update the UI immediately, before the server confirms, then rollback on error.",
   "Infinite Queries \u2014 paginated/'load more' data fetched incrementally.",
   "Query Invalidation \u2014 mark cached data as stale to force a refetch (e.g. after a mutation)."
  ],
  "code": "function Users() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ['users'],\n    queryFn: () => fetch('/api/users').then(r => r.json()),\n  });\n  if (isLoading) return <Spinner />;\n  if (error) return <ErrorMsg />;\n  return <List items={data} />;\n}",
  "compare": null
 },
 {
  "id": "s31",
  "num": 31,
  "title": "React Router",
  "group": "Routing",
  "overview": "React Router is the standard client-side routing library for React SPAs, mapping URL paths to components.",
  "points": [
   "React Router \u2014 the library itself (react-router-dom for web).",
   "BrowserRouter \u2014 wraps the app and enables history-API-based routing.",
   "Routes / Route \u2014 declare which component renders for which URL path.",
   "Link / NavLink \u2014 client-side navigation without full page reloads (NavLink adds 'active' styling).",
   "Outlet \u2014 renders the matched child route inside a parent/layout route.",
   "Navigate \u2014 declaratively redirect to another route.",
   "useNavigate \u2014 programmatic navigation (navigate('/login')).",
   "useParams \u2014 read dynamic URL segments, e.g. /users/:id.",
   "useLocation \u2014 access the current URL/location object.",
   "useSearchParams \u2014 read/update the ?query=string part of the URL.",
   "Nested Routes \u2014 routes rendered inside a parent route's Outlet.",
   "Dynamic Routes \u2014 routes with parameters like /products/:productId.",
   "Protected Routes \u2014 routes that redirect unauthenticated users (Route Guards).",
   "Lazy Routes \u2014 code-split route components loaded on demand with React.lazy."
  ],
  "code": "<BrowserRouter>\n  <Routes>\n    <Route path=\"/\" element={<Layout />}>\n      <Route index element={<Home />} />\n      <Route path=\"users/:id\" element={<UserDetail />} />\n      <Route path=\"admin\" element={<ProtectedRoute><Admin /></ProtectedRoute>} />\n    </Route>\n  </Routes>\n</BrowserRouter>\n\nfunction UserDetail() {\n  const { id } = useParams();       // dynamic route param\n  const navigate = useNavigate();\n  return <button onClick={() => navigate(-1)}>Back from user {id}</button>;\n}",
  "compare": null
 },
 {
  "id": "s32",
  "num": 32,
  "title": "Authentication",
  "group": "Auth",
  "overview": "Authentication verifies who a user is; authorization decides what they're allowed to do. React apps typically store a token after login and attach it to subsequent API requests.",
  "points": [
   "Login / Logout / Registration \u2014 the core auth flows, usually backed by API calls.",
   "Authentication State \u2014 commonly stored in Context, a state library, or cookies.",
   "Authorization \u2014 determining permitted actions/resources for an authenticated user.",
   "JWT (JSON Web Token) \u2014 a signed token encoding user claims, commonly used for stateless auth.",
   "Access Token \u2014 short-lived token used to authorize API requests.",
   "Refresh Token \u2014 longer-lived token used to obtain a new access token without re-login.",
   "Cookies \u2014 can store tokens; sent automatically with requests to the same domain.",
   "HttpOnly Cookies \u2014 inaccessible to JS, more resistant to XSS token theft than localStorage.",
   "Sessions \u2014 server-side stored auth state, referenced by a session id (often via cookie).",
   "Protected Routes \u2014 routes that check auth state and redirect if not logged in.",
   "Role-Based Access \u2014 permissions tied to a user's role (admin, editor, viewer).",
   "Permission-Based Access \u2014 fine-grained permissions independent of broad roles.",
   "Token Expiration \u2014 access tokens expire; apps must refresh or force re-login."
  ],
  "code": "function ProtectedRoute({ children }) {\n  const { user } = useAuth();\n  if (!user) return <Navigate to=\"/login\" replace />;\n  return children;\n}",
  "compare": null
 },
 {
  "id": "s33",
  "num": 33,
  "title": "Error Handling",
  "group": "Errors",
  "overview": "Robust apps anticipate failure at every layer: JS runtime errors, failed network calls, invalid form input, and rendering crashes.",
  "points": [
   "JavaScript Errors \u2014 runtime exceptions (undefined is not a function, etc.).",
   "API Errors \u2014 failed HTTP requests (4xx/5xx) or network failures.",
   "Network Errors \u2014 connectivity issues, timeouts.",
   "Validation Errors \u2014 user input that fails business rules.",
   "Error Boundaries \u2014 special components that catch render-time errors in their child tree (class components only).",
   "Fallback UI \u2014 what's shown instead of the crashed UI (an Error Boundary's fallback, or a form's error message).",
   "Error Recovery \u2014 letting the user retry or reset after an error.",
   "Global Error Handling \u2014 centralized handling (e.g. an API client's error interceptor, or a top-level Error Boundary)."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s34",
  "num": 34,
  "title": "Error Boundaries",
  "group": "Errors",
  "overview": "Error Boundaries are components (must be class-based) that catch JavaScript errors thrown anywhere in their child component tree during rendering, and show a fallback UI instead of crashing the whole app.",
  "points": [
   "Class Error Boundaries \u2014 no hook equivalent exists yet; must use a class component.",
   "componentDidCatch(error, info) \u2014 log the error (e.g. to Sentry) after it's caught.",
   "getDerivedStateFromError(error) \u2014 static method to update state so the next render shows a fallback.",
   "Fallback Components \u2014 the 'something went wrong' UI shown when an error is caught.",
   "Error Recovery \u2014 reset the boundary's state (e.g. via a 'Try again' button) to attempt re-rendering children.",
   "Error Boundary Placement \u2014 wrap risky subtrees (e.g. one per route/widget) so one crash doesn't take down the entire app."
  ],
  "code": "class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  componentDidCatch(error, info) { logErrorToService(error, info); }\n  render() {\n    if (this.state.hasError) return <h2>Something went wrong.</h2>;\n    return this.props.children;\n  }\n}\n// Usage: <ErrorBoundary><Widget /></ErrorBoundary>",
  "compare": null
 },
 {
  "id": "s35",
  "num": 35,
  "title": "Suspense",
  "group": "Modern Rendering",
  "overview": "Suspense lets a component 'wait' for something (lazily-loaded code, or data) before rendering, showing a fallback UI in the meantime.",
  "points": [
   "Suspense \u2014 <Suspense fallback={<Spinner/>}>...</Suspense> wraps components that might not be ready yet.",
   "Fallback UI \u2014 what's shown while the wrapped tree is 'suspended'.",
   "Lazy Components \u2014 React.lazy() components suspend while their code chunk loads.",
   "Suspense Boundaries \u2014 you can nest multiple boundaries for granular loading states.",
   "Streaming \u2014 server can send HTML in chunks, letting Suspense boundaries resolve independently (used with Server Components).",
   "Data Suspense \u2014 frameworks like Next.js / Relay can suspend on data fetching too, not just code loading."
  ],
  "code": "const Profile = React.lazy(() => import('./Profile'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Spinner />}>\n      <Profile />\n    </Suspense>\n  );\n}",
  "compare": null
 },
 {
  "id": "s36",
  "num": 36,
  "title": "Lazy Loading",
  "group": "Modern Rendering",
  "overview": "Lazy loading defers loading code (or assets) until they're actually needed, shrinking the initial bundle and speeding up first load.",
  "points": [
   "React.lazy \u2014 dynamically imports a component: const X = React.lazy(() => import('./X')).",
   "Dynamic Imports \u2014 the underlying JS import() syntax that returns a promise.",
   "Code Splitting \u2014 the bundler (Vite/Webpack) creates separate chunks that load on demand.",
   "Route-Level Splitting \u2014 lazy-load whole pages/routes (most common and impactful split point).",
   "Component-Level Splitting \u2014 lazy-load heavy individual components (charts, editors, modals).",
   "Suspense \u2014 required wrapper to show a fallback while the lazy chunk loads."
  ],
  "code": "const Chart = React.lazy(() => import('./Chart')); // separate JS chunk\n\nfunction Dashboard() {\n  return (\n    <Suspense fallback={<p>Loading chart\u2026</p>}>\n      <Chart />\n    </Suspense>\n  );\n}",
  "compare": null
 },
 {
  "id": "s37",
  "num": 37,
  "title": "Portals",
  "group": "Advanced",
  "overview": "Portals let you render a child into a DOM node that exists outside the parent component's DOM hierarchy \u2014 essential for modals, tooltips, and dropdowns that must escape overflow/z-index constraints.",
  "points": [
   "createPortal(children, domNode) \u2014 renders children into a different DOM node while keeping React's event bubbling/context intact.",
   "Modal / Dialog \u2014 classic portal use case, rendered into a #modal-root outside the app's main div.",
   "Tooltip / Dropdown / Overlay \u2014 UI that needs to visually escape a scrollable/overflow-hidden ancestor.",
   "DOM Outside Root \u2014 the target node is usually a sibling of the app's root element in index.html."
  ],
  "code": "function Modal({ children }) {\n  return ReactDOM.createPortal(\n    <div className=\"modal-backdrop\"><div className=\"modal\">{children}</div></div>,\n    document.getElementById('modal-root') // outside the normal app tree\n  );\n}",
  "compare": null
 },
 {
  "id": "s38",
  "num": 38,
  "title": "Refs",
  "group": "Advanced",
  "overview": "Refs give escape-hatch access to DOM nodes or component instances, and let child components expose imperative methods to parents.",
  "points": [
   "useRef \u2014 the hook that creates a persistent, mutable ref object.",
   "Callback Refs \u2014 ref={(node) => { ... }} gives you the node directly (useful for measuring on mount).",
   "DOM Refs \u2014 refs attached to actual DOM elements.",
   "Forwarded Refs \u2014 forwardRef() lets a parent attach a ref through a custom component to an inner DOM node.",
   "Imperative APIs \u2014 exposing methods (focus, scrollIntoView) via useImperativeHandle.",
   "Ref Management \u2014 refs are an escape hatch; prefer props/state for anything that should trigger a re-render."
  ],
  "code": "const FancyInput = React.forwardRef((props, ref) => {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () => ({\n    focus: () => inputRef.current.focus(),\n  }));\n  return <input ref={inputRef} {...props} />;\n});\n// Parent: const ref = useRef(); <FancyInput ref={ref} />; ref.current.focus();",
  "compare": null
 },
 {
  "id": "s39",
  "num": 39,
  "title": "Advanced Component Patterns",
  "group": "Patterns",
  "overview": "Beyond basic composition, React has several established patterns for building flexible, reusable component APIs.",
  "points": [
   "Higher-Order Components \u2014 a function that takes a component and returns an enhanced one.",
   "Render Props \u2014 a prop whose value is a function, letting the child control what's rendered.",
   "Compound Components \u2014 a group of components that share implicit state (Tabs, Tab, TabPanel).",
   "Provider Pattern \u2014 using Context.Provider to supply shared state/behavior to a subtree.",
   "Composition \u2014 combining small components/children to build complex UIs, favored over inheritance.",
   "Slot Pattern \u2014 passing whole elements as props (header, footer) for flexible layout injection.",
   "Controlled / Uncontrolled Components \u2014 letting the parent own the value vs letting the component own it internally.",
   "State Reducer Pattern \u2014 expose a reducer so consumers can intercept/override internal state transitions.",
   "Custom Hooks Pattern \u2014 extracting the pattern's logic into a reusable hook instead of a wrapper component."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s40",
  "num": 40,
  "title": "Higher-Order Components",
  "group": "Patterns",
  "overview": "A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added behavior \u2014 a pattern largely superseded by custom hooks, but still seen in some libraries.",
  "points": [
   "HOC \u2014 withSomething(Component) returns a new enhanced component.",
   "Component Wrapping \u2014 the HOC renders the original component, injecting extra props.",
   "Authentication HOC \u2014 withAuth(Component) redirects if the user isn't logged in.",
   "Permission HOC \u2014 withPermission('admin')(Component) gates rendering by role.",
   "Logging HOC \u2014 wraps a component to log renders/props for debugging.",
   "Composition \u2014 multiple HOCs can be stacked, though this can create 'wrapper hell'."
  ],
  "code": "function withLoading(Component) {\n  return function Wrapped({ isLoading, ...props }) {\n    if (isLoading) return <Spinner />;\n    return <Component {...props} />;\n  };\n}\nconst UserListWithLoading = withLoading(UserList);",
  "compare": null
 },
 {
  "id": "s41",
  "num": 41,
  "title": "Compound Components",
  "group": "Patterns",
  "overview": "Compound components are a set of components that work together, implicitly sharing state via Context, giving consumers a very readable, declarative API (like native <select><option>).",
  "points": [
   "Parent Component \u2014 owns the shared state (e.g. <Tabs> holds the active tab index).",
   "Child Components \u2014 <Tabs.List>, <Tabs.Tab>, <Tabs.Panel> read/update that shared state.",
   "Shared Context \u2014 the parent provides state via Context so children don't need explicit props.",
   "Flexible APIs \u2014 consumers can reorder/omit/style children freely while behavior stays correct.",
   "Tabs / Accordion / Dropdown \u2014 classic real-world compound-component examples."
  ],
  "code": "const TabsContext = createContext();\nfunction Tabs({ children, defaultIndex = 0 }) {\n  const [active, setActive] = useState(defaultIndex);\n  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;\n}\nTabs.Tab = function Tab({ index, children }) {\n  const { active, setActive } = useContext(TabsContext);\n  return <button onClick={() => setActive(index)} aria-selected={active === index}>{children}</button>;\n};\n// Usage: <Tabs><Tabs.Tab index={0}>One</Tabs.Tab><Tabs.Tab index={1}>Two</Tabs.Tab></Tabs>",
  "compare": null
 },
 {
  "id": "s42",
  "num": 42,
  "title": "React Server Concepts",
  "group": "Server Rendering",
  "overview": "React can render on the server as well as the client, and React 18+ introduces Server Components \u2014 components that run only on the server and never ship their code to the browser.",
  "points": [
   "Server-Side Rendering \u2014 HTML generated on the server per request, then 'hydrated' in the browser.",
   "Client-Side Rendering \u2014 HTML is minimal; JS builds the whole UI in the browser.",
   "Static Site Generation \u2014 HTML pre-built at build time, served as static files.",
   "Server Components \u2014 run only on the server, can access backend resources directly, ship zero JS to the client.",
   "Client Components \u2014 the 'normal' interactive React components, marked with 'use client' in frameworks like Next.js.",
   "Hydration \u2014 client-side React 'attaches' to server-rendered HTML, making it interactive.",
   "Streaming \u2014 server sends HTML in chunks as it becomes ready, instead of one big blocking response.",
   "Partial Rendering \u2014 different parts of a page can stream/resolve independently (pairs with Suspense)."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s43",
  "num": 43,
  "title": "SSR",
  "group": "Server Rendering",
  "overview": "Server-Side Rendering renders React components to HTML on the server for each request, sending ready-to-view markup to the browser, which then hydrates it.",
  "points": [
   "Server-Side Rendering \u2014 renderToString/renderToPipeableStream on the server produces HTML.",
   "SSR Hydration \u2014 the client attaches event listeners to the existing server-rendered DOM instead of rebuilding it.",
   "SSR Data Fetching \u2014 data needed for the page is fetched before/during the server render.",
   "SSR Performance \u2014 faster perceived load (content visible sooner) but more server CPU load per request.",
   "SSR SEO \u2014 search engines see fully-rendered HTML immediately, good for crawlability.",
   "Hydration Mismatch \u2014 error when server-rendered HTML doesn't match what the client would render (common cause: using browser-only APIs during render)."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s44",
  "num": 44,
  "title": "CSR",
  "group": "Server Rendering",
  "overview": "Client-Side Rendering ships a mostly-empty HTML shell; the browser downloads JS and builds the entire UI there \u2014 the traditional SPA approach.",
  "points": [
   "Client-Side Rendering \u2014 all rendering happens in the browser after JS loads.",
   "SPA \u2014 the classic CSR app shape: one HTML file, client-side routing.",
   "Client Routing \u2014 navigation handled by JS (React Router) without full page reloads.",
   "Browser Rendering \u2014 the browser executes JS to build the DOM from scratch.",
   "Initial JavaScript Loading \u2014 the app is blank/loading until the JS bundle downloads and runs (can hurt SEO/first paint)."
  ],
  "code": null,
  "compare": {
   "headers": [
    "Aspect",
    "CSR",
    "SSR",
    "SSG"
   ],
   "rows": [
    [
     "Where HTML is built",
     "Browser",
     "Server, per request",
     "Build time"
    ],
    [
     "First paint",
     "Slower (blank until JS loads)",
     "Fast",
     "Fastest"
    ],
    [
     "SEO",
     "Weaker by default",
     "Strong",
     "Strong"
    ],
    [
     "Best for",
     "Dashboards, apps behind login",
     "Dynamic, personalized pages",
     "Blogs, marketing, docs"
    ]
   ]
  }
 },
 {
  "id": "s45",
  "num": 45,
  "title": "SSG",
  "group": "Server Rendering",
  "overview": "Static Site Generation pre-renders pages to plain HTML at build time \u2014 the fastest possible delivery since there's no per-request rendering work at all.",
  "points": [
   "Static Site Generation \u2014 HTML files generated once, during the build, and served as-is.",
   "Pre-rendering \u2014 generating HTML ahead of time rather than on each request.",
   "Build-Time Rendering \u2014 the render happens when you deploy, not when a user visits.",
   "Static Pages \u2014 served directly from a CDN, extremely fast and cheap.",
   "Incremental Static Regeneration \u2014 (Next.js concept) regenerate individual static pages in the background after deployment, without a full rebuild."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s46",
  "num": 46,
  "title": "Modern React",
  "group": "Modern React",
  "overview": "Recent React versions (18/19) introduced concurrent features and built-in ways to handle pending UI, transitions, forms, and optimistic updates.",
  "points": [
   "Concurrent Rendering / Concurrent Features \u2014 React can prepare multiple UI versions and interrupt low-priority work for urgent updates.",
   "Transitions / useTransition \u2014 mark a state update as non-urgent so urgent updates (typing) stay responsive.",
   "useDeferredValue \u2014 get a 'lagging' version of a value that updates after urgent work finishes.",
   "Suspense \u2014 see Suspense section; now integrates with data fetching frameworks too.",
   "Server Components \u2014 see React Server Concepts.",
   "Actions / Form Actions \u2014 functions passed to <form action={fn}> that handle submission (including pending state) natively.",
   "Optimistic UI / useOptimistic \u2014 show the expected result of an action immediately, before server confirmation.",
   "useActionState \u2014 manages state driven by a form action, including pending status and returned errors.",
   "useFormStatus \u2014 read the pending state of the nearest parent <form> from a child component."
  ],
  "code": "function SearchResults() {\n  const [query, setQuery] = useState('');\n  const [isPending, startTransition] = useTransition();\n  const [results, setResults] = useState([]);\n\n  const handleChange = (e) => {\n    setQuery(e.target.value);              // urgent \u2014 updates immediately\n    startTransition(() => {\n      setResults(search(e.target.value));  // non-urgent \u2014 can be interrupted\n    });\n  };\n\n  return (\n    <>\n      <input value={query} onChange={handleChange} />\n      {isPending ? <Spinner /> : <List items={results} />}\n    </>\n  );\n}",
  "compare": null
 },
 {
  "id": "s47",
  "num": 47,
  "title": "React + TypeScript",
  "group": "TypeScript",
  "overview": "TypeScript adds static typing to React, catching prop mismatches, wrong hook usage, and API shape errors at compile time instead of runtime.",
  "points": [
   "Component Props Types \u2014 interface Props { name: string; onSave?: () => void }.",
   "Interfaces / Type Aliases \u2014 interface vs type \u2014 both describe shapes; interfaces are extendable, types are more flexible (unions).",
   "Generic Components \u2014 components parameterized over a type, e.g. function List<T>({ items }: { items: T[] }).",
   "ReactNode \u2014 the broadest 'anything renderable' type (string, number, JSX, null, array of these).",
   "ReactElement \u2014 specifically a JSX element (narrower than ReactNode).",
   "JSX.Element \u2014 return type of a component's render output.",
   "Event Types \u2014 e.g. React.ChangeEvent<HTMLInputElement> for onChange handlers.",
   "Ref Types \u2014 useRef<HTMLInputElement>(null) types the DOM node correctly.",
   "Hook Types \u2014 typing useState<User | null>(null), useReducer with typed action unions.",
   "API Response Types \u2014 interfaces matching your backend's JSON shape.",
   "Union Types \u2014 status: 'idle' | 'loading' | 'success' | 'error'.",
   "Optional Props \u2014 age?: number vs required age: number.",
   "Generic Hooks \u2014 custom hooks typed with generics, e.g. useFetch<T>(url: string): { data: T | null }."
  ],
  "code": "interface User { id: string; name: string; }\n\nfunction UserCard({ user, onSelect }: { user: User; onSelect?: (id: string) => void }) {\n  return <div onClick={() => onSelect?.(user.id)}>{user.name}</div>;\n}\n\nfunction useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);\n  return data;\n}",
  "compare": null
 },
 {
  "id": "s48",
  "num": 48,
  "title": "Styling",
  "group": "Styling",
  "overview": "React doesn't prescribe a styling solution \u2014 plain CSS, CSS Modules, Sass, utility frameworks, and CSS-in-JS libraries are all common choices.",
  "points": [
   "CSS / Inline CSS \u2014 plain stylesheets, or style={{ color: 'red' }} objects (camelCase keys).",
   "CSS Modules \u2014 *.module.css files scoped locally per component automatically.",
   "SCSS / Sass / LESS \u2014 CSS preprocessors adding variables, nesting, mixins.",
   "Tailwind CSS \u2014 utility-first classes composed directly in JSX (e.g. className=\"flex p-4\").",
   "Bootstrap / React-Bootstrap \u2014 prebuilt component/class library for rapid UI.",
   "CSS-in-JS \u2014 write CSS inside JS/JSX; scoped and dynamic based on props.",
   "Styled Components / Emotion \u2014 popular CSS-in-JS libraries using tagged template literals.",
   "Responsive Design / Media Queries \u2014 adapting layout across screen sizes.",
   "Theme Management \u2014 centralized design tokens (colors, spacing) shared across components/libraries."
  ],
  "code": "// CSS Modules\nimport styles from './Card.module.css';\n<div className={styles.card}>...</div>\n\n// Styled Components\nconst Card = styled.div`\n  padding: 1rem;\n  background: ${props => props.theme.bg};\n`;\n\n// Tailwind\n<div className=\"flex items-center gap-2 p-4 rounded-lg shadow\">...</div>",
  "compare": null
 },
 {
  "id": "s49",
  "num": 49,
  "title": "Accessibility",
  "group": "Accessibility",
  "overview": "Accessible React apps work for everyone, including people using screen readers, keyboards, or other assistive tech \u2014 this needs to be built in, not bolted on.",
  "points": [
   "Accessibility (a11y) \u2014 designing/building so people with disabilities can use the app.",
   "Semantic HTML \u2014 use <button>, <nav>, <header> etc. instead of generic <div>s with click handlers.",
   "ARIA \u2014 attributes that describe roles/states to assistive tech when semantic HTML alone isn't enough.",
   "aria-label / aria-labelledby \u2014 provide accessible names for elements without visible text.",
   "Keyboard Navigation \u2014 every interactive element must be reachable/operable via keyboard (Tab, Enter, Space, Esc).",
   "Focus Management \u2014 move focus sensibly (e.g. into a newly opened modal, back to the trigger on close).",
   "Screen Readers \u2014 test that content/order/labels make sense when read aloud.",
   "Accessible Forms \u2014 labels tied to inputs (htmlFor/id), clear error messaging tied via aria-describedby.",
   "Accessible Modals \u2014 trap focus inside, close on Esc, restore focus on close, role=\"dialog\".",
   "Color Contrast \u2014 ensure text meets WCAG contrast ratios against its background."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s50",
  "num": 50,
  "title": "Testing",
  "group": "Testing",
  "overview": "Testing React apps spans unit tests (individual functions/components), integration tests (components working together), and end-to-end tests (real user flows in a browser).",
  "points": [
   "Unit Testing \u2014 testing a single function/component in isolation.",
   "Integration Testing \u2014 testing several units together (a form + its validation + submit handler).",
   "Component Testing \u2014 rendering a component and asserting on its output/behavior.",
   "End-to-End Testing \u2014 simulating full user flows in a real (or headless) browser.",
   "Jest / Vitest \u2014 JavaScript test runners/frameworks (Vitest is the modern Vite-native alternative to Jest).",
   "React Testing Library \u2014 encourages testing components the way users interact with them (by role/text, not internals).",
   "Playwright / Cypress \u2014 E2E testing tools that drive a real browser.",
   "Mocking \u2014 replacing real dependencies (API calls, modules) with fake, controllable versions in tests.",
   "Test Coverage \u2014 the percentage of code exercised by tests.",
   "Snapshot Testing \u2014 save a component's rendered output and detect unintended changes later."
  ],
  "code": "import { render, screen, fireEvent } from '@testing-library/react';\n\ntest('increments count on click', () => {\n  render(<Counter />);\n  fireEvent.click(screen.getByRole('button', { name: /increment/i }));\n  expect(screen.getByText('1')).toBeInTheDocument();\n});",
  "compare": null
 },
 {
  "id": "s51",
  "num": 51,
  "title": "Build Tools",
  "group": "Tooling",
  "overview": "Build tools compile, bundle, and optimize your React code (JSX/TS \u2192 browser JS) and provide a fast local dev experience.",
  "points": [
   "Vite \u2014 modern, very fast dev server/bundler (native ESM in dev, Rollup for prod builds); today's default for new React apps.",
   "Webpack \u2014 older, highly configurable bundler, still common in legacy/enterprise setups.",
   "Babel \u2014 transpiles JSX/modern JS down to browser-compatible JS.",
   "SWC \u2014 Rust-based super-fast alternative to Babel (used by Next.js, and optionally Vite).",
   "ESLint \u2014 static analysis tool catching bugs/style issues.",
   "Prettier \u2014 opinionated code formatter.",
   "npm / Yarn / pnpm \u2014 package managers (pnpm is fastest/most disk-efficient via content-addressable storage).",
   "Source Maps \u2014 map minified/bundled code back to original source for debugging.",
   "Tree Shaking \u2014 removing unused code from the final bundle.",
   "Bundling \u2014 combining many modules into optimized output files."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s52",
  "num": 52,
  "title": "React Project Architecture",
  "group": "Architecture",
  "overview": "How you organize files/folders matters as an app grows \u2014 the two dominant approaches are grouping by file type or grouping by feature.",
  "points": [
   "Folder Structure \u2014 the overall layout of src/ (components, pages, hooks, etc.).",
   "Feature-Based Architecture \u2014 group all files related to one feature together (features/auth/{components,hooks,api}).",
   "Component-Based Architecture \u2014 the app is fundamentally a tree of composed components.",
   "Layered Architecture \u2014 separate UI, business logic, and data-access layers.",
   "Service Layer \u2014 dedicated modules wrapping API calls (userService.getAll()).",
   "API Layer \u2014 centralizes fetch/axios config, base URLs, interceptors.",
   "Hooks Layer \u2014 shared custom hooks folder, reused across features.",
   "Utils \u2014 small pure helper functions (formatDate, debounce).",
   "Types \u2014 shared TypeScript types/interfaces.",
   "Constants \u2014 fixed values (routes, enums, config keys).",
   "Configuration / Environment Configuration \u2014 env-specific settings (.env files, import.meta.env)."
  ],
  "code": null,
  "compare": {
   "headers": [
    "Approach",
    "Group by",
    "Pros",
    "Cons"
   ],
   "rows": [
    [
     "Type-based",
     "components/, hooks/, utils/",
     "Simple for small apps",
     "Hard to navigate as app grows"
    ],
    [
     "Feature-based",
     "features/auth/, features/cart/",
     "Scales well, easy to find related code",
     "More upfront structure decisions"
    ]
   ]
  }
 },
 {
  "id": "s53",
  "num": 53,
  "title": "Security",
  "group": "Security",
  "overview": "React auto-escapes text content by default (preventing basic XSS), but you're still responsible for safe handling of tokens, external input, and any raw HTML you render.",
  "points": [
   "XSS (Cross-Site Scripting) \u2014 injecting malicious scripts via untrusted input; React escapes text by default but dangerouslySetInnerHTML bypasses that.",
   "CSRF (Cross-Site Request Forgery) \u2014 tricking a logged-in user's browser into making unwanted requests; mitigated with CSRF tokens/SameSite cookies.",
   "CORS \u2014 browser policy controlling which origins can call your API; configured server-side.",
   "Authentication / Authorization \u2014 verifying identity vs verifying permission (see Authentication section).",
   "Token Security \u2014 avoid storing sensitive tokens in localStorage when possible (readable by any injected script); prefer HttpOnly cookies.",
   "Cookie Security \u2014 use HttpOnly, Secure, and SameSite flags.",
   "Input Sanitization \u2014 clean/validate all user-supplied data, especially before rendering raw HTML.",
   "dangerouslySetInnerHTML \u2014 React API to render raw HTML; use only with sanitized input.",
   "Dependency Security \u2014 audit npm packages for known vulnerabilities (npm audit, Dependabot).",
   "Environment Variables \u2014 keep secrets out of client bundles (only expose what's safe to ship to the browser).",
   "Content Security Policy \u2014 HTTP header restricting what scripts/resources a page may load."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s54",
  "num": 54,
  "title": "Advanced Data Handling",
  "group": "Data",
  "overview": "Real-world lists and datasets need pagination, filtering, sorting, and sometimes live/real-time updates \u2014 often layered with caching and performance techniques.",
  "points": [
   "Pagination \u2014 splitting data into pages; Server-Side Pagination (server returns a page at a time) vs Client-Side Pagination (all data fetched, sliced in the browser).",
   "Infinite Scroll \u2014 loading more data automatically as the user nears the bottom of a list.",
   "Search / Filtering / Sorting \u2014 narrowing/reordering a dataset by user-controlled criteria.",
   "Debouncing / Throttling \u2014 controlling how often expensive operations (search requests) fire.",
   "Caching \u2014 reusing previously-fetched data (see Server State/TanStack Query).",
   "Optimistic Updates \u2014 update UI before server confirms (see Server State).",
   "Polling \u2014 repeatedly re-fetching data on an interval to approximate 'live' updates.",
   "Real-Time Data / WebSockets \u2014 a persistent connection pushing updates from server to client instantly (chat, live dashboards), vs one-off HTTP requests."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s55",
  "num": 55,
  "title": "Browser Integration",
  "group": "Browser APIs",
  "overview": "Beyond rendering UI, React apps often need to talk to native browser APIs for storage, device features, and performance-sensitive DOM observation.",
  "points": [
   "Local Storage / Session Storage \u2014 simple key-value persistence in the browser (Local persists across sessions, Session clears on tab close).",
   "Cookies \u2014 small data sent automatically with every HTTP request to a domain.",
   "IndexedDB \u2014 browser database for larger structured/offline data.",
   "Web APIs \u2014 general term for browser-provided JS APIs (Geolocation, Notifications, etc.).",
   "Geolocation \u2014 request the user's location (with permission).",
   "Notifications \u2014 native OS-level notifications from the browser.",
   "Clipboard API \u2014 programmatically read/write the system clipboard.",
   "File API \u2014 read file contents selected via <input type=\"file\">.",
   "Drag & Drop \u2014 native browser drag/drop events for reordering or uploading.",
   "Intersection Observer \u2014 efficiently detect when an element enters/exits the viewport (infinite scroll, lazy images).",
   "Resize Observer \u2014 detect size changes of an element (responsive components).",
   "Web Workers \u2014 run JS on a background thread, off the main UI thread, for heavy computation."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s56",
  "num": 56,
  "title": "React DevTools",
  "group": "Tooling",
  "overview": "The React DevTools browser extension lets you inspect the component tree, props/state, context, and profile render performance.",
  "points": [
   "Components Panel \u2014 browse the live component tree, matching your source structure.",
   "Props Inspection \u2014 view/edit a selected component's current props.",
   "State Inspection \u2014 view/edit a selected component's current state.",
   "Context Inspection \u2014 see the current value flowing through a context.",
   "Profiler \u2014 record a session and see how long each component took to render.",
   "Render Analysis \u2014 spot which components re-rendered and why (e.g. via the 'why did this render' highlighting).",
   "Performance Analysis \u2014 combine with the browser's Performance tab for a full picture."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s57",
  "num": 57,
  "title": "Deployment",
  "group": "Deployment",
  "overview": "Deploying a React app means producing an optimized production build and hosting it (as static files for CSR/SSG, or on a server/edge platform for SSR).",
  "points": [
   "Production Build \u2014 a minified, optimized bundle (e.g. `npm run build`), distinct from the dev server.",
   "Environment Variables \u2014 inject different config (API URLs, keys) per environment at build/deploy time.",
   "Vercel / Netlify \u2014 popular platforms for zero-config static + serverless React/Next.js hosting.",
   "GitHub Pages \u2014 free static hosting straight from a repo, good for simple SPAs/demos.",
   "AWS S3 + CloudFront \u2014 static hosting bucket (S3) fronted by a CDN (CloudFront) for global low-latency delivery.",
   "Firebase Hosting \u2014 Google's static hosting with easy CLI deploys and CDN.",
   "Docker \u2014 containerize the app (often with an Nginx server) for consistent deployment anywhere.",
   "CDN \u2014 a Content Delivery Network caches static assets close to users worldwide for speed."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s58",
  "num": 58,
  "title": "CI/CD",
  "group": "Deployment",
  "overview": "Continuous Integration/Delivery automates testing and deployment every time code changes, catching problems early and shipping faster/safer.",
  "points": [
   "Git / GitHub \u2014 version control and the most common place to host source + trigger pipelines.",
   "GitHub Actions \u2014 YAML-defined workflows that run on push/PR (lint, test, build, deploy).",
   "Continuous Integration \u2014 automatically build/test every change, merged frequently into a shared branch.",
   "Continuous Delivery \u2014 every change is automatically prepared for release (but a human triggers the actual deploy).",
   "Continuous Deployment \u2014 every passing change is deployed automatically, with no manual gate.",
   "Build Pipeline / Test Pipeline \u2014 the automated sequence of install \u2192 lint \u2192 test \u2192 build steps.",
   "Linting \u2014 automated style/bug checks run as part of the pipeline.",
   "Automated Deployment \u2014 pipeline pushes the build output to hosting without manual steps.",
   "Environment Management \u2014 separate configs/secrets for dev, staging, and production."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s59",
  "num": 59,
  "title": "React + Backend",
  "group": "Full Stack",
  "overview": "React is only the frontend layer \u2014 real apps pair it with a backend (Node/Express, Spring Boot, etc.) and a database, communicating over REST, GraphQL, or WebSockets.",
  "points": [
   "React + Node.js / Express \u2014 a very common JS-everywhere stack; Express serves a REST API consumed by React.",
   "React + MongoDB \u2014 a document database often paired with Node/Express (the 'MERN' stack).",
   "React + Spring Boot \u2014 Java backend serving a REST API to a React frontend.",
   "React + PostgreSQL \u2014 relational database, often accessed through an ORM on the backend.",
   "REST \u2014 resource + HTTP-verb based API style (see API Integration section).",
   "GraphQL \u2014 query-language API style where the client requests exactly the fields it needs, in one round trip.",
   "WebSockets \u2014 persistent, bidirectional connection for real-time features (chat, live updates).",
   "Authentication APIs \u2014 backend endpoints for login/register/token refresh.",
   "File Upload APIs \u2014 backend endpoints (often multipart/form-data) that React's forms POST to."
  ],
  "code": null,
  "compare": {
   "headers": [
    "Aspect",
    "REST",
    "GraphQL"
   ],
   "rows": [
    [
     "Endpoints",
     "Many, resource-based",
     "Usually one endpoint"
    ],
    [
     "Data shape",
     "Server decides (over/under-fetching common)",
     "Client specifies exact fields needed"
    ],
    [
     "Caching",
     "Easy via HTTP caching",
     "Needs a client library (Apollo, urql)"
    ]
   ]
  }
 },
 {
  "id": "s60",
  "num": 60,
  "title": "React + AWS",
  "group": "Cloud",
  "overview": "AWS offers building blocks for hosting and powering React apps: static hosting/CDN for the frontend, and serverless services for the backend.",
  "points": [
   "React + S3 \u2014 S3 bucket hosts the built static React files.",
   "CloudFront \u2014 CDN in front of S3 for fast, cached global delivery + HTTPS.",
   "API Gateway \u2014 manages/exposes HTTP endpoints, often backing a serverless API.",
   "Lambda \u2014 run backend/API code without managing servers (pay per invocation).",
   "DynamoDB \u2014 managed NoSQL database, common serverless-stack pairing with Lambda.",
   "Cognito \u2014 managed user authentication/authorization service (sign-up, login, tokens).",
   "IAM \u2014 Identity and Access Management; controls permissions between AWS services/users.",
   "Route 53 \u2014 AWS's DNS service, routes your domain to CloudFront/other resources.",
   "CloudWatch \u2014 logging and monitoring for your AWS resources (Lambda logs, alarms)."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s61",
  "num": 61,
  "title": "React Design Principles",
  "group": "Best Practices",
  "overview": "General software design principles applied to React help keep component trees maintainable as apps grow.",
  "points": [
   "Separation of Concerns \u2014 UI, business logic, and data-fetching shouldn't all be tangled in one component.",
   "Single Responsibility \u2014 a component/function/hook should do one thing well.",
   "DRY (Don't Repeat Yourself) \u2014 extract shared logic into hooks/utils instead of copy-pasting.",
   "KISS (Keep It Simple) \u2014 prefer the simplest solution that works over clever complexity.",
   "Composition over Inheritance \u2014 React favors combining small components over class-based inheritance hierarchies.",
   "Reusability \u2014 design components/hooks to be usable in more than one context.",
   "Maintainability \u2014 code that's easy for others (and future you) to understand and change.",
   "Scalability \u2014 architecture that stays manageable as the codebase and team grow.",
   "Loose Coupling \u2014 components/modules shouldn't depend heavily on each other's internals.",
   "High Cohesion \u2014 related logic/data should live together, not be scattered across the codebase."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s62",
  "num": 62,
  "title": "React Debugging",
  "group": "Best Practices",
  "overview": "Debugging React apps combines general JS tools (console, breakpoints) with React-specific tooling for tracing renders, state, and effects.",
  "points": [
   "Console Debugging \u2014 console.log/console.table/console.trace to inspect values and call stacks.",
   "React DevTools \u2014 inspect component tree, props, state, context (see dedicated section).",
   "Network Debugging \u2014 browser DevTools' Network tab to inspect API requests/responses.",
   "Rendering Debugging \u2014 the Profiler / 'highlight updates when components render' setting.",
   "State Debugging \u2014 DevTools state inspector, or Redux DevTools for centralized stores.",
   "Effect Debugging \u2014 logging inside useEffect, checking dependency arrays for correctness.",
   "Performance Debugging \u2014 Profiler flame charts, browser Performance tab.",
   "Memory Leak Detection \u2014 watch for 'setState after unmount' warnings, unclosed subscriptions/timers.",
   "Production Error Tracking \u2014 tools like Sentry capturing real-user errors post-deploy."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s63",
  "num": 63,
  "title": "React Ecosystem",
  "group": "Ecosystem",
  "overview": "A curated map of the libraries most commonly reached for around core React.",
  "points": [
   "React Router \u2014 client-side routing (see Routing section).",
   "Redux Toolkit \u2014 state management (see State Management section).",
   "TanStack Query \u2014 server-state fetching/caching (see Server State section).",
   "React Hook Form \u2014 performant, minimal-re-render form state management.",
   "Zod \u2014 TypeScript-first schema validation, often paired with React Hook Form.",
   "Axios \u2014 HTTP client (see API Integration section).",
   "Tailwind CSS \u2014 utility-first styling (see Styling section).",
   "Material UI / Ant Design / Chakra UI / React-Bootstrap \u2014 full component libraries with prebuilt, styled UI pieces.",
   "Framer Motion \u2014 declarative animation library for React.",
   "Lucide React \u2014 a popular open-source icon set as React components."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s64",
  "num": 64,
  "title": "Enterprise React",
  "group": "Architecture",
  "overview": "At large scale, React apps need architecture for many teams, many products, and long-term operability \u2014 not just component patterns.",
  "points": [
   "Large-Scale Architecture \u2014 clear module boundaries, shared design systems, documented conventions.",
   "Micro Frontends \u2014 splitting a large app into independently deployable frontend pieces owned by different teams.",
   "Design Systems \u2014 a shared language of components, tokens, and guidelines across products.",
   "Component Libraries \u2014 the actual reusable, versioned component packages implementing a design system.",
   "Reusable UI Systems \u2014 infrastructure (Storybook, theming) supporting a shared component library.",
   "Role-Based Access / Permission Management \u2014 controlling feature/UI visibility by user role/permission at scale.",
   "Feature Flags \u2014 toggle features on/off per user/environment without a new deploy.",
   "Logging / Monitoring / Error Tracking / Performance Monitoring \u2014 observability across many services/apps (Sentry, Datadog, etc.).",
   "Internationalization / Localization \u2014 supporting multiple languages/locales (see next section).",
   "Multi-Tenant Applications \u2014 a single codebase serving many separate customers/organizations, each isolated logically."
  ],
  "code": null,
  "compare": null
 },
 {
  "id": "s65",
  "num": 65,
  "title": "Internationalization",
  "group": "i18n",
  "overview": "Internationalization (i18n) prepares an app to support multiple languages/regions; localization (l10n) is the actual adaptation for a specific one.",
  "points": [
   "i18n \u2014 designing the app so text/formatting can be swapped per locale (usually via libraries like react-i18next).",
   "Localization \u2014 the process of actually translating/adapting content for a specific locale.",
   "Translation Files \u2014 JSON/YAML files mapping keys to translated strings per language.",
   "Language Switching \u2014 letting users pick a language at runtime, persisting the choice.",
   "RTL (Right-to-Left) \u2014 layout mirroring needed for languages like Arabic/Hebrew.",
   "Arabic Support \u2014 a common concrete RTL case requiring both text direction and layout mirroring.",
   "Dynamic Translation \u2014 loading/using translations at runtime, potentially fetched on demand.",
   "Date Formatting / Number Formatting / Currency Formatting \u2014 locale-aware formatting (Intl.DateTimeFormat, Intl.NumberFormat)."
  ],
  "code": "import { useTranslation } from 'react-i18next';\n\nfunction Greeting() {\n  const { t, i18n } = useTranslation();\n  return (\n    <>\n      <p>{t('welcome_message')}</p>\n      <button onClick={() => i18n.changeLanguage('ar')}>\u0639\u0631\u0628\u064a</button>\n    </>\n  );\n}",
  "compare": null
 },
 {
  "id": "s66",
  "num": 66,
  "title": "Advanced Topics",
  "group": "Advanced",
  "overview": "Deeper internals and cutting-edge features worth knowing once the fundamentals are solid.",
  "points": [
   "React Fiber / Reconciliation / Concurrent Rendering / Scheduling / Batching \u2014 see Rendering Internals sections above.",
   "Referential Equality \u2014 same rules underpin React.memo, useMemo, useCallback, and dependency arrays.",
   "Stale Closures \u2014 a function 'remembers' an old variable value because it was created before the value updated (common useEffect/useCallback bug).",
   "State Preservation / State Resetting \u2014 governed by element type + key (see Reconciliation).",
   "Render Optimization \u2014 the combined toolbox: memo, useMemo, useCallback, code splitting, virtualization.",
   "Hydration / Hydration Mismatch \u2014 see SSR section.",
   "Server Components / Streaming \u2014 see React Server Concepts.",
   "Suspense Architecture \u2014 how Suspense boundaries coordinate loading states across a tree.",
   "React Compiler \u2014 an upcoming/optional build-time compiler that auto-memoizes components, reducing the need for manual useMemo/useCallback.",
   "Compiler-Assisted Optimization \u2014 the general trend of shifting performance work from the developer to tooling.",
   "Actions / Optimistic Updates \u2014 see Modern React section.",
   "Resource Preloading / Resource Preinitialization \u2014 new React DOM APIs (preload, preinit) to hint the browser to fetch/init resources (fonts, scripts) early."
  ],
  "code": "// Stale closure bug\nfunction Bad() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      console.log(count); // always logs 0 \u2014 stale closure!\n    }, 1000);\n    return () => clearInterval(id);\n  }, []); // count missing from deps\n}\n\n// Fixed with functional update / correct deps\nfunction Good() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(c => { console.log(c); return c; }); // always fresh\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n}",
  "compare": null
 }
];

const GROUP_ORDER = [...new Set(SECTIONS.map(s => s.group))];

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function CodeBlock({ code }) {
  return (
    <div className="cb-wrap">
      <div className="cb-bar">
        <span className="cb-dot r" /><span className="cb-dot y" /><span className="cb-dot g" />
        <span className="cb-lang">tsx</span>
      </div>
      <pre className="cb"><code>{code}</code></pre>
    </div>
  );
}

function CompareTable({ compare }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>{compare.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {compare.rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Point({ text, i }) {
  const idx = text.indexOf(" — ");
  if (idx === -1) return <li style={{ "--d": i + "" }}>{text}</li>;
  const term = text.slice(0, idx);
  const rest = text.slice(idx + 3);
  return (
    <li style={{ "--d": i + "" }}>
      <span className="term">{term}</span>
      <span className="dash"> — </span>
      {rest}
    </li>
  );
}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className={"tt-track" + (isDark ? "" : " tt-light")}>
        <span className="tt-icon tt-sun">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </span>
        <span className="tt-icon tt-moon">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </span>
        <span className="tt-knob" />
      </span>
    </button>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const active = useMemo(
    () => SECTIONS.find(s => s.id === activeId) || SECTIONS[0],
    [activeId]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return SECTIONS;
    const q = query.toLowerCase();
    return SECTIONS.filter(
      s =>
        s.title.toLowerCase().includes(q) ||
        s.points.some(p => p.toLowerCase().includes(q))
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(s => {
      if (!map[s.group]) map[s.group] = [];
      map[s.group].push(s);
    });
    return map;
  }, [filtered]);

  const idx = SECTIONS.findIndex(s => s.id === activeId);
  const goto = id => {
    setActiveId(id);
    setMenuOpen(false);
    const el = document.getElementById("content-top");
    if (el) el.scrollTop = 0;
  };
  const prev = () => idx > 0 && goto(SECTIONS[idx - 1].id);
  const next = () => idx < SECTIONS.length - 1 && goto(SECTIONS[idx + 1].id);
  const progress = Math.round(((idx + 1) / SECTIONS.length) * 100);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowRight" && !e.target.matches("input")) next();
      if (e.key === "ArrowLeft" && !e.target.matches("input")) prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  return (
        <>
      <Navigation />
    <div className="app" data-theme={theme}>
      
      <style>{CSS}</style>

      <div className="progress-rail"><div className="progress-fill" style={{ width: progress + "%" }} /></div>

      <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)}>
        {menuOpen ? "✕" : "☰"} <span>Explorer</span>
      </button>

      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}

      <aside className={"sidebar" + (menuOpen ? " open" : "")}>
        <div className="sidebar-header">
<div className="flex items-center justify-between">
  
  {/* Left: Brand / Title */}
  <div className="flex items-center gap-3 mb-2">
    <span className="brand-mark">⚛</span>
    <div>
      <div className="brand-text">React.js Tutorial</div>
      <div className="brand-sub">66 topics</div>
    </div>
  </div>

  {/* Right: Theme Toggle */}
  <div className="flex items-center gap-2">
    <ThemeToggle theme={theme} setTheme={setTheme} />
    <span className="sidebar-footer-label">
      {theme === "dark" ? "Dark" : "Light"}
    </span>
  </div>

</div>
          <div className="search-row">
            <svg className="search-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              className="search"
              placeholder="Search topics or terms…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
        <nav className="menu">
          {GROUP_ORDER.filter(g => grouped[g]).map(group => (
            <div key={group} className="menu-group">
              <div className="menu-group-title">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
                {group}
              </div>
              {grouped[group].map(s => (
                <button
                  key={s.id}
                  className={"menu-item" + (s.id === activeId ? " active" : "")}
                  onClick={() => goto(s.id)}
                >
                  <span className="menu-num">{String(s.num).padStart(2, "0")}</span>
                  <span className="menu-title">{s.title}</span>
                </button>
              ))}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="no-results">No topics match "{query}"</div>
          )}
        </nav>

      </aside>

      <main className="content" id="content-top">
        <div className="tabbar">
          <div className="tab">
            <span className="tab-dot" style={{ background: "var(--accent)" }} />
            {String(active.num).padStart(2, "0")}-{slug(active.title)}
          </div>
          <div className="tabbar-right">{active.num} / {SECTIONS.length}</div>
        </div>

        <div className="content-inner">
          <div className="crumb">
            <span className="crumb-group">{active.group}</span>
            <span className="crumb-sep">/</span>
            <span>Topic {active.num} of {SECTIONS.length}</span>
          </div>
          <h1 className="title">{active.title}</h1>
          <p className="overview">{active.overview}</p>

          <h3 className="section-label"><span className="lbl-bracket">{"//"}</span> Key Concepts</h3>
          <ul className="points">
            {active.points.map((p, i) => <Point key={i} text={p} i={i} />)}
          </ul>

          {active.code && (
            <>
              <h3 className="section-label"><span className="lbl-bracket">{"//"}</span> Example</h3>
              <CodeBlock code={active.code} />
            </>
          )}

          {active.compare && (
            <>
              <h3 className="section-label"><span className="lbl-bracket">{"//"}</span> Comparison</h3>
              <CompareTable compare={active.compare} />
            </>
          )}

          <div className="pager">
            <button className="pager-btn" onClick={prev} disabled={idx === 0}>
              ← Previous
            </button>
            <span className="pager-count">{active.num} / {SECTIONS.length}</span>
            <button
              className="pager-btn primary"
              onClick={next}
              disabled={idx === SECTIONS.length - 1}
            >
              Next →
            </button>
          </div>
        </div>

        <div className="statusbar">
          <div className="sb-left">
            <span className="sb-item"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 3v12a3 3 0 003 3h9M6 3a3 3 0 100 6M6 3a3 3 0 010 6m12 12a3 3 0 100-6 3 3 0 000 6z"/></svg> main</span>
            <span className="sb-item">{active.group}</span>
          </div>
          <div className="sb-right">
            <span className="sb-item">TSX</span>
            <span className="sb-item">UTF-8</span>
            <span className="sb-item">Ln {active.num}, Col {SECTIONS.length}</span>
          </div>
        </div>
      </main>
    </div>
          <Footer />
    </>
  );
}

const CSS = `
.app {
  --bg: #14141c;
  --bg-2: #191924;
  --panel: #1a1a26;
  --panel-2: #21212f;
  --border: #2c2c3c;
  --text: #e9e9f2;
  --text-dim: #9a9ab0;
  --accent: #6ee7f5;
  --accent-2: #b48eff;
  --code-bg: #0e0e16;
  --code-text: #dde3f0;
  --shadow: 0 10px 30px rgba(0,0,0,0.35);
  --tab-bg: #101018;
  display: flex;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: background 0.25s ease, color 0.25s ease;
  position: relative;
}
.app[data-theme="light"] {
  --bg: #fbfbfe;
  --bg-2: #f4f4fa;
  --panel: #f4f4fa;
  --panel-2: #ebebf4;
  --border: #dcdce8;
  --text: #1c1c28;
  --text-dim: #62627a;
  --accent: #0891a8;
  --accent-2: #6d3fd6;
  --code-bg: #f3f3fb;
  --code-text: #262636;
  --shadow: 0 10px 30px rgba(30,30,60,0.08);
  --tab-bg: #f0f0f8;
}

* { box-sizing: border-box; }

.progress-rail {
  position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 50;
  background: transparent;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width 0.35s ease;
  box-shadow: 0 0 12px var(--accent);
}

.menu-toggle {
  display: none;
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 40;
  align-items: center;
  gap: 6px;
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: var(--shadow);
}
.scrim {
  display: none;
}

.sidebar {
  width: 304px;
  flex-shrink: 0;
  background: var(--panel);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
  margin-top:80px;
}
.sidebar-header {
  padding: 20px 16px 14px;
  border-bottom: 1px solid var(--border);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.brand-mark {
  color: var(--accent);
  font-size: 26px;
  animation: spin 8s linear infinite;
  display: inline-block;
  filter: drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 50%, transparent));
}
@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
.brand-text {
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.1px;
}
.brand-sub {
  font-size: 11px;
  color: var(--text-dim);
  margin-top: 1px;
}
.search-row {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 10px;
  color: var(--text-dim);
  pointer-events: none;
}
.search {
  width: 100%;
  background: var(--panel-2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 8px 10px 8px 30px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s ease;
}
.search::placeholder { color: var(--text-dim); }
.search:focus { border-color: var(--accent); }

.menu {
  overflow-y: auto;
  padding: 10px 8px 12px;
  flex: 1;
}
.menu-group { margin-bottom: 4px; }
.menu-group-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  padding: 12px 8px 5px;
  font-weight: 700;
}
.menu-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
  text-align: left;
  background: transparent;
  border: none;
  color: var(--text-dim);
  padding: 7px 10px;
  border-radius: 7px;
  font-size: 13px;
  cursor: pointer;
  line-height: 1.3;
  transition: background 0.12s ease, color 0.12s ease, transform 0.12s ease;
}
.menu-item:hover { background: var(--panel-2); color: var(--text); transform: translateX(1px); }
.menu-item.active {
  background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 16%, transparent), color-mix(in srgb, var(--accent-2) 10%, transparent));
  color: var(--text);
  box-shadow: inset 2.5px 0 0 var(--accent);
  font-weight: 600;
}
.menu-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.menu-num {
  font-size: 10px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
  width: 18px;
  flex-shrink: 0;
  opacity: 0.85;
}
.no-results { padding: 16px 10px; color: var(--text-dim); font-size: 13px; }

.sidebar-footer {
  border-top: 1px solid var(--border);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-footer-label { font-size: 12px; color: var(--text-dim); }

.theme-toggle { background: none; border: none; padding: 0; cursor: pointer; }
.tt-track {
  position: relative;
  width: 42px;
  height: 22px;
  border-radius: 999px;
  background: var(--panel-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background 0.2s ease;
}
.tt-icon {
  width: 16px; height: 16px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-dim);
  z-index: 1;
}
.tt-knob {
  position: absolute;
  left: 2px;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  transition: left 0.22s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.tt-track.tt-light .tt-knob { left: 22px; }

.content { flex: 1; min-width: 0; display: flex; flex-direction: column; margin-top:80px; }
.tabbar {
  background: var(--tab-bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 12px;
  color: var(--text-dim);
  position: sticky;
  top: 0;
  z-index: 5;
}
.tab { display: flex; align-items: center; gap: 8px; color: var(--text); }
.tab-dot { width: 6px; height: 6px; border-radius: 50%; box-shadow: 0 0 6px currentColor; }
.tabbar-right { font-variant-numeric: tabular-nums; opacity: 0.7; }

.content-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 44px 32px 60px;
  width: 100%;
  flex: 1;
}
.crumb {
  font-size: 12px;
  color: var(--text-dim);
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.crumb-group { color: var(--accent); font-weight: 700; }
.crumb-sep { opacity: 0.5; }
.title {
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 14px;
  letter-spacing: -0.015em;
  line-height: 1.15;
}
.overview {
  color: var(--text-dim);
  font-size: 15.5px;
  line-height: 1.7;
  margin: 0 0 30px;
  max-width: 68ch;
}
.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text);
  margin: 34px 0 14px;
  font-weight: 700;
  font-family: "SF Mono", Menlo, Consolas, monospace;
}
.lbl-bracket { color: var(--accent-2); font-weight: 400; }
.points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.points li {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 9px;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-dim);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.points li:hover { border-color: color-mix(in srgb, var(--accent) 45%, var(--border)); transform: translateX(2px); }
.term { color: var(--text); font-weight: 700; }
.dash { color: var(--text-dim); }

.cb-wrap {
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.cb-bar {
  background: var(--panel-2);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid var(--border);
}
.cb-dot { width: 9px; height: 9px; border-radius: 50%; }
.cb-dot.r { background: #ff5f57; }
.cb-dot.y { background: #febc2e; }
.cb-dot.g { background: #28c840; }
.cb-lang {
  margin-left: auto;
  font-size: 10.5px;
  color: var(--text-dim);
  font-family: "SF Mono", Menlo, Consolas, monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.cb {
  background: var(--code-bg);
  padding: 16px 18px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.65;
  margin: 0;
}
.cb code {
  font-family: "SF Mono", Menlo, Consolas, monospace;
  color: var(--code-text);
  white-space: pre;
}

.tbl-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: 10px; box-shadow: var(--shadow); }
.tbl { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.tbl th, .tbl td {
  padding: 11px 15px;
  text-align: left;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.tbl th {
  background: var(--panel-2);
  color: var(--accent);
  font-weight: 700;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-family: "SF Mono", Menlo, Consolas, monospace;
}
.tbl td { color: var(--text-dim); }
.tbl tr:last-child td { border-bottom: none; }
.tbl tr:hover td { color: var(--text); background: color-mix(in srgb, var(--accent) 5%, transparent); }

.pager {
  margin-top: 44px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pager-btn {
  background: var(--panel-2);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.1s ease;
}
.pager-btn.primary {
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 22%, var(--panel-2)), color-mix(in srgb, var(--accent-2) 18%, var(--panel-2)));
}
.pager-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.pager-btn:not(:disabled):hover { border-color: var(--accent); transform: translateY(-1px); }
.pager-count { color: var(--text-dim); font-size: 12.5px; font-variant-numeric: tabular-nums; font-family: "SF Mono", Menlo, Consolas, monospace; }

.statusbar {
  background: var(--tab-bg);
  border-top: 1px solid var(--border);
  padding: 6px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-dim);
  font-family: "SF Mono", Menlo, Consolas, monospace;
}
.sb-left, .sb-right { display: flex; align-items: center; gap: 16px; }
.sb-item { display: flex; align-items: center; gap: 5px; white-space: nowrap; }

@media (max-width: 860px) {
  .menu-toggle { display: flex; }
  .scrim { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 29; }
  .sidebar {
    position: fixed;
    inset: 0 15% 0 0;
    z-index: 30;
    transform: translateX(-105%);
    transition: transform 0.25s ease;
    width: 85%;
  }
  .sidebar.open { transform: translateX(0); }
  .tabbar { padding-left: 56px; }
  .content-inner { padding: 60px 18px 50px; }
  .title { font-size: 24px; }
  .tbl th, .tbl td { white-space: normal; }
  .statusbar { display: none; }
}
  
`;