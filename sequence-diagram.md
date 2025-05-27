# React App Sequence Diagram

## How the React Application Works

This sequence diagram shows the flow of execution in your React application from initial load to user interactions.

```mermaid
sequenceDiagram
    participant Browser
    participant Vite as Vite Dev Server
    participant HTML as index.html
    participant Main as main.jsx
    participant App as App.jsx
    participant React as React Runtime
    participant DOM as Virtual DOM
    participant RealDOM as Real DOM

    Note over Browser, RealDOM: Initial Application Load

    Browser->>Vite: Request http://localhost:5173
    Vite->>HTML: Serve index.html
    HTML->>Browser: Load HTML with script tag
    Browser->>Vite: Request main.jsx (ES modules)
    Vite->>Main: Transform and serve main.jsx
    
    Note over Main, React: React Application Bootstrap
    
    Main->>React: Import React and ReactDOM
    Main->>App: Import App component
    Main->>React: ReactDOM.createRoot(document.getElementById('root'))
    React->>RealDOM: Find root element
    Main->>React: root.render(<App />)
    
    Note over React, App: Component Initialization
    
    React->>App: Create App component instance
    App->>React: useState(0) - Initialize count state
    React->>App: Return [count, setCount] = [0, function]
    App->>React: Return JSX structure
    
    Note over React, RealDOM: Initial Render
    
    React->>DOM: Create Virtual DOM tree
    DOM->>RealDOM: Reconcile and update Real DOM
    RealDOM->>Browser: Display rendered content
    
    Note over Browser, RealDOM: User Interaction - Button Click
    
    Browser->>RealDOM: User clicks counter button
    RealDOM->>React: onClick event triggered
    React->>App: Call setCount((count) => count + 1)
    App->>React: State update: count = 1
    
    Note over React, RealDOM: Re-render Process
    
    React->>App: Re-render with new state
    App->>React: Return updated JSX with count = 1
    React->>DOM: Create new Virtual DOM tree
    DOM->>DOM: Diff with previous Virtual DOM
    DOM->>RealDOM: Update only changed elements
    RealDOM->>Browser: Display updated count
    
    Note over Browser, RealDOM: Hot Module Replacement (HMR)
    
    Browser->>Vite: WebSocket connection (for HMR)
    Note over Vite: Developer edits App.jsx
    Vite->>Browser: Send HMR update via WebSocket
    Browser->>React: Apply hot update
    React->>App: Re-initialize component with changes
    App->>RealDOM: Update display without full page reload
```

## Key Components Explained

### 1. **Vite Dev Server**
- Serves the application files
- Provides Hot Module Replacement (HMR)
- Transforms ES modules on-the-fly

### 2. **main.jsx (Entry Point)**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

### 3. **App.jsx (Main Component)**
- Uses `useState` hook for state management
- Manages counter state
- Renders UI elements and handles user interactions

### 4. **React Runtime**
- Manages component lifecycle
- Handles state updates and re-renders
- Implements Virtual DOM diffing

## State Flow in Detail

1. **Initial State**: `count = 0`
2. **User clicks button**: Triggers `onClick` handler
3. **State update**: `setCount((count) => count + 1)`
4. **Re-render**: React re-renders App component
5. **DOM update**: Only the button text changes in the real DOM
6. **Display**: User sees updated count

## Hot Module Replacement (HMR) Flow

1. Developer edits `App.jsx`
2. Vite detects file change
3. Vite transforms the updated module
4. Vite sends update to browser via WebSocket
5. React applies the update without losing state
6. Component re-renders with new code

This architecture ensures fast development with instant feedback!
