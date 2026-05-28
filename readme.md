# React Learning Journey - Comprehensive Documentation

This repository contains a series of React projects demonstrating fundamental to advanced concepts, from basic component structure to state management with Redux Toolkit and client-side routing.

---

## Table of Contents

1. [01-basic-react](#01-basic-react) - Basic React Setup with Create React App
2. [01-vite-react](#01-vite-react) - React with Vite Build Tool
3. [02-counter](#02-counter) - useState Hook & State Management
4. [03-tailwind-props](#03-tailwind-props) - Props & Tailwind CSS Styling
5. [04-bg-changer](#04-bg-changer) - Event Handling & Dynamic Styling
6. [05-password-generator](#05-password-generator) - useCallback, useRef, useEffect Hooks
7. [06-currency-converter](#06-currency-converter) - Custom Hooks & API Integration
8. [07-react-router](#07-react-router) - React Router DOM - Client-Side Routing
9. [08-mini-context](#08-mini-context) - React Context API Basics
10. [09-theme-switcher](#09-theme-switcher) - Context API with useContext Hook
11. [10-todo-context-local](#10-todo-context-local) - Todo App with Context & LocalStorage
12. [custom-react](#custom-react) - Understanding React Core Concepts
13. [redux-toolkit-todo](#redux-toolkit-todo) - Redux Toolkit State Management

---

## 01-basic-react

**Build Tool:** Create React App (CRA)
**Technologies:** React, JavaScript (ES5/ES6)

### Concepts Covered:
- **Project Structure:** Standard CRA directory layout with public and src folders
- **Component Import/Export:** Basic component creation and module exports
- **JSX Basics:** JavaScript XML syntax for rendering UI
- **App Entry Point:** Main App.js component imported in index.js

### Key Files:
- `src/App.js` - Root component that imports and renders other components
- `src/index.js` - React DOM entry point that renders the App to the DOM
- `src/Script.js` - Utility function imported and used in App

### Usage:
```bash
npm start    # Run development server
npm test     # Run tests
npm build    # Production build
```

---

## 01-vite-react

**Build Tool:** Vite
**Technologies:** React, Vite, ESLint

### Concepts Covered:
- **Vite Build Tool:** Modern, ultra-fast build tool with native ES modules support
- **HMR (Hot Module Replacement):** Instant updates without full page reload
- **ESLint Configuration:** Code quality and style checking
- **Asset Imports:** Importing images and other static assets in JSX

### Key Differences from CRA:
- Faster development server startup (~100x faster)
- Instant HMR for faster feedback during development
- Native ES modules in the browser
- More minimal configuration required
- Better build output optimization

### Key Files:
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint rules for code quality

---

## 02-counter

**Technologies:** React Hooks, useState, Vite

### Concepts Covered:

#### **useState Hook**
```javascript
const [counter, setCounter] = useState(15);
```
- Creates a state variable and setter function
- Initial value is 15
- State updates trigger component re-render

#### **State Update Patterns**
```javascript
// Direct update
setCounter(counter + 1);

// Callback update (recommended for multiple updates)
setCounter(prevCounter => prevCounter + 1);
```
- Direct updates use current value
- Callback approach prevents stale closures
- React batches state updates for performance

#### **Conditional State Updates**
```javascript
if(counter + 1 === 20) {
  setIsFirstDisabled(true);
}
```
- Update one state based on another
- Enable/disable buttons based on counter value

#### **Multiple State Variables**
```javascript
const [counter, setCounter] = useState(15);
const [isFirstDisabled, setIsFirstDisabled] = useState(false);
const [isSecDisabled, setIsSecDisabled] = useState(false);
```
- Each state variable is independent
- Updates to one don't affect others

### Key Learning Points:
- State updates are asynchronous
- Component re-renders when state changes
- Conditional button disabling based on state values

---

## 03-tailwind-props

**Technologies:** React, Tailwind CSS, Props, Components

### Concepts Covered:

#### **Props (Properties)**
Props are arguments passed to React components for customization:
```javascript
<Card userName='Muhammad Tariq' />
<Card userName='Muhammad Mustaqeem' btnText='visit me'/>
```
- Props are immutable (read-only)
- Enable component reusability
- Allow data to flow from parent to child

#### **Component Composition**
Create reusable Card components with dynamic content:
```javascript
function Card({userName, btnText = 'Visit'}) {
  return (
    <div>
      <h2>{userName}</h2>
      <button>{btnText}</button>
    </div>
  );
}
```

#### **Tailwind CSS**
Utility-first CSS framework for rapid UI development:
```jsx
<h1 className='bg-green-400 text-black p-4 rounded-xl'>
  Tailwind Test
</h1>
```
- Classes combine to create styles
- No custom CSS files needed
- Responsive design with breakpoints (md:, lg:, etc.)
- Common utilities: `p-4` (padding), `bg-green-400` (background), `rounded-xl` (border-radius)

### Key Learning Points:
- Props enable component reusability
- Default props prevent errors when values aren't provided
- Tailwind speeds up styling without leaving HTML

---

## 04-bg-changer

**Technologies:** React, useState, Event Handling, Inline Styles, Tailwind CSS

### Concepts Covered:

#### **Dynamic Inline Styles**
```javascript
const [color, setColor] = useState('olive');

<div style={{backgroundColor: color}} />
```
- Bind state to CSS properties
- Update styles without changing CSS files
- JavaScript object notation for style properties (camelCase: `backgroundColor` not `background-color`)

#### **Event Handling**
```javascript
<button onClick={() => setColor('red')}>
  Red
</button>
```
- onClick handlers receive events or callbacks
- Arrow functions allow inline state updates
- Multiple event types: onClick, onChange, onSubmit, etc.

#### **Tailwind Responsive Layout**
```jsx
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
```
- `fixed` - Fixed positioning on viewport
- `flex` - Flexbox layout
- `flex-wrap` - Items wrap to next line
- `justify-center` - Center items horizontally
- `bottom-12` - Position from bottom
- `inset-x-0` - Full width from left to right

### Key Learning Points:
- State controls dynamic styling
- Event handlers trigger state updates
- Inline styles for JavaScript-driven CSS
- Tailwind utilities for responsive, fixed layouts

---

## 05-password-generator

**Technologies:** React Hooks (useState, useCallback, useEffect, useRef), Tailwind CSS

### Concepts Covered:

#### **useCallback Hook**
```javascript
const passwordGenerator = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(numAllowed) str += '0123456789';
  if(charAllowed) str += '!@#$%^&*-_+=[]{}~`';
  
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numAllowed, charAllowed, setPassword]);
```
- Memoizes function to prevent unnecessary re-renders
- Dependencies array: function recreates only when dependencies change
- Improves performance in complex components

#### **useRef Hook**
```javascript
const passwordRef = useRef(null);

<input ref={passwordRef} readOnly />

passwordRef.current?.select();
window.navigator.clipboard.writeText(password);
```
- Access DOM elements directly without re-rendering
- Persist values across renders without causing re-render
- Common uses: input focus, clipboard operations, text selection

#### **useEffect Hook**
```javascript
useEffect(() => {
  passwordGenerator();
}, [length, numAllowed, charAllowed, passwordGenerator])
```
- Runs side effects after component renders
- Dependencies array controls when effect runs
- Empty array: runs once on mount
- With dependencies: runs when dependencies change
- Used here to regenerate password when options change

#### **Multiple State Variables**
```javascript
const [length, setLength] = useState(8);
const [numAllowed, setNumAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState('');
const [btnText, setBtnText] = useState('Copy');
```

#### **Form Input Events**
```javascript
<input type="range" 
  min={6} max={100} 
  value={length}
  onChange={(e) => setLength(e.target.value)}
/>

<input type="checkbox"
  id="numberInput"
  onChange={() => setNumAllowed((prev) => !prev)}
/>
```
- Range input: e.target.value is numeric
- Checkbox: toggle previous state with `!prev`
- onChange fires on every input change

### Key Learning Points:
- useCallback optimizes performance with memoization
- useRef provides direct DOM access without re-renders
- useEffect manages side effects and dependencies
- Combining hooks creates complex interactive features
- Clipboard API: `navigator.clipboard.writeText()`

---

## 06-currency-converter

**Technologies:** React Hooks, Custom Hooks, API Integration, Component Composition

### Concepts Covered:

#### **Custom Hook - useCurrencyInfo**
```javascript
import useCurrencyInfo from './hooks/useCurrencyInfo.JS';

function App() {
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
}
```
- Encapsulates reusable logic in custom hook
- Fetches currency exchange rates from API
- Returns currency data as object
- Automatically refetches when `from` currency changes

#### **Component Composition & Reusability**
```javascript
<InputBox
  label="From"
  amount={amount}
  currencyOptions={options}
  onCurrencyChange={(currency) => setAmount(amount)}
  selectCurrency={from}
  onAmountChange={(amount) => setAmount(amount)}
/>
```
- InputBox component reused for both "from" and "to" fields
- Props configure component behavior
- Separation of concerns: reusable UI components

#### **Form Handling**
```javascript
<form onSubmit={(e) => {
  e.preventDefault();
  convert()
}}>
```
- `preventDefault()` stops form default submission
- Form submission on button click
- Useful for validation before API calls

#### **State Management Pattern**
```javascript
const [amount, setAmount] = useState(0);
const [from, setFrom] = useState('usd');
const [to, setTo] = useState('pkr');
const [convertedAmount, setConvertedAMount] = useState(0);

const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAMount(amount);
  setAmount(convertedAmount);
}

const convert = () => {
  setConvertedAMount(amount * currencyInfo[to]);
}
```
- Separate state for source and target values
- Swap function exchanges currencies and amounts
- Convert function performs calculation

#### **External API Integration**
```javascript
// In useCurrencyInfo hook
const [data, setData] = useState({});

useEffect(() => {
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then(res => res.json())
    .then(res => setData(res[currency]))
}, [currency])

return data;
```
- Fetch data from public API endpoint
- Parse JSON response
- Cache data in state
- Return processed data

### Key Learning Points:
- Custom hooks encapsulate and share logic
- API integration with fetch and useState/useEffect
- Component composition for reusability
- Form handling and event prevention
- Data transformation for UI consumption

---

## 07-react-router

**Technologies:** React Router DOM v7, createBrowserRouter, Nested Routes, Route Loaders

### Concepts Covered:

#### **React Router Setup**
```javascript
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
```

#### **Routing Concepts**

**Nested Routes:**
- Child routes share parent Layout structure
- Layout contains header, footer, and Outlet component
- Each route renders different component while keeping layout

**URL Parameters:**
```javascript
<Route path='user/:userid' element={<User/>}/>

// Access in component:
import { useParams } from 'react-router-dom';
const { userid } = useParams();
```
- Dynamic URL segments with `:` prefix
- Access via useParams hook
- Enable dynamic content based on URL

**Route Loaders:**
```javascript
<Route loader={githubInfoLoader} path='github' element={<Github/>}/>

export async function githubInfoLoader() {
  const response = await fetch('https://api.github.com/users/tariqali');
  return response.json();
}

// In component:
import { useLoaderData } from 'react-router-dom';
const data = useLoaderData();
```
- Fetch data before component renders
- Prevent rendering until data loads
- Improve user experience with loading states

#### **Navigation Components**

**Link Component:**
```javascript
import { Link } from 'react-router-dom';
<Link to="/">Home</Link>
```
- Prevents full page reload
- Client-side navigation

**NavLink Component:**
```javascript
import { NavLink } from 'react-router-dom';
<NavLink 
  to="about"
  className={({isActive}) => isActive ? "text-orange-700" : "text-white"}
>
  About
</NavLink>
```
- NavLink: automatically styles active link
- Receives isActive prop in className function
- Perfect for navigation menus

#### **Outlet Component**
```javascript
// In Layout.jsx
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />  {/* Nested routes render here */}
      <Footer />
    </>
  )
}
```
- Placeholder for nested route components
- Maintains parent layout while changing content
- Essential for nested routing patterns

### Key Learning Points:
- React Router enables single-page applications (SPAs)
- Nested routes share layouts and prevent duplication
- URL parameters enable dynamic routing based on data
- Route loaders fetch data before rendering (data-driven routing)
- Link prevents full page reloads for better UX
- NavLink highlights active routes automatically
- Outlet renders nested route components

---

## 08-mini-context

**Technologies:** React Context API, useContext Hook, Provider Pattern

### Concepts Covered:

#### **Creating Context**
```javascript
// UserContext.js
import React from "react";

const UserContext = React.createContext();
export default UserContext;
```
- Create context object with `React.createContext()`
- Context holds shared data without prop drilling

#### **Context Provider Component**
```javascript
// UserContextProvider.jsx
import UserContext from "./UserContext.js";
import { useState } from "react";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
```
- Provider component wraps children
- value prop passes data to all descendants
- children pattern allows flexible composition

#### **Using Context in App**
```javascript
// App.jsx
import UserContextProvider from './context/UserContextProvider.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <UserContextProvider>
      <h1>Using Context API in React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
```

#### **Consuming Context**
```javascript
// In Login.jsx or Profile.jsx
import { useContext } from 'react';
import UserContext from '../context/UserContext.js';

function Login() {
  const {user, setUser} = useContext(UserContext);
  
  return (
    <div>
      <input 
        onChange={(e) => setUser(e.target.value)} 
        type="text" 
        placeholder="username"
      />
    </div>
  );
}
```
- useContext hook accesses context value
- Multiple components can consume same context
- Updates in one component visible to all consumers

### Key Learning Points:
- Context API solves prop drilling problem
- Avoids passing props through intermediate components
- Provider pattern centralizes state management
- useContext hook accesses context values
- Good for global state: user, theme, language, etc.
- More lightweight than Redux for small to medium apps

---

## 09-theme-switcher

**Technologies:** React Context API, useContext, useEffect, DOM Manipulation

### Concepts Covered:

#### **Advanced Context Setup**
```javascript
// contexts/theme.js
import React, { createContext } from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext);
}
```
- Custom hook for consuming context (useTheme)
- Default context value for type safety
- Prevents circular dependency issues

#### **State with Multiple Values**
```javascript
const [themeMode, setThemeMode] = useState('light');

const lightTheme = () => {
  setThemeMode('light');
}

const darkTheme = () => {
  setThemeMode('dark');
}
```
- Functions that update state
- Named functions for clarity

#### **useEffect for DOM Manipulation**
```javascript
useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
}, [themeMode]);
```
- Direct DOM manipulation when state changes
- Toggle CSS classes on document element
- Enables CSS-based theme switching

#### **CSS Class-Based Theming**
```css
/* light theme styles */
.light {
  --bg-color: white;
  --text-color: black;
}

/* dark theme styles */
.dark {
  --bg-color: black;
  --text-color: white;
}

/* Components use CSS variables */
.card {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```
- CSS variables (custom properties) define theme colors
- Toggle classes applies theme globally
- Components use theme colors automatically

#### **Passing Context Value**
```javascript
<ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
  <ThemeBtn />
  <Card />
</ThemeProvider>
```
- Provide all theme functions and state
- Components access via useTheme hook

### Key Learning Points:
- Custom useTheme hook simplifies context consumption
- DOM manipulation for class-based theming
- CSS variables provide theme color values
- useEffect syncs React state with DOM
- Theme switching without component re-renders
- Scalable pattern for complex theme systems

---

## 10-todo-context-local

**Technologies:** React Context API, useState, useEffect, localStorage, Array Methods

### Concepts Covered:

#### **Complex State Management**
```javascript
const [todos, setTodos] = useState([]);

const addTodo = (todo) => {
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
}

const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => 
    (prevTodo.id === id ? todo : prevTodo )
  ));
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => 
    prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
  ));
}
```

**Array Operations:**
- **Spread Operator (`...`)**: Clone and add items to arrays
- **map()**: Transform array items, used for updates
- **filter()**: Remove items from array
- **Date.now()**: Generate unique IDs for todos

#### **localStorage Integration**
```javascript
// Read from localStorage on mount
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);

// Write to localStorage when todos change
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])
```
- localStorage persists data across browser sessions
- JSON.parse() converts string to object
- JSON.stringify() converts object to string
- Separate effects for reading and writing
- Dependency array ensures writes happen on updates

#### **Context Provider**
```javascript
function App() {
  // ... state and functions ...
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <TodoForm />
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}
```
- Provide all todo functions to children
- Map todos to TodoItem components
- key prop for list rendering

#### **Reusable Components**
- TodoForm: Adds new todos
- TodoItem: Displays and edits individual todos
- Both access context via useContext

### Key Learning Points:
- Functional state updates with prev parameter
- Immutable array operations (map, filter, spread)
- localStorage for persistent state
- Multiple useEffect hooks for different concerns
- Context centralizes todo management logic
- Key prop important for list rendering
- Separation of concerns between components

---

## custom-react

**Technologies:** JavaScript, DOM API, Custom Render Function

### Concepts Covered:

#### **Understanding React Core**
```javascript
function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    mainContainer.appendChild(domElement);
}
```

**How React works under the hood:**
1. React elements are JavaScript objects
2. Elements describe what should appear on screen
3. React converts elements to DOM nodes
4. Attributes from props become DOM attributes

#### **React Element Structure**
```javascript
const reactElement = {
    type: 'a',          // HTML tag name
    props: {            // Attributes/properties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'  // Content
}

const reactHeading = {
    type: 'h1',
    props: {},
    children: 'Hello World'
}

const reactButton = {
    type: 'button',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google'
}
```

#### **Rendering Elements**
```javascript
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
customRender(reactHeading, mainContainer);
customRender(reactButton, mainContainer);
```
- Each element creates a DOM node
- Props become HTML attributes
- Children become element content

#### **Key Implementation Details**

**Dynamic Attribute Setting:**
```javascript
for (const prop in reactElement.props) {
    if(prop === 'children') continue;  // Skip children, use separately
    domElement.setAttribute(prop, reactElement.props[prop]);
}
```
- Iterate over all props
- Skip 'children' (handled separately)
- Convert JavaScript properties to HTML attributes

**Element Creation:**
```javascript
const domElement = document.createElement(reactElement.type);
```
- Use native DOM API
- Creates actual HTML elements

**Content Insertion:**
```javascript
domElement.innerHTML = reactElement.children;
```
- Set element content from children prop

### Key Learning Points:
- React abstracts DOM creation complexity
- React elements are plain JavaScript objects
- Babel converts JSX to React.createElement() calls
- Understanding this helps debug React issues
- React's reconciliation algorithm is more sophisticated
- Real React handles updates and re-renders efficiently
- This is educational foundation for React understanding

---

## redux-toolkit-todo

**Technologies:** Redux Toolkit, createSlice, configureStore, React-Redux Hooks

### Concepts Covered:

#### **Redux Toolkit Overview**
Redux Toolkit simplifies Redux by:
- Combining actions and reducers in slices
- Built-in Immer for immutable updates
- Automatic handling of thunk middleware
- Single configureStore instead of manual setup

#### **Store Setup**
```javascript
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
});
```
- `configureStore()` creates Redux store
- Combines reducers (only one here, but can scale)
- Adds Redux DevTools support automatically
- Includes thunk middleware by default

#### **Creating a Slice**
```javascript
// features/todo/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello World'}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            };
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            );
        },
    }
});

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
```

**Slice Components:**
- **name**: Namespace for this slice
- **initialState**: Starting state value
- **reducers**: Actions and their logic

**Reducer Functions:**
- Receive `state` and `action` parameters
- Can mutate state directly (Immer handles it)
- `action.payload` contains data passed to action

**Exporting:**
- Export actions for components to dispatch
- Export reducer as default for store

#### **Nanoid**
```javascript
import { nanoid } from "@reduxjs/toolkit";

const id = nanoid();  // Generates unique ID: "v1a2b3c4d5e6f7g8h"
```
- Generates unique, URL-safe IDs
- Better than Date.now() (prevents collisions)
- Included in Redux Toolkit

#### **Using Redux in Components**

**Setup Provider:**
```javascript
// main.jsx
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```
- Provider wraps app to make store available
- All components can access Redux state

**Dispatching Actions:**
```javascript
// components/Addtodo.jsx
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';

function Addtodo() {
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <form onSubmit={add}>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```
- `useDispatch()` hook gets dispatch function
- `dispatch(action(payload))` sends action
- Payload data passed to reducer

**Reading State:**
```javascript
// components/Todos.jsx
import { useSelector } from 'react-redux';

function Todos() {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
```
- `useSelector()` hook reads state
- Selector function picks part of state
- Component re-renders when selected state changes

**Deleting/Updating:**
```javascript
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice.js';

function TodoItem({todo}) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>
        Delete
      </button>
      <button onClick={() => dispatch(updateTodo({id: todo.id, text: 'Updated'}))}>
        Edit
      </button>
    </div>
  );
}
```

#### **Why Redux Toolkit?**

**Before Redux Toolkit (manual Redux):**
```javascript
// Actions
const ADD_TODO = 'ADD_TODO';
const addTodo = (text) => ({ type: ADD_TODO, payload: text });

// Reducer
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {id: Date.now(), text: action.payload}];
    default:
      return state;
  }
}

// Store
import { createStore } from 'redux';
const store = createStore(reducer);
```

**With Redux Toolkit (simplified):**
```javascript
const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({id: nanoid(), text: action.payload});
    }
  }
});
```
- Less boilerplate code
- Easier to read and maintain
- Automatic immer integration

#### **Redux Data Flow**
```
Component dispatches action
         ↓
Reducer receives action and state
         ↓
Reducer updates state immutably
         ↓
Store updates
         ↓
Components subscribed to state re-render
         ↓
UI updates
```

### Key Learning Points:
- Redux Toolkit reduces Redux boilerplate significantly
- Slices combine actions and reducers
- Immer enables "mutable" syntax with immutable results
- useDispatch to trigger actions
- useSelector to read state
- Provider makes store available to all components
- Scalable for large applications with many features
- Works well with DevTools for debugging

---

## Progression Path & Learning Outcomes

### Beginner Concepts (01-04)
- Basic React setup and components
- JSX syntax
- Props and component reusability
- State management with useState
- Styling with Tailwind CSS
- Event handling

### Intermediate Concepts (05-06)
- Advanced hooks (useCallback, useRef, useEffect)
- Custom hooks for logic reuse
- API integration
- Form handling
- Performance optimization

### Intermediate-Advanced (07-10)
- React Router for SPAs
- Context API for global state
- Advanced state patterns
- localStorage for persistence
- DOM manipulation with refs
- Theme switching patterns

### Advanced Concepts (custom-react, redux-toolkit)
- Understanding React internals
- Complex state management
- Redux patterns and ecosystem
- Scalable application architecture
- Production-ready patterns

---

## Quick Reference: React Hooks

| Hook | Purpose | Dependencies |
|------|---------|--------------|
| `useState` | Manage component state | None |
| `useEffect` | Side effects and lifecycle | Array of dependencies |
| `useCallback` | Memoize functions | Array of dependencies |
| `useRef` | Direct DOM access | None |
| `useContext` | Access context values | None |
| `useReducer` | Complex state logic | None |
| `useMemo` | Memoize values | Array of dependencies |

---

## Quick Reference: Redux Toolkit

| Concept | Purpose |
|---------|---------|
| `createSlice` | Combine actions and reducers |
| `configureStore` | Create Redux store |
| `nanoid` | Generate unique IDs |
| `useDispatch` | Get dispatch function |
| `useSelector` | Read state |
| `Provider` | Make store available to app |

---

## Running Projects

Each project has its own `package.json`:

```bash
# Navigate to project directory
cd 02-counter

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build
```

---

## Key Takeaways

1. **React is declarative** - Describe what UI should look like
2. **Components are reusable** - Props enable customization
3. **State drives UI** - State changes trigger re-renders
4. **Hooks enable logic** - useState, useEffect, useCallback, etc.
5. **Context avoids prop drilling** - Global state management
6. **Redux scales** - Redux Toolkit for complex apps
7. **Router enables SPAs** - Client-side navigation
8. **localStorage persists** - Data survives page refreshes

---

## Resources

- [React Official Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

---

*Last Updated: May 28, 2026*
*Total Projects: 13*
*Total Learning Hours: Progressive from beginner to advanced*