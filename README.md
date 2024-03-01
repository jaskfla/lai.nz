# lai.nz

## ☑️ Prereq

Install [Bun](https://bun.sh):[^pkg]

```sh
curl -fsSL https://bun.sh/install | bash
```

Then install dependencies:

```sh
bun install
```

[^pkg]: If you know what you’re doing, go ahead and use [pnpm](https://pnpm.io)/[yarn](https://yarnpkg.com)/[npm](https://www.npmjs.com). I’m having fun with Bun. If using [Node](https://nodejs.org) (I’m not), be sure to run `nvm use` before building and running; it might also prompt you to `nvm install`. If using [Deno](https://deno.com), I’m sure you can figure things out yourself.

## 🚀 Deployment

### 🏗️ To build

```sh
bun run build
```

Then peep the `/_site` folder.

### 👟 To run

```sh
bun run start
```
