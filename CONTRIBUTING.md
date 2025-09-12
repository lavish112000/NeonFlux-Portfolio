# Contributing to NeonFlux Portfolio

Thank you for your interest in contributing to the NeonFlux Portfolio project! This guide will help you understand our development process and coding standards.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Code Review Process](#code-review-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Standards](#documentation-standards)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git for version control
- A code editor with TypeScript support (VS Code recommended)

### Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/NeonFlux-Portfolio.git
   cd NeonFlux-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up development environment**
   ```bash
   # Run type checking
   npm run typecheck
   
   # Run linting
   npm run lint
   
   # Check formatting
   npm run format:check
   
   # Run all checks
   npm run check-all
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Run quality checks** frequently during development
   ```bash
   npm run check-all
   ```

4. **Commit your changes** using conventional commits
   ```bash
   git commit -m "feat: add new project card component"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

### TypeScript

- **Strict Mode**: We use TypeScript in strict mode
- **Type Safety**: Avoid `any` types when possible
- **Interfaces**: Use interfaces for object types
- **Generics**: Use generics for reusable components

```typescript
// ✅ Good
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

// ❌ Avoid
const props: any = { title: 'Test', description: 'Test' };
```

### React Components

- **Functional Components**: Use function components with hooks
- **TypeScript Props**: Define proper TypeScript interfaces for props
- **Component Structure**: Keep components focused and single-purpose
- **Hooks**: Use built-in hooks appropriately

```tsx
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Styling

- **Tailwind CSS**: Use Tailwind utility classes
- **Responsive Design**: Mobile-first approach
- **Glassmorphism**: Follow the established design system
- **Semantic Colors**: Use semantic color names from the design system

```tsx
// ✅ Good
<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
  
// ❌ Avoid inline styles
<div style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
```

### File Organization

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
│   ├── ui/          # Basic UI components
│   └── charts/      # Chart components
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
└── ai/             # AI-related functionality
```

### Import Organization

ESLint automatically enforces import order:

```typescript
// External libraries
import React from 'react';
import { NextPage } from 'next';

// Internal components
import { Header } from '@/components/header';
import { ProjectCard } from '@/components/project-card';

// Relative imports
import './styles.css';
```

## Code Review Process

### Before Submitting a PR

1. **Run all quality checks**
   ```bash
   npm run check-all
   ```

2. **Test your changes** manually and with automated tests

3. **Update documentation** if necessary

4. **Fill out the PR template** completely

### Review Criteria

All PRs are reviewed against our [Code Review Checklist](.github/CODE_REVIEW_CHECKLIST.md):

- **Functional Correctness**: Does the code work as intended?
- **Code Quality**: Is the code readable and maintainable?
- **Performance**: Are there any performance implications?
- **Security**: Are there any security concerns?
- **Testing**: Is there adequate test coverage?

### Review Process

1. **Automated Checks**: ESLint, TypeScript, and build checks must pass
2. **Manual Review**: Code is reviewed by maintainers
3. **Testing**: Changes are tested manually
4. **Approval**: PR is approved when all criteria are met

## Testing Guidelines

### Manual Testing

- Test all new functionality thoroughly
- Verify existing functionality isn't broken
- Test on multiple screen sizes for responsive design
- Test keyboard navigation and accessibility

### Future Automated Testing

We plan to implement:
- Unit tests with Jest and React Testing Library
- Integration tests for key user flows
- Visual regression testing
- Performance testing

## Documentation Standards

### Code Documentation

- **JSDoc Comments**: Document complex functions and components
- **Type Definitions**: Use descriptive TypeScript types
- **README Updates**: Keep documentation current

```typescript
/**
 * Renders a project card with glassmorphism styling
 * @param title - The project title
 * @param description - Brief project description
 * @param imageUrl - Optional project image
 */
export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  // Implementation
}
```

### Commit Messages

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Performance Guidelines

### React Performance

- Use `useMemo` and `useCallback` for expensive calculations
- Implement proper key props for lists
- Consider code splitting for large components
- Optimize re-renders

### Next.js Optimization

- Use Next.js Image component for images
- Implement proper metadata for SEO
- Use Server Components when possible
- Consider static generation for static content

### Bundle Size

- Monitor bundle size impact of new dependencies
- Use dynamic imports for large libraries
- Remove unused dependencies regularly

## Accessibility

- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Maintain good color contrast
- Test with screen readers

## Security

- Never commit sensitive data (API keys, passwords)
- Validate all user inputs
- Use proper authentication mechanisms
- Keep dependencies updated

## Getting Help

- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Ask questions in PR comments

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Release notes for significant contributions

Thank you for contributing to NeonFlux Portfolio! 🚀