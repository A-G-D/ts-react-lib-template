# React Component Library Template (TypeScript)

A ready to use template for creating your own component library for React, with support for TypeScript, Jest, Storybook, TailwindCSS, and various CSS precompilers. It also comes with built-in code linting and formatting, so you can focus on writing your code logic instead of worrying how your code looks.

## Setup

```bash
git clone https://github.com/A-G-D/ts-react-lib-template.git
cd ts-react-lib-template
yarn install
```

## Features

Features supported out-of-the-box includes:

- TypeScript
- TailwindCSS
- CSS Precompilers (Sass/Scss, Less, Stylus)
- Code Linting and Formatting (ESLint + Prettier)
- Jest
- Storybook
- Utility Scripts

## Testing

### Automated Unit Testing (Using Jest)

You can write automated unit tests for your React components and **use JSX in your unit tests**\*\*.

\*\***Not Yet Implemented**

```bash
yarn test
```

### Visual and Interactive Component Testing (Using Storybook)

```bash
yarn storybook
```

## Utility Scripts

### `yarn create-component <component-name>`

Creates a template for a new react component. This will create a folder named \<component-name\> inside the 'src' directory. Inside the folder, it will create the following files:

- \<component-name\>.scss - style classes for the component
- \<component-name\>.stories.tsx - Storybook stories for the component
- \<component-name\>.test.tsx - automated unit tests for the component
- \<component-name\>.tsx - component

### `yarn rename-component <component-name> <new-name>` \(TO-DO\)

Renames an existing react component.

## Building

```bash
yarn build
```

## License

This repo is released under [MIT License](LICENSE).
