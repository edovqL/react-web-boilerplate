# React Web Boilerplate

A modern React TypeScript boilerplate with a robust architecture and development tooling for building scalable web applications.

## Features

- ⚛️ **React 18** - Latest React version with all its features
- 📦 **TypeScript** - Type safety and improved developer experience
- 🔄 **TanStack Query** - Data fetching and state management for API requests
- 🧰 **Zustand** - Lightweight state management solution
- 🎨 **Material UI** - Complete design system with customizable components
- 🔥 **Emotion** - CSS-in-JS styling solution
- 🔍 **ESLint & Prettier** - Code quality tools
- 🧪 **Jest & Testing Library** - Comprehensive testing suite
- 🚀 **Husky & lint-staged** - Git hooks for code quality
- 📊 **SonarQube** - Code quality scanning integration
- 🔧 **Code Generation Tools** - Scripts to generate components, domains, features, and more
- 🔥 **Firebase** - Authentication and other Firebase services
- 📈 **New Relic** - Performance monitoring

## Project Structure

```
├── components/          # Reusable UI components
├── constants/          # Application constants
├── domains/            # Domain models and business logic
├── features/           # Feature modules
├── helpers/            # Utility functions
├── hooks/              # Custom React hooks
├── services/           # API services and adapters
├── stores/             # State management stores
├── styles/             # Global styles
├── useCases/           # Business use cases
└── scripts/            # Code generation scripts
```

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-web-boilerplate.git
cd react-web-boilerplate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

## Available Scripts

### `npm run dev`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the app for production to the `build` folder.

### `npm test`

Runs tests in watch mode with Jest.

### `npm run test:coverage`

Runs tests with coverage report.

### `npm run lint`

Lints the codebase using ESLint.

### `npm run prettier`

Formats code using Prettier.

### Code Generation

The boilerplate includes several scripts to generate code:

```bash
# Generate a new component
npm run generate:component ComponentName

# Generate a new domain
npm run generate:domain DomainName

# Generate a new feature
npm run generate:feature FeatureName

# Generate a new service
npm run generate:service ServiceName

# Generate a new store
npm run generate:store StoreName

# Generate a new use case
npm run generate:useCase UseCaseName
```

## Testing

This project uses Jest and React Testing Library for testing. Tests are located next to the files they test with the `.test.ts(x)` extension.

## Commit Guidelines

This project uses conventional commits for standardized commit messages. Use commitizen for guided commit messages:

```bash
git add .
npm run commit
```

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [Material UI](https://mui.com/)
- [Emotion](https://emotion.sh/)
- [Jest](https://jestjs.io/)
