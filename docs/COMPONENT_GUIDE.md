# Component Usage Guide

## 🏗️ Component Architecture

### Component Hierarchy Overview
```
Application
├── Core Components (src/components/)
│   ├── Layout & Navigation
│   ├── UI Primitives  
│   └── Utility Components
└── Feature Components (src/pages/*/components/)
    ├── Page-Specific Sections
    ├── Interactive Elements
    └── Data Display Components
```

## 🎯 Core Components (src/components/)

### Layout & Utility Components

#### ErrorBoundary.jsx
```jsx
// Purpose: Catch and handle React errors gracefully
// Usage: Wraps the entire application in Routes.jsx
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// Features:
// - Catches JavaScript errors anywhere in child component tree
// - Displays fallback UI instead of breaking the entire page
// - Logs errors for debugging
```

#### ScrollToTop.jsx
```jsx
// Purpose: Reset scroll position on route changes
// Usage: Automatically included in Routes.jsx
// Features:
// - Scrolls to top when navigating between pages
// - Preserves scroll position for back/forward navigation
// - Improves user experience for single-page applications
```

### UI Primitive Components

#### Button.jsx
```jsx
// Purpose: Consistent button styling across the application
// Usage:
import Button from "components/ui/Button";

<Button 
  variant="primary"     // primary, secondary, outline, ghost
  size="lg"            // sm, md, lg, xl
  onClick={handleClick}
  disabled={isLoading}
>
  Click Me
</Button>

// Variants:
// - primary: Main action buttons (primary color scheme)
// - secondary: Secondary actions (secondary color scheme)  
// - outline: Border-only buttons
// - ghost: Text-only buttons

// Features:
// - Consistent hover/focus states
// - Loading states
// - Icon support
// - Responsive sizing
```

#### Input.jsx
```jsx
// Purpose: Styled form input with consistent design
// Usage:
import Input from "components/ui/Input";

<Input
  type="text"          // text, email, password, etc.
  placeholder="Enter text..."
  value={value}
  onChange={handleChange}
  error={errorMessage} // Shows error state
  label="Input Label"  // Accessible label
  required
/>

// Features:
// - Built-in error states
// - Focus/hover animations
// - Accessible labeling
// - Tailwind styled
```

#### Header.jsx
```jsx
// Purpose: Main navigation header
// Usage: Global component for site navigation
// Features:
// - Responsive navigation menu
// - Logo/branding display
// - Mobile hamburger menu
// - Route highlighting
```

### Asset Components

#### AppIcon.jsx
```jsx
// Purpose: Wrapper for Lucide React icons with consistent styling
// Usage:
import AppIcon from "components/AppIcon";

<AppIcon 
  name="Menu"          // Lucide icon name
  size={24}           // Icon size in pixels
  className="text-primary" // Additional Tailwind classes
/>

// Features:
// - Consistent icon sizing
// - Custom color support
// - Hover states
// - Accessibility attributes
```

#### AppImage.jsx
```jsx
// Purpose: Optimized image component with fallbacks
// Usage:
import AppImage from "components/AppImage";

<AppImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fallback="/assets/images/no_image.png"
  className="w-full h-64 object-cover"
/>

// Features:
// - Automatic fallback on load errors
// - Lazy loading support
// - Responsive image handling
// - SEO-friendly alt text
```

## 📄 Page Components Structure

### Standard Page Pattern
Each page follows this consistent structure:

```jsx
// pages/[page-name]/index.jsx
import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

const PageName = () => {
  return (
    <>
      <Helmet>
        <title>Page Title | Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Page description" />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <ContentSection />
      </div>
    </>
  );
};

export default PageName;
```

### Page-Specific Component Categories

#### Hero Sections
```jsx
// Purpose: Page introduction with visual impact
// Common props:
- title: Main heading
- subtitle: Supporting text
- backgroundImage: Hero background
- ctaButton: Call-to-action
- animation: Framer Motion variants

// Example usage in pages:
<HeroSection 
  title="Technical Mastery Center"
  subtitle="Showcasing skills and expertise"
  ctaButton={{ text: "Explore Skills", action: scrollToSkills }}
/>
```

#### Interactive Elements
```jsx
// Purpose: User engagement components
// Examples:
- ProjectFilter: Filter project categories
- SkillsVisualization: Interactive skill charts
- TimelineFilter: Timeline navigation
- CodePlayground: Interactive code examples

// Common patterns:
- State management with useState
- Event handling
- Animation with Framer Motion
- Responsive design
```

#### Data Display Components
```jsx
// Purpose: Present information in structured formats
// Examples:
- ProjectCard: Individual project showcase
- SkillCard: Skill representation
- TestimonialCard: Client feedback
- TimelineNode: Career milestone

// Common features:
- Consistent card layouts
- Hover animations
- Modal integration
- Responsive grid systems
```

## 🎨 Styling Patterns

### Tailwind Class Conventions
```jsx
// Color Scheme Usage:
className="bg-primary text-primary-foreground"     // Main brand colors
className="bg-secondary text-secondary-foreground" // Supporting colors
className="bg-accent text-accent-foreground"       // Highlight colors

// Responsive Design:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-sm md:text-base lg:text-lg"
className="p-4 md:p-6 lg:p-8"

// Interactive States:
className="hover:bg-primary-100 transition-colors duration-200"
className="focus:ring-2 focus:ring-primary focus:outline-none"
```

### Component Styling Best Practices
1. **Consistent Spacing**: Use the 4px grid system (p-4, m-4, etc.)
2. **Color Consistency**: Use the custom color palette
3. **Responsive Design**: Mobile-first approach
4. **Animations**: Smooth transitions with duration-200/300
5. **Accessibility**: Focus states and ARIA attributes

## 🔄 Component Lifecycle Patterns

### State Management
```jsx
// Local State (preferred for most components):
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(true);
const [data, setData] = useState(null);

// Effect Hooks:
useEffect(() => {
  // Data fetching
  // Event listeners
  // Cleanup functions
}, [dependencies]);

// Form Handling:
import { useForm } from "react-hook-form";
const { register, handleSubmit, formState: { errors } } = useForm();
```

### Animation Patterns
```jsx
// Framer Motion Usage:
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Common animation variants:
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

## 📱 Responsive Design Guidelines

### Breakpoint Strategy
```jsx
// Tailwind Breakpoints:
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Small laptops
xl: 1280px  // Large laptops
2xl: 1536px // Desktop monitors

// Usage Pattern:
className="
  // Mobile first (default)
  grid grid-cols-1 gap-4 p-4
  // Tablet
  md:grid-cols-2 md:gap-6 md:p-6
  // Desktop
  lg:grid-cols-3 lg:gap-8 lg:p-8
"
```

### Mobile-First Component Design
1. **Layout**: Stack vertically on mobile, grid on larger screens
2. **Typography**: Smaller text on mobile, scale up
3. **Spacing**: Reduced padding/margins on mobile
4. **Navigation**: Hamburger menu on mobile, full nav on desktop
5. **Images**: Full-width on mobile, constrained on desktop

## 🧪 Component Testing Patterns

### Testing Approach
```jsx
// Component Testing with Testing Library:
import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'components/ui/Button';

test('renders button with correct text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 🔧 Development Guidelines

### Adding New Components
1. **Location**: Core components in `src/components/`, page-specific in `src/pages/[page]/components/`
2. **Naming**: PascalCase files, descriptive names
3. **Structure**: Export default, import dependencies at top
4. **Props**: Use destructuring, provide defaults
5. **Styling**: Use Tailwind classes, follow color scheme
6. **Accessibility**: Include ARIA labels, semantic HTML

### Modifying Existing Components
1. **Backward Compatibility**: Don't break existing props API
2. **Testing**: Verify changes don't break existing usage
3. **Documentation**: Update component comments
4. **Responsive**: Test across all breakpoints
5. **Performance**: Consider React.memo for expensive renders

This guide ensures consistent component development and usage across the portfolio project.
