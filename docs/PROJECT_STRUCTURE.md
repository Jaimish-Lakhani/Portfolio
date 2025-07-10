# Jaimish S. Lakhani Portfolio - Project Architecture & Structure

## 🏗️ Project Overview
A modern, responsive portfolio website built with React, showcasing a developer's skills, projects, and professional journey through multiple themed sections.

## 📁 Project Structure

```
devcraft_portfolio/
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.mjs          # Vite build configuration
│   ├── tailwind.config.js       # Tailwind CSS customization
│   ├── postcss.config.js        # PostCSS configuration
│   ├── jsconfig.json            # JavaScript configuration for absolute imports
│   └── index.html               # HTML entry point
│
├── 📁 public/                   # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/images/
│
├── 📁 src/                      # Source code
│   ├── App.jsx                  # Root application component
│   ├── index.jsx                # React DOM render entry
│   ├── Routes.jsx               # Application routing configuration
│   │
│   ├── 📁 components/           # Reusable UI components
│   │   ├── AppIcon.jsx          # Icon wrapper component
│   │   ├── AppImage.jsx         # Image wrapper component
│   │   ├── ErrorBoundary.jsx    # Error handling component
│   │   ├── ScrollToTop.jsx      # Scroll restoration component
│   │   └── ui/                  # Core UI components
│   │       ├── Button.jsx       # Button component
│   │       ├── Header.jsx       # Header component
│   │       └── Input.jsx        # Input component
│   │
│   ├── 📁 pages/                # Route-specific page components
│   │   ├── NotFound.jsx         # 404 error page
│   │   ├── dynamic-homepage/    # Landing page with interactive elements
│   │   ├── collaboration-studio/ # Team collaboration showcase
│   │   ├── professional-journey-hub/ # Career timeline and growth
│   │   ├── professional-network/ # Network and community involvement
│   │   ├── project-showcase-galaxy/ # Project portfolio display
│   │   └── technical-mastery-center/ # Technical skills and expertise
│   │
│   └── 📁 styles/               # Global styling
│       ├── index.css            # Main CSS entry point
│       └── tailwind.css         # Tailwind CSS imports
│
└── 📁 docs/                     # AI-friendly documentation
    ├── PROJECT_STRUCTURE.md     # This file
    ├── DEPENDENCIES.md          # Dependency documentation
    ├── COMPONENT_GUIDE.md       # Component usage guide
    └── FILE_CORRELATIONS.md     # File relationship mapping
```

## 🔗 File Correlations & Dependencies

### Core Application Flow
```
index.html → src/index.jsx → src/App.jsx → src/Routes.jsx → pages/*
```

### Component Hierarchy
```
App
└── Routes (BrowserRouter)
    ├── ErrorBoundary
    ├── ScrollToTop
    └── RouterRoutes
        ├── DynamicHomepage
        ├── ProfessionalNetwork
        ├── ProjectShowcaseGalaxy
        ├── ProfessionalJourneyHub
        ├── CollaborationStudio
        ├── TechnicalMasteryCenter
        └── NotFound
```

### Page Structure Pattern
Each page follows this consistent structure:
```
pages/[page-name]/
├── index.jsx                    # Main page component
└── components/                  # Page-specific components
    ├── HeroSection.jsx         # Hero/banner section
    ├── ContentSection.jsx      # Main content
    └── FeatureComponent.jsx    # Specialized features
```

## 🎨 Styling Architecture

### Tailwind Configuration
- **Primary Colors**: Slate-based palette (primary-50 to primary-700)
- **Secondary Colors**: Supporting slate variants
- **Accent Colors**: Emerald and blue highlights
- **Custom Extensions**: 
  - Fluid typography
  - Animation utilities
  - Elevation shadows
  - Container queries

### CSS Structure
```
styles/tailwind.css → tailwind.config.js → PostCSS → styles/index.css
```

## 🛣️ Routing Structure

### Route Definitions (src/Routes.jsx)
```javascript
/ → DynamicHomepage (Landing page)
/dynamic-homepage → DynamicHomepage
/professional-network → ProfessionalNetwork
/project-showcase-galaxy → ProjectShowcaseGalaxy
/professional-journey-hub → ProfessionalJourneyHub
/collaboration-studio → CollaborationStudio
/technical-mastery-center → TechnicalMasteryCenter
/* → NotFound (404 page)
```

### Route Pattern
- Kebab-case URLs (e.g., `/professional-journey-hub`)
- Component names in PascalCase (e.g., `ProfessionalJourneyHub`)
- Folder names match route paths

## 🔧 Build & Development Configuration

### Vite Configuration (vite.config.mjs)
- React plugin integration
- Path aliasing for absolute imports
- Development server configuration
- Build optimization settings

### Package Scripts
```json
"start": "vite"              # Development server
"build": "vite build --sourcemap"  # Production build
"serve": "vite preview"      # Preview build locally
```

## 📦 Component Categories

### 1. Layout Components
- `ErrorBoundary.jsx` - Error handling wrapper
- `ScrollToTop.jsx` - Scroll restoration
- `Header.jsx` - Navigation header

### 2. UI Components
- `Button.jsx` - Styled button component
- `Input.jsx` - Form input component
- `AppIcon.jsx` - Icon wrapper
- `AppImage.jsx` - Image wrapper

### 3. Page Components
Each page in `src/pages/` represents a major section of the portfolio

### 4. Feature Components
Page-specific components that implement unique functionality

## 🎯 Key Design Patterns

### 1. Component Composition
- Small, focused components
- Composition over inheritance
- Props-based configuration

### 2. File Organization
- Feature-based folder structure
- Co-location of related components
- Clear separation of concerns

### 3. State Management
- Local state with React hooks
- Redux Toolkit available for complex state
- Form state with react-hook-form

### 4. Error Handling
- ErrorBoundary for React errors
- Graceful degradation
- User-friendly error messages

## 🔄 Development Workflow

### Adding New Features
1. Create component in appropriate folder
2. Follow naming conventions
3. Use existing UI components
4. Implement responsive design
5. Add proper error handling
6. Update routing if needed

### Modifying Existing Components
1. Maintain existing API contracts
2. Preserve responsive behavior
3. Test across all breakpoints
4. Update documentation if needed

This structure ensures maintainability, scalability, and ease of development while providing a clear mental model for AI agents working with the codebase.
