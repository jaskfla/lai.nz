# lai.nz

## *️⃣ Prereq

Install [Bun](https://bun.sh/docs/installation):[^pkg]

```sh
curl -fsSL https://bun.sh/install | bash
```

Or, if you prefer use Homebrew: `brew install oven-sh/bun/bun`

[^pkg]: If you know what you’re doing, go ahead and use [pnpm](https://pnpm.io)/[yarn](https://yarnpkg.com)/[npm](https://www.npmjs.com). It might not stick, but for now I’m having fun with Bun.

Then install dependencies:

```sh
bun install
```

Make sure you’re using the right version of [Node](https://nodejs.org):[^runtime]

```sh
nvm use
```

This might prompt you to `nvm install`.

[^runtime]: I’d like to give the ~~Bun runtime~~ buntime a proper go at some point, but Eleventy assumes Node (which is fair enough). If using [Deno](https://deno.com), I’ll leave you to figure things out yourself—let me know how that goes!

## 🚀 Deployment

### 🏗️ To build

```sh
bun run build
```

Then peep the freshly minted `/_site/` folder.

### 👟 To run

```sh
bun run start
```
