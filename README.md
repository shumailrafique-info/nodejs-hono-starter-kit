# NodeJS-Hono

## Overview

This application is built using **Node.js** and **Hono.js**, a modern, ultrafast web framework. It provides automatic API documentation generation at `/reference` and exposes raw documentation content at `/doc`. The project is structured to ensure code quality using **ESLint** with a well-defined configuration.

## Features

- **Hono.js** framework for efficient routing.
- **Zod** for schema validation and OpenAPI integration.
- **Pino** and **hono-pino** for structured logging.
- **dotenv** for environment variables support.
- Automatically generated API documentation at `/reference`.
- Raw API documentation available at `/doc`.
- ESLint configured to maintain code quality.

---

## Project Structure

```plaintext
nodejs-hono/
│
├── src/               # Source code directory
│   └── index.ts       # Main entry point
├── .eslintrc.js       # ESLint configuration file
├── .env               # Environment variables file (if needed)
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

---

## Prerequisites

Make sure you have the following installed:

- **Node.js**: v18.x or higher
- **pnpm**: Package manager (alternative to npm)

If pnpm is not installed, you can install it via:

```bash
npm install -g pnpm
```

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nodejs-hono
pnpm install
```

---

## Running the Application

To start the application in development mode with **TypeScript**:

```bash
pnpm dev
```

This will watch for changes in `src/index.ts` and reload automatically.

### Linting the Code

To check for code quality issues using ESLint:

```bash
pnpm lint
```

To fix linting issues automatically:

```bash
pnpm run lint:fix
```

---

## Available Endpoints

- **`/reference`**: Automatically generated API documentation.
- **`/doc`**: Raw documentation content for deeper inspection.

---

## ESLint Configuration

The project uses the **@antfu/eslint-config** package, providing a pre-configured set of ESLint rules. The ESLint setup ensures consistent code formatting and catches potential errors early.

Here’s how you can run ESLint:

- **Check for lint errors:**

  ```bash
  pnpm lint
  ```

- **Automatically fix errors:**

  ```bash
  pnpm run lint:fix
  ```

The ESLint configuration supports TypeScript and includes rules from `eslint-plugin-format` to ensure formatted code on every lint run.

---

## Key Dependencies

- **[@hono/node-server](https://www.npmjs.com/package/@hono/node-server)**: A Hono server for Node.js.
- **[@hono/zod-openapi](https://www.npmjs.com/package/@hono/zod-openapi)**: Zod schema integration with OpenAPI.
- **[hono](https://www.npmjs.com/package/hono)**: Fast web framework for edge and server environments.
- **[pino](https://www.npmjs.com/package/pino)**: Fast JSON logger for Node.js.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Loads environment variables from `.env`.
- **[tsx](https://www.npmjs.com/package/tsx)**: TypeScript execution tool for Node.js.

---

## Author

**Shumail Rafique**
For more information, visit [shumail.dev](https://shumail.dev).

---

## License

This project is licensed under the MIT License.
