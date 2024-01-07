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
  "plugins": []
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
git commit -m "Initializing project"
```

## Installing Chakra UI

There are many UI libraries available for React. We will use [Chakra UI](https://chakra-ui.com/) for this project. Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. It is also very easy to use.

- Let's install Chakra UI.

```bash
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

- Now, let's add Chakra UI provider in `main.tsx` file.

```tsx
import { ChakraProvider } from '@chakra-ui/react'
...

<ChakraProvider>
  <App />
</ChakraProvider>
...
```

## Adding React query

We will use [React Query](https://react-query.tanstack.com/) to fetch data from the API. React Query is often described as the missing data-fetching library for React. It is very easy to use and has many features. Let's install React Query.

```bash
arn add @tanstack/react-query @tanstack/react-query-devtools
```

- Now, let's add React Query provider in `main.tsx` file.

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()
...
<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```

## Adding Zustand for state management

Zustand is a small, fast and scalable bearbones state-management solution. It has a very small footprint and is very easy to use. Let's install Zustand.

```bash
yarn add zustand
```

Here is a small example of how to use Zustand.

```tsx
import { create } from 'zustand';

type State = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

There is also a devtools for Zustand. Let's install it.

```bash
yarn add zustand-devtools
```

this is the way to use it.

```tsx
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useStore = create<State>(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }))
);
```

## Routing with React Router Dom

We will use [React Router Dom](https://reactrouter.com/web/guides/quick-start) for routing. React Router Dom is a very popular routing library for React. It is very easy to use and has many features. Let's install React Router Dom.

```bash
yarn add react-router-dom
```

This is a small example of how to use React Router Dom.

```tsx
const router = createRouter([
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
]);

<RouterProvider router={router} />;
```

### Navigation

We can use `Link` and `NavLink` to navigate to different routes. `NavLink` is used to style the active link. And also we can use `useNavigate` hook to navigate to different routes.

```tsx
<Link to='/users'>Users</Link>

// add "active" class if route matches the current URL
<NavLink to='/users'>Users</NavLink>

const navigate = useNavigate();
const handleClick = () => {
  navigate('/users');
};
```

### Route params

```tsx
const router = createRouter([
  {
    path: '/',
    component: Home,
  },
  {
    path: '/users/:id',
    component: UserDetailPage,
  },
]);

// Get route params
const { id } = useParams();
// Get query params
const [searchParams, setSearchParams] = useSearchParams();

// Get current location
const location = useLocation();
```

### Handling errors

We can use `errorElement` to show error page if there is any error.

```tsx
const router = createRouter([
  {
    path: '/',
    component: Home,
    errorElement: <ErrorPage />,
  },
]);
```

We can use `useRouteError` hook to handle errors. `isRouteErrorResponse` function can ensure that the error is from the routing or the route is `not found`.

```tsx
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>OOps ... </h1>
      <Text>
        {isRouteErrorResponse(error)
          ? 'Page Not found'
          : 'Something went wrong'}
      </Text>
    </>
  );
};
```

### Nested routes

```tsx
const router = createRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      // outlet will be replaced by the child route
      <Outlet />
    </div>
  );
};
```

### Private routes

````tsx
const router = createRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
        // add a guard to check if the user is authenticated
        canActivate: [isAuthenticated],
      },
    ],
  },
]);


### Layout routes

```tsx
const router = createRouter([
  {
    // no path
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);
````

## Deployment on gh-pages

- Let's add gh-pages to our project.

```bash
yarn add -D gh-pages
```

- Add deploy script in `package.json`

```json
"pre-deploy": "gh-pages -d dist",
"deploy": "yarn build && yarn pre-deploy"
```

- Add homepage in `package.json`

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

In this project it will be https://halumz.github.io/gallery-typescript

- Now, let's deploy our project.

```bash
yarn deploy
```
