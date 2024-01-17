## Stan Challenge Project

Hello Stan team! This project was created using NextJS, below you can find some info regarding the project.

## Getting Started

To get the project running you need: Node version >= 18.17

```bash
npm install
```

First, install the dependencies:

```bash
npm install
```

Then create a file: `.env.local` using the info from `.env.sample`
here's the info for the env:

NEXT_PUBLIC_API_URL=http://localhost:3000


To run the production build and start the server:

```bash
npm run build && npm run start
```

or to run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ESLint

[ESLint](https://eslint.org/) is an effective JavaScript linter designed to pinpoint and rectify code issues. The configuration for ESLint is defined in the .eslintrc file.

To lint the code, run the following command:

```bash
npm run lint
```

## Prettier

[Prettier](https://prettier.io/) is a code formatter that ensures uniform and tidy code style throughout the project. The configuration for Prettier is specified in the `.prettierrc` file.

To format all files, run the following command:

```bash
npm run format:fix
```

## Tests

All unit tests are located within the `__tests__` folder

To run the tests:

```bash
npm run test
```

Or if you want jest to be watching the changes on the test:

```bash
npm run test:watch
```

## Project Structure and Techs

The project structure is organized for ease of development and maintenance.

**Styling**:
For this project it was used BEM CSS naming convention.

[BEM](https://getbem.com/introduction/) (Block, Element, Modifier) is a CSS naming convention that structures class names to enhance code clarity and maintainability.

In BEM:

- Block: Represents a standalone entity, such as a header or button.
- Element: Represents a component part or descendant of a block.
- Modifier: Represents a variation or state of a block or element.

- Using double underscores (\_\_) for elements and double hyphens (--) for modifiers, BEM creates a clear hierarchy and helps prevent styling conflicts.
  For example, a BEM class might look like .block\*\*element--modifier. This approach fosters a modular and scalable CSS architecture.

**Font Optimization**:
The project leverages next/font to automatically optimize and load the Raleway font, a custom Google Font. This ensures a smooth and performant font rendering experience.

**TypeScript**:
TypeScript is used throughout the project to provide static typing and enhance code quality. Interfaces are defined in the interfaces folder to document the data structures used.

Here's a brief overview of the main folders:

### Folder: app

- **api**: Server-side routes used in the app.

  - **feed**: GET route that returns the JSON mock data.

- **pages**:
  - **page.tsx**: Home page, with `page.tsx` being the main entry point.
  - **movies/page.tsx**: Movies page.
  - **series/page.tsx**: Series page.

### Folder: components

- **components**: Reusable React components used throughout the project.
  - **Card**: Card component used to display the feed image and title.
  - **ContentWrapper**: component that serves as a container for content. It takes a single prop 'children', which can be any valid ReactNode
  - **Footer**: Page footer component, with links, social icons, etc.
  - **Header**: Blue Header component which has the logo and nav.
  - **Subheader**: Grey subheader used under the header which has a page title.
  - **PopularList**: Component displays a list of popular titles (Series or Movies) based on the specified program type.
  - **PopularTitles**: Component that shows the categories (Popular Series and Popular Movies).

### Folder: interfaces

- **interfaces**: TypeScript interfaces defining data structures used in the project.

### Folder: constants

- **backend.ts**: Constants and configurations used across the project for the backend side, eg: RESPONSE_CODES.
- **frontend.ts**: Constants and configurations used on the frontend side, eg: FOOTER_NAVIGATION_ITEMS.
- **feed-data**: Sample JSON provided by Stan to be used as mock data.
- **Internationalization**: In order to simulate the Internationalization (i18n), I've created a `en.json` file with all text content, so in a large scale production application we could look into an internationalization-framework [i18next](https://www.i18next.com/).

### Folder: styles

- **styles**: Stylesheets for styling components and pages.

### Folder: utils

- **utils**: Utility functions and helper modules, eg: filters.

## Extra Notes:

- How to test the error and loading components?

  - Please refer to the comments on the function `fetchFeedData` on `fetch.ts` file.

- How did you decide on the technical and architectural choices used as part of your solution?

  - Firstly, I reviewed the requirements outlined in the challenge readme file. To address the project's needs, I broke down the requirements into smaller tasks and features.
  - Then I started creating a list of components and unit tests.
  - After that, I opted to use Next.js due to its capability to create server-side components, which significantly enhances the user experience by improving page loading times.
  - Finally, I chose to use Jest for automation testing to individually test the components and functions, ensuring robust and effective testing of the project.

- Are there any improvements you could make to your submission?

  - Please see the list below as I've mentioned what I would if I had more time.
  - Given the constraints of a 4-hour solution, I consider the submission to be robust. However, I would appreciate any constructive feedback or suggestions for improvement. 
  Feel free to highlight any specific areas where enhancements could be made.

- What would you do differently if you were allocated more time?
  - Create a pagination-style component/route to fetch and display only the items visible on the screen, to get more items as the user scrolls.
  - Build a loader skeleton for the images list.
  - Develop a database to host the feed data instead of using JSON.
  - Add more cases for Unit tests, more integration tests as well as explore the end-to-end tests.
  - Create a pipeline to deploy the application into AWS or other hosting provider.
  - Create a modal or a page to display info of the movie/series when the users select them.