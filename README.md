# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Amp orbs

`.agents/setup` prepares Node.js 26.10.0, the pnpm version pinned in
`package.json`, locked dependencies (including development tools), and Astro's
generated types. Run it from any directory with `path/to/repo/.agents/setup`.
The repository needs no environment secrets or backing services to build.

Amp runs setup before creating a reusable project snapshot. Fresh orbs using
an exact snapshot skip setup; stale snapshots retain dependencies and pnpm's
store, then rerun setup to reconcile the current lockfile. `.agents/resume`
does not reinstall anything when an orb wakes.

These lifecycle files must reach the project's default branch before they
configure future orbs. `.amp/services.yaml` declares the supervised development
server and its portal. Start it from the repository root with:

```sh
amp orb services ensure
```

The server listens on Amp's assigned `$PORT`, and Amp checks the homepage
before reporting readiness. Use the printed portal URL to open the site
outside the orb. Opening its declared link in the Portal tab also starts it
when needed. Do not start the server from setup or resume.
