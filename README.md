# <img src="https://github.com/jaskfla/lai.nz/assets/33956381/282663db-e45e-4f01-bcbc-0a56dafa2b46" width="23" height="23" alt="A emoji-sized drawing of Jasper’s face in a grey squircle" /> [lai.nz](https://lai.nz)

## *️⃣ Prereq

Install [Bun](https://bun.sh/docs/installation):[^pkg]

```sh
curl -fsSL https://bun.sh/install | bash
```

Or, if you prefer Homebrew: `brew install oven-sh/bun/bun`

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

[^runtime]: I’d like to give the ~~buntime~~ Bun runtime a proper go at some point, but Eleventy assumes Node (which is fair enough). If using [Deno](https://deno.com), I’ll leave you to figure things out yourself—let me know how that goes!

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
