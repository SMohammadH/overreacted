## Getting Started

To install and run the project, you would need to <strong>clone</strong> the project's repository and then execute the following commands:
`npm install` - This command will install all the required dependencies for the project.
`npm run dev` - This command will start the project in development mode.
Make sure you have Node.js and npm (Node Package Manager) installed on your system before running these commands.

## About This Project

This project is a similar version of overreacted.io but uses jsonplaceholder as an API.

#### Technologies in This Project:

- NextJS 14 with App Router
  - React Server Components
  - Async functions on the server side
  - generateStaticParams to make server components static
  - Dynamic routes
  - Next cookies to persist theme value
- Typescript
- Sass Module
  - Including variables for light/dark
  - Persisted theme value

#### Technologies I didn't use:

- Redux: It doesn't work with App router as a theme state provider. I had to wrap the whole project in a Redux provider, so I should convert all static server components to client components then we will lose the whole benefits of using NextJS.
- React Query: Although I wish I could use it, React Query was not required since the two fetching methods I used did not need advanced server management and caching. Caching and prefetching are already done by NextJS.
- Testing: Implementing any testing libraries such as Jest and RTL, Cypress, Vitest to NextJS 14 with App Router requires a lot of configurations, which takes more than two days. (It would be easier in a pure React project.)
