# AI Agent Development Context

## 🤖 Quick Start for AI Agents

### Project Identity
**Name**: Jaimish S. Lakhani Portfolio  
**Type**: Modern React Portfolio Website  
**Purpose**: Showcase developer skills, projects, and professional journey  
**Architecture**: Component-based SPA with multiple themed sections  

### Tech Stack Summary
- **Frontend**: React 18.2.0 + Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.6 + Custom Color Palette
- **Routing**: React Router Dom 6.0.2
- **Animation**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.484.0
- **Charts**: Recharts 2.15.2 + D3 7.9.0
- **Forms**: React Hook Form 7.55.0

## 🎯 Core Development Rules

### 1. File Structure Conventions
```
✅ DO: Follow the established page/component pattern
✅ DO: Use absolute imports from src/ (e.g., "components/ui/Button")
✅ DO: Place page-specific components in pages/[page-name]/components/
❌ DON'T: Create circular dependencies between pages
❌ DON'T: Import pages into other pages
```

### 2. Styling Guidelines
```
✅ DO: Use the custom Tailwind color palette (primary-*, secondary-*, accent-*)
✅ DO: Follow mobile-first responsive design
✅ DO: Use consistent spacing (4px grid: p-4, m-4, gap-4)
❌ DON'T: Override Tailwind with custom CSS unless absolutely necessary
❌ DON'T: Break the established color scheme
```

### 3. Component Patterns
```
✅ DO: Use functional components with hooks
✅ DO: Implement error boundaries for robust UX
✅ DO: Include proper accessibility attributes
❌ DON'T: Use class components (legacy)
❌ DON'T: Forget responsive design considerations
```

## 🛠️ Common Development Tasks

### Adding a New Page
1. Create folder: `src/pages/new-page-name/`
2. Create main component: `src/pages/new-page-name/index.jsx`
3. Create components folder: `src/pages/new-page-name/components/`
4. Add route to `src/Routes.jsx`
5. Follow the helmet SEO pattern
6. Implement responsive design

### Creating New Components
1. Choose location: `src/components/` (reusable) or `src/pages/*/components/` (page-specific)
2. Use PascalCase naming: `ComponentName.jsx`
3. Follow the established props pattern
4. Include responsive Tailwind classes
5. Add Framer Motion animations if needed

### Modifying Existing Components
1. Read the component first to understand current API
2. Maintain backward compatibility
3. Test responsive behavior
4. Update related documentation if needed

## 🎨 Design System Quick Reference

### Color Palette
```css
/* Primary Colors (Slate-based) */
primary-50  to primary-700    # Main brand colors
secondary-50 to secondary-700 # Supporting colors  
accent-50 to accent-700       # Highlight colors

/* Usage Examples */
bg-primary text-primary-foreground     # Main elements
bg-secondary text-secondary-foreground # Secondary elements
bg-accent text-accent-foreground       # Highlights/CTAs
```

### Typography Scale
```css
/* Responsive Typography */
text-sm md:text-base lg:text-lg        # Body text
text-lg md:text-xl lg:text-2xl         # Subheadings
text-2xl md:text-3xl lg:text-4xl       # Headings
text-4xl md:text-5xl lg:text-6xl       # Hero text
```

### Spacing System
```css
/* Consistent Spacing (4px grid) */
p-4 md:p-6 lg:p-8                      # Padding
m-4 md:m-6 lg:m-8                      # Margin
gap-4 md:gap-6 lg:gap-8                # Grid/Flex gaps
```

## 🔧 Build & Development

### Available Scripts
```bash
npm start     # Development server (Vite)
npm run build # Production build
npm run serve # Preview production build
```

### Development Server
- **URL**: http://localhost:3000 (default)
- **Hot Reload**: Automatic for .jsx files
- **Full Reload**: Config file changes

### Common Issues & Solutions
```
❗ Import Error: Use absolute imports from src/
❗ Styling Issue: Check Tailwind class conflicts
❗ Route Issue: Verify Routes.jsx configuration
❗ Build Error: Check for TypeScript-like syntax in .jsx files
```

## 📱 Responsive Design Breakpoints
```css
/* Mobile First Approach */
Default:    < 640px     # Mobile phones
sm:         640px+      # Large phones, small tablets
md:         768px+      # Tablets
lg:         1024px+     # Small laptops, large tablets
xl:         1280px+     # Laptops, desktops
2xl:        1536px+     # Large desktops
```

## 🧩 Component Import Patterns

### Standard Imports
```jsx
// React & Hooks
import React, { useState, useEffect } from "react";

// External Libraries
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

// Router
import { Link, useNavigate } from "react-router-dom";

// UI Components
import Button from "components/ui/Button";
import Input from "components/ui/Input";

// Utility Components  
import AppIcon from "components/AppIcon";
import AppImage from "components/AppImage";

// Page-specific Components
import HeroSection from "./components/HeroSection";
```

## 🎭 Animation Guidelines

### Framer Motion Patterns
```jsx
// Page Transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Hover Effects
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>

// Scroll Animations
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
```

## 📊 Data Visualization

### Chart Components (Recharts)
```jsx
import { LineChart, BarChart, PieChart } from "recharts";

// Used for: Skills visualization, project metrics, timeline data
// Styling: Matches Tailwind color scheme
// Responsive: Built-in responsive containers
```

## 🔍 SEO & Meta Tags

### Helmet Pattern
```jsx
import { Helmet } from "react-helmet";

<Helmet>
  <title>Page Title | Jaimish S. Lakhani Portfolio</title>
  <meta name="description" content="Page description for SEO" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page description" />
</Helmet>
```

## 🎯 Performance Considerations

### Optimization Strategies
- **Bundle Splitting**: Route-based code splitting available
- **Image Optimization**: Use AppImage component with fallbacks  
- **Animation Performance**: Use transform properties for smooth animations
- **State Management**: Prefer local state, Redux Toolkit available for complex state

### Monitoring
- **Vite Bundle Analysis**: Available for production builds
- **Lighthouse Audits**: Regular performance monitoring
- **Core Web Vitals**: Focus on loading, interactivity, visual stability

## 📚 Documentation References

For deeper understanding, refer to:
- `docs/PROJECT_STRUCTURE.md` - Complete project architecture
- `docs/DEPENDENCIES.md` - All dependencies and their purposes  
- `docs/COMPONENT_GUIDE.md` - Component usage and patterns
- `docs/FILE_CORRELATIONS.md` - File relationships and dependencies
- `.copilot-instructions.md` - Detailed development guidelines
- `.copilot-prompts.md` - AI-specific development prompts

This context file provides everything an AI agent needs to quickly understand and effectively work with the Jaimish S. Lakhani Portfolio codebase.
