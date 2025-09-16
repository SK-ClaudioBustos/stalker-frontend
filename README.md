# Stalker Frontend

A modern Next.js frontend application for browsing and displaying Stalker game modifications. Built with TypeScript, Tailwind CSS, and powered by GraphQL for efficient data fetching.

## Features

- **Modifications Display**: Browse Stalker game modifications with cover images
- **Real-time Updates**: Live notifications via GraphQL subscriptions
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Type-Safe**: Full TypeScript support with generated GraphQL types
- **Modern Stack**: Next.js 15 with React 19 and latest tooling

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL**: Apollo Client with GraphQL Codegen
- **Build Tool**: Turbopack
- **Linting**: ESLint

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stalker-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Configure your GraphQL endpoint and other required variables

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:4000`

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run generate` - Generate GraphQL types and hooks


## GraphQL

The application uses GraphQL for data fetching with the following key operations:

- `getModifications` - Fetch modifications by game and type
- `notification` - Real-time notifications subscription

Generated types and hooks are available in the `@generated` module.

## License

This project is private and proprietary.