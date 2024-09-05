# React component library template/boilerplate

Template and quick-starter to create your own modern React library includes awesome features and bandled using Rollup.

## Versions npm publish


V0.3.0 => Changed style to pokemon styles

V0.2.2 => Udpated button and Tables components styles

V0.2.2 => Solved bundle generation problem

V0.2.1 => Updated styles custom components: Link, Table

V0.2.0 => Added new custom components: Link, Table

V0.1.0 => added StoryBook

V0.0.6 => Set rollupTypes to true

V0.0.5 => Changed moduleResolution configuration

V0.0.4 => refactor

V0.0.3 => change configuration vite.config.ts to add declaration types

V0.0.2 => change configuration tsconfig.json

V0.0.1 => added react as peer dependencies


## Note

_This repository created for:_ cnavarrete

1. Help to bootstrap your own react library with some nice features and
   without bothering with configuration and saving time.
2. Learning purposes (especially how to bundle complicated things with Rollup).

## Intro

- This boilerplate uses [Rollup](https://rollupjs.org/) as a bundler https://rollupjs.org/

## Features

- [Rollup](https://rollupjs.org/) for bundling
- Bundles `commonjs` and `es` module formats
- [Jest](https://facebook.github.io/jest/) & [React Testing Library](https://testing-library.com/) : For testing our components
- Support for [TypeScript](https://www.typescriptlang.org/)
- Sourcemap creation
- Support of CSS/SASS: For exporting components with style
- [Storybook](https://storybook.js.org/): For testing our components within the library itself as we design them
- Supports complicated peer-dependencies (example here is [Antd](https://ant.design/) so here the power of rollup-plugin-peer-deps-external we can use complicated peer dependency such Antd without having it bundled as a part of your module.)
- Optimizing bundle size: [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser) A Rollup plugin to generate a minified bundle with terser.
- Automatically externalize peerDependencies in a rollup bundle, thanks to [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)
- Eslint
- Deploy Storybook to GitHub Pages

## Getting started

- Copy over the template by cloning this repository and install its dependencies:

```bash
git clone https://github.com/carlosnavec/navarrete-lib.git
cd navarrete-lib
npm install
```

### Development:

- Storybook: - Storybook gives you an easy way to see and use your components while working on them in your library project, without having to build an unnecessary testing page just to display them.

```bash
npm run storybook # runs the host Storybook application locally for quick and easy testing
```

Now, anytime you make a change to your library or the stories, the storybook will live-reload your local dev server so you can iterate on your component in real-time.

- Rollup watch and build:

  - for Local development run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
npm run dev # runs rollup with watch flag
```

### Scripts:

- `npm run build` : builds the library to `dist`
- `npm run dev` : builds the library, then keeps rebuilding it whenever the source files change.
- `npm test` : tests the library and show the coverage.
- `npm run lint` : runs eslint.
- `npm run storybook` : runs the host Storybook application locally for quick and easy testing
- `npm run build-storybook` : builds a static HTML/JS bundle that can easily be hosted on a remote server, so all members of your team can try your components.
- `npm run deploy-storybook` : build & deploy the storybook to GitHub Pages

### Publishing to npm:

publish to GitHub Packages registry:

- login in npm

```bash
npm login
```

and run:

```bash
npm publish
```

## Tutorials and inspirations used to create this boilerplate

- big thanks to this tuto and his author : https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#adding-scss

## License

[MIT](LICENSE).
