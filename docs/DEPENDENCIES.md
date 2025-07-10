# Dependencies Documentation

## 📦 Core Dependencies

### React Ecosystem
```json
"react": "^18.2.0"                    # Core React library
"react-dom": "^18.2.0"                # React DOM rendering
"react-router-dom": "6.0.2"           # Client-side routing
"react-helmet": "^6.1.0"              # Document head management
"react-hook-form": "^7.55.0"          # Form handling and validation
"react-router-hash-link": "^2.4.3"    # Hash link navigation
```

**Purpose & Usage:**
- **React 18.2.0**: Main UI library with concurrent features
- **React Router Dom**: Handles all client-side navigation between portfolio sections
- **React Helmet**: Manages meta tags, titles for SEO optimization
- **React Hook Form**: Efficient form handling in contact/collaboration sections
- **React Router Hash Link**: Smooth scrolling to sections within pages

### Styling & Animation
```json
"tailwindcss": "3.4.6"                # Utility-first CSS framework
"framer-motion": "^10.16.4"           # Animation library
"tailwindcss-animate": "^1.0.7"       # Tailwind animation utilities
"tailwindcss-elevation": "^2.0.0"     # Material Design shadows
"tailwindcss-fluid-type": "^2.0.7"    # Responsive typography
"@tailwindcss/forms": "^0.5.7"        # Form styling utilities
"@tailwindcss/typography": "^0.5.16"  # Rich text styling
"@tailwindcss/aspect-ratio": "^0.4.2" # Aspect ratio utilities
"@tailwindcss/line-clamp": "^0.1.0"   # Text truncation
"@tailwindcss/container-queries": "^0.1.1" # Container query support
```

**Purpose & Usage:**
- **Tailwind CSS**: Primary styling framework with custom color palette
- **Framer Motion**: Page transitions, hover effects, scroll animations
- **Tailwind Extensions**: Enhanced functionality for modern web design
- **Custom Configuration**: Slate-based color scheme, fluid typography, responsive design

### Data Visualization & Charts
```json
"d3": "^7.9.0"                        # Data visualization library
"recharts": "^2.15.2"                 # React chart components
```

**Purpose & Usage:**
- **D3.js**: Complex data visualizations in technical mastery sections
- **Recharts**: Ready-to-use chart components for skills, metrics, analytics
- **Integration**: Used in professional journey timelines, skill assessments, project analytics

### HTTP & API Communication
```json
"axios": "^1.8.4"                     # HTTP client
```

**Purpose & Usage:**
- **Axios**: API communication for contact forms, dynamic content
- **Configuration**: Request/response interceptors, error handling
- **Features**: Contact form submissions, potential CMS integration

### Utility Libraries
```json
"date-fns": "^4.1.0"                  # Date manipulation
"bcrypt": "^6.0.0"                    # Password hashing (if auth needed)
"dotenv": "^16.0.1"                   # Environment variables
"lucide-react": "^0.484.0"            # Icon library
```

**Purpose & Usage:**
- **date-fns**: Timeline formatting, project dates, experience duration
- **bcrypt**: Security for any authentication features
- **dotenv**: Environment configuration for API keys, deployment settings
- **Lucide React**: Consistent icon system throughout the portfolio

### State Management
```json
"@reduxjs/toolkit": "^2.6.1"          # Modern Redux implementation
"redux": "^5.0.1"                     # State management library
```

**Purpose & Usage:**
- **Redux Toolkit**: Global state management (if needed for complex features)
- **Use Cases**: User preferences, theme settings, application-wide state
- **Current Status**: Available but not extensively used (favor local state)

## 🛠️ Development Dependencies

### Build Tools
```json
"vite": "5.0.0"                       # Fast build tool and dev server
"@vitejs/plugin-react": "4.3.4"       # Vite React integration
"vite-tsconfig-paths": "3.6.0"        # Path mapping support
```

**Purpose & Usage:**
- **Vite**: Ultra-fast development server, optimized production builds
- **React Plugin**: JSX transformation, hot module replacement
- **Path Support**: Absolute imports from src/ directory

### CSS Processing
```json
"postcss": "8.4.8"                    # CSS transformation tool
"autoprefixer": "10.4.2"              # CSS vendor prefixes
```

**Purpose & Usage:**
- **PostCSS**: CSS processing pipeline for Tailwind
- **Autoprefixer**: Cross-browser CSS compatibility

### Testing Framework
```json
"@testing-library/react": "^11.2.7"   # React component testing
"@testing-library/jest-dom": "^5.15.1" # Jest DOM matchers
"@testing-library/user-event": "^12.8.3" # User interaction testing
```

**Purpose & Usage:**
- **Testing Library**: Component testing with user-centric approach
- **Jest DOM**: Enhanced matchers for DOM testing
- **User Event**: Simulating user interactions

### Development Enhancement
```json
"@dhiwise/component-tagger": "^1.0.9"  # Component development tool
```

**Purpose & Usage:**
- **Component Tagger**: Development tool for component identification and debugging

## 🔗 Dependency Relationships

### Critical Path Dependencies
```
React → React Router Dom → Pages
Tailwind CSS → Custom Config → Styling
Vite → React Plugin → Development Experience
Framer Motion → Page Transitions → User Experience
```

### Feature-Specific Dependencies
```
Contact Forms: react-hook-form + axios
Data Visualization: d3 + recharts
Icons: lucide-react
Date Handling: date-fns
SEO: react-helmet
```

### Build Pipeline
```
Source Code → Vite → PostCSS → Autoprefixer → Tailwind CSS → Production Bundle
```

## 📋 Package Scripts

```json
"scripts": {
  "start": "vite",                    # Start development server
  "build": "vite build --sourcemap", # Build for production with source maps
  "serve": "vite preview"             # Preview production build locally
}
```

## 🔄 Dependency Management

### Version Strategy
- **React Ecosystem**: Latest stable versions for modern features
- **Tailwind CSS**: Latest version for newest utilities and features
- **Vite**: Latest version for optimal development experience
- **Utility Libraries**: Stable versions with good community support

### Security Considerations
- Regular dependency updates
- Vulnerability scanning
- Minimal dependency footprint
- Trusted package sources

### Performance Impact
- **Bundle Size**: Optimized for minimal production bundle
- **Tree Shaking**: Vite automatically removes unused code
- **Code Splitting**: Route-based splitting available
- **Lazy Loading**: Component-level lazy loading when needed

## 🚀 Adding New Dependencies

### Before Adding
1. Evaluate if functionality can be achieved with existing dependencies
2. Consider bundle size impact
3. Check maintenance status and community support
4. Ensure compatibility with existing stack

### Installation Process
1. `npm install [package-name]`
2. Update this documentation
3. Update .copilot-instructions.md if it affects development patterns
4. Test integration with existing codebase

### Recommended Categories
- **UI Components**: Ensure Tailwind CSS compatibility
- **Animations**: Check Framer Motion integration
- **Data Handling**: Consider axios and existing patterns
- **Utilities**: Prefer lightweight, focused libraries
