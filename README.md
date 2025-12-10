# <img src="https://github.com/jaskfla/lai.nz/assets/33956381/282663db-e45e-4f01-bcbc-0a56dafa2b46" width="23" height="23" alt="A emoji-sized drawing of Jasper’s face in a grey squircle" /> [lai.nz](https://lai.nz)

## \*️⃣ Prereq

Install
[Deno](https://docs.deno.com/runtime/getting_started/installation):[^pkg]

[^pkg]:
    If you know what you’re doing, go ahead and use
    [pnpm](https://pnpm.io)/[yarn](https://yarnpkg.com)/[npm](https://www.npmjs.com).

```sh
curl -fsSL https://deno.land/install.sh | sh
```

Or, if you prefer Homebrew: `brew install deno`

Then install dependencies:

```sh
deno install
```

Make sure you’re using the right version of
[Node](https://nodejs.org):[^runtime]

[^runtime]:
    To be completely honest, I don’t know whether my use of Deno in this project
    makes runs the Eleventy build in a Deno runtime. This is a remnant from when
    I
    [used a different package manager](https://dbushell.com/notes/2025-09-10T12:08Z).
    I’ll (eventually) delete either this section or footnote once I figure out
    which bit is no longer relevant.

```sh
nvm use
```

This might prompt you to `nvm install`.

## 🚀 Deployment

### 🏗️ To build

```sh
deno run build
```

Then peep the freshly minted `/_site/` folder.

### 👟 To run

```sh
deno run start
```
