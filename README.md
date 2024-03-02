# lai.nz

## *️⃣ Prereq

Install [Bun](https://bun.sh):[^pkg]

```sh
curl -fsSL https://bun.sh/install | bash
```

[^pkg]: If you know what you’re doing, go ahead and use [pnpm](https://pnpm.io)/[yarn](https://yarnpkg.com)/[npm](https://www.npmjs.com). I’m having fun with Bun.

Then install dependencies:

```sh
bun install
```

Make sure you’re using the right version of [Node](https://nodejs.org):[^runtime]

```sh
nvm use
```

This might prompt you to `nvm install`.

[^runtime]: I’d like to switch to using the Bun runtime at some point, but Eleventy assumes Node (which is fair enough). If using [Deno](https://deno.com), I’ll leave you to figure things out yourself—let me know how that goes!

## 🚀 Deployment

### 🏗️ To build

```sh
bun run build
```

Then peep the freshly minted `/_site` folder.

### 👟 To run

```sh
bun run start
```
