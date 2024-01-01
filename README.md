# Gallery Typescript + React

This is a test gallery application. It is written in Typescript and React with yarn and vite. This project is a test project to learn Typescript and React. This is inspired by [Code with Mosh](https://codewithmosh.com/). We will try to go step by step and learn the basics of Typescript and React.

## Setting up the project

- We will use [vite](https://vitejs.dev/) to setup our project. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. So, let's install vite and create the project.

```bash
yarn create vite
? project name: gallery-typescript
? Select a framework: react
? Select a variant: typescript
cd gallery-typescript
yarn
```

- This will create the project with react and typescript. Now, let's run the project.

```bash
npm start
```

- Lets add prettier to our project. Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style. This is very useful when working in a team.

```bash
yarn add -D prettier eslint-config-prettier
```

Add prettier config in `.prettierrc`

```json
{
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "semi": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

And add a formatter in script section of package.json

```json
"format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
```

- Now let's add git to our project.

```bash
git init
git add .
git commit -m "Initializing the project"
```
