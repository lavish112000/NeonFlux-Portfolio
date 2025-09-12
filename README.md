# NeonFlux Portfolio

A Glassmorphism Inspired Interactive Portfolio Website built with Next.js 15, React 18, and TypeScript.

## ✨ Features

- **Glass UI Panels**: Interactive 'Glassmorphism' panels with frosted glass effect and dynamic neon accents
- **Animated Glowing Lines**: Dynamic SVG animations with glowing effects
- **Animated Data Visualization**: Interactive mock data visualizations with progress bars and charts
- **AI-Powered Project Curation**: Intelligent project details curation using generative AI
- **Fully Responsive**: Complete responsiveness across desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lavish112000/NeonFlux-Portfolio.git
   cd NeonFlux-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run quality checks**
   ```bash
   npm run check-all
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:9002
   ```

## 🧪 Development Workflow

### Code Quality Tools

This project uses a comprehensive code quality setup:

- **TypeScript**: Strict type checking
- **ESLint**: Code linting with React, TypeScript, and accessibility rules
- **Prettier**: Automatic code formatting
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing utilities

### Available Scripts

```bash
# Development
npm run dev                # Start development server with Turbopack
npm run build             # Build for production
npm run start             # Start production server

# Code Quality
npm run typecheck         # TypeScript type checking
npm run lint              # Run ESLint
npm run lint:fix          # Fix auto-fixable ESLint issues
npm run format            # Format code with Prettier
npm run format:check      # Check if code is formatted

# Testing
npm test                  # Run tests
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report

# Combined Commands
npm run check-all         # Run all quality checks (typecheck + lint + format + test)
npm run fix-all           # Fix all auto-fixable issues
```

## 🏗️ Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About page
│   ├── alpha/        # Alpha project showcase
│   ├── beta/         # Beta project showcase
│   ├── contact/      # Contact page
│   ├── services/     # Services page
│   └── ...
├── components/       # Reusable UI components
│   ├── ui/          # Basic UI components (shadcn/ui)
│   ├── charts/      # Chart components
│   └── ...
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
└── ai/             # AI-related functionality
```

## 🎨 Design System

### Color Palette
- **Primary**: Vibrant neon blue (#4287f5) for interactive elements
- **Background**: Very dark navy (#0A192F) for space theme
- **Accent**: Neon purple (#A239CA, #E30B5D) for highlights

### Typography
- **Font**: Inter sans-serif for modern, readable text
- **Styles**: Clear hierarchy with consistent spacing

### Components
- Glassmorphism UI panels with backdrop blur
- Minimalist icons with neon outlines
- Grid-based layout for responsive design
- Subtle animations and transitions

## 🧪 Testing

### Test Structure
```
src/
├── components/__tests__/    # Component tests
├── lib/__tests__/          # Utility function tests
└── ...
```

### Testing Guidelines
- Write tests for all new components and utilities
- Use React Testing Library for component testing
- Focus on user behavior rather than implementation details
- Maintain good test coverage for critical functionality

### Running Tests
```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode for development
npm run test:coverage      # Generate coverage report
```

## 🔧 Code Review Process

This project follows a comprehensive code review process documented in [Code Review Checklist](.github/CODE_REVIEW_CHECKLIST.md).

### Quality Gates
All pull requests must pass:
- ✅ TypeScript compilation
- ✅ ESLint rules
- ✅ Prettier formatting
- ✅ Test suite
- ✅ Build process
- ✅ Manual code review

### Automated Checks
GitHub Actions automatically runs:
- Code quality checks
- Security audits
- Dependency reviews
- Performance analysis
- Accessibility validation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for detailed information on:

- Development workflow
- Coding standards
- Testing requirements
- Pull request process

### Before Contributing
1. Read the [Contributing Guide](CONTRIBUTING.md)
2. Check existing issues and discussions
3. Run `npm run check-all` to ensure code quality
4. Follow the pull request template

## 📁 Configuration Files

### Development Tools
- `.eslintrc.mts` - ESLint configuration
- `.prettierrc.json` - Prettier configuration
- `jest.config.js` - Jest testing configuration
- `tsconfig.json` - TypeScript configuration

### VS Code Integration
- `.vscode/settings.json` - Editor settings
- `.vscode/extensions.json` - Recommended extensions
- `.vscode/launch.json` - Debug configurations

## 🔧 AI Integration

The project includes AI-powered features using Firebase Genkit:

```bash
npm run genkit:dev         # Start Genkit development server
npm run genkit:watch       # Start Genkit in watch mode
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add your environment variables here
```

## 📊 Performance

The project is optimized for performance with:
- Next.js 15 App Router for optimal loading
- Turbopack for fast development builds
- Image optimization with Next.js Image component
- Bundle analysis and optimization

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Issues**: Create GitHub issues for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Follow the established review process

## 🎯 Roadmap

- [ ] Enhanced AI project curation
- [ ] Advanced animations and transitions
- [ ] Performance optimizations
- [ ] Accessibility improvements
- [ ] Mobile experience enhancements

---

Built with ❤️ using Next.js, React, TypeScript, and modern web technologies.
