# File Correlations & Relationships

## 🔗 Critical File Dependencies

### Core Application Chain
```
index.html 
    ↓ (script src)
src/index.jsx 
    ↓ (imports & renders)
src/App.jsx 
    ↓ (imports & renders)
src/Routes.jsx 
    ↓ (imports & routes to)
src/pages/*/index.jsx
    ↓ (imports)
src/pages/*/components/*.jsx
```

### Configuration Dependencies
```
package.json → vite.config.mjs → src/ (build pipeline)
tailwind.config.js → postcss.config.js → src/styles/ (styling)
jsconfig.json → src/ (import resolution)
```

## 📁 Entry Points & Bootstrap

### HTML Entry (index.html)
```html
<!-- Links to: -->
- public/favicon.ico (browser icon)
- public/manifest.json (PWA configuration)
- src/index.jsx (React entry point)
```

### React Entry (src/index.jsx)
```jsx
// Dependencies:
import React from "react";           // Core React
import ReactDOM from "react-dom";    // DOM rendering
import App from "./App";            // Root component
import "./styles/index.css";        // Global styles

// Renders: src/App.jsx into DOM
```

### Application Root (src/App.jsx)
```jsx
// Dependencies:
import Routes from "./Routes";       // Application routing

// Purpose: Minimal wrapper for routing system
// Renders: src/Routes.jsx
```

## 🛣️ Routing Architecture

### Route Configuration (src/Routes.jsx)
```jsx
// Core Dependencies:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// Page Imports:
import DynamicHomepage from "pages/dynamic-homepage";
import ProfessionalNetwork from "pages/professional-network";
import ProjectShowcaseGalaxy from "pages/project-showcase-galaxy";
import ProfessionalJourneyHub from "pages/professional-journey-hub";
import CollaborationStudio from "pages/collaboration-studio";
import TechnicalMasteryCenter from "pages/technical-mastery-center";
import NotFound from "pages/NotFound";

// Wraps all routes with:
// - ErrorBoundary (error handling)
// - ScrollToTop (scroll restoration)
```

### Route-to-Component Mapping
```
Route: "/"                          → Component: DynamicHomepage
Route: "/dynamic-homepage"          → Component: DynamicHomepage  
Route: "/professional-network"     → Component: ProfessionalNetwork
Route: "/project-showcase-galaxy"  → Component: ProjectShowcaseGalaxy
Route: "/professional-journey-hub" → Component: ProfessionalJourneyHub
Route: "/collaboration-studio"     → Component: CollaborationStudio
Route: "/technical-mastery-center" → Component: TechnicalMasteryCenter
Route: "*" (fallback)              → Component: NotFound
```

## 📄 Page Component Structure

### Page Component Pattern
Each page follows this relationship pattern:

```
pages/[page-name]/
├── index.jsx                 # Main page component
│   ├── imports React, Helmet
│   ├── imports ./components/*
│   └── exports default PageComponent
└── components/               # Page-specific components
    ├── HeroSection.jsx      # Usually imported first
    ├── ContentSection.jsx   # Main content areas
    ├── FeatureComponent.jsx # Specialized features
    └── ...
```

### Example: Dynamic Homepage Dependencies
```
pages/dynamic-homepage/index.jsx
    ↓ (imports)
├── components/InteractiveCodeHero.jsx
├── components/SkillsVisualization.jsx
├── components/ProjectShowcase.jsx
├── components/CurrentlyBuilding.jsx
├── components/AvailabilityStatus.jsx
└── components/SocialProof.jsx
```

## 🎨 Styling Dependencies

### CSS Processing Chain
```
src/styles/tailwind.css 
    ↓ (imports Tailwind)
tailwind.config.js 
    ↓ (processes with)
postcss.config.js 
    ↓ (outputs to)
src/styles/index.css 
    ↓ (imported by)
src/index.jsx
```

### Tailwind Configuration Relationships
```javascript
// tailwind.config.js affects:
- All component styling
- Color scheme variables
- Typography scales  
- Animation utilities
- Responsive breakpoints

// Extended by plugins:
- @tailwindcss/forms → form styling
- @tailwindcss/typography → rich text
- tailwindcss-animate → animations
- tailwindcss-fluid-type → responsive typography
```

## 🧩 Component Dependencies

### UI Component Hierarchy
```
src/components/ui/
├── Button.jsx               # Used throughout pages
├── Input.jsx                # Used in forms, search
└── Header.jsx               # Used in layout

src/components/
├── AppIcon.jsx              # Used for all icons
├── AppImage.jsx             # Used for all images  
├── ErrorBoundary.jsx        # Wraps Routes.jsx
└── ScrollToTop.jsx          # Used in Routes.jsx
```

### Page Component Dependencies
```
Each page/*/components/*.jsx may import:
├── React hooks (useState, useEffect, etc.)
├── External libraries (framer-motion, lucide-react, etc.)
├── Shared UI components (src/components/ui/*)
├── Utility components (AppIcon, AppImage)
└── Other page components (rare, avoid circular deps)
```

## 📦 Build System Relationships

### Vite Configuration (vite.config.mjs)
```javascript
// Affects:
- Development server behavior
- Build optimization
- Asset handling
- Path resolution (with jsconfig.json)
- Plugin integration (@vitejs/plugin-react)

// Works with:
- package.json (scripts)
- jsconfig.json (path mapping)
- postcss.config.js (CSS processing)
```

### Package.json Scripts
```json
"start" → vite → vite.config.mjs → src/
"build" → vite build → vite.config.mjs → dist/
"serve" → vite preview → dist/
```

## 🔧 Configuration File Relationships

### JavaScript Configuration (jsconfig.json)
```json
{
  "compilerOptions": {
    "baseUrl": "src"  // Enables absolute imports from src/
  }
}

// Enables imports like:
import Button from "components/ui/Button";
// Instead of:
import Button from "../../components/ui/Button";
```

### Environment & Deployment
```
.env files → process.env → Runtime configuration
public/ → Static assets → Direct browser access
dist/ (build output) → Deployment target
```

## 📊 Data Flow Relationships

### State Management Flow
```
User Interaction
    ↓
Page Component (useState)
    ↓
Child Components (props)
    ↓
UI Updates
```

### API Communication Pattern
```
Component Event
    ↓
axios request
    ↓
API Response
    ↓
setState
    ↓
Component Re-render
```

## 🎭 Animation Dependencies

### Framer Motion Integration
```
Page Components
    ↓ (import motion)
framer-motion
    ↓ (applies animations to)
DOM Elements
    ↓ (styled with)
Tailwind Classes
```

### Animation Trigger Chain
```
User Scroll/Interaction
    ↓
Motion Component
    ↓ (triggers)
CSS Transforms
    ↓ (with)
Tailwind Transition Classes
```

## 🔍 Import Resolution Patterns

### Absolute Import Examples
```javascript
// Core components
import Button from "components/ui/Button";
import AppIcon from "components/AppIcon";

// Page components  
import HeroSection from "./components/HeroSection";

// External libraries
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Styles
import "styles/index.css";
```

### Circular Dependency Prevention
```
✅ Good: Page → Page Components → UI Components
✅ Good: UI Components → External Libraries
❌ Avoid: Page Components ↔ Other Page Components
❌ Avoid: Components importing Pages
```

## 🔄 Hot Reload Dependencies

### Development Flow
```
File Change
    ↓
Vite Dev Server
    ↓
Hot Module Replacement
    ↓
Browser Update (preserving state)
```

### Files that trigger full reload:
- vite.config.mjs
- tailwind.config.js
- postcss.config.js
- package.json

### Files that support hot reload:
- All .jsx files
- CSS files
- Public assets

This correlation map helps AI agents understand how changes in one file might affect others, ensuring proper development and maintenance of the portfolio project.
