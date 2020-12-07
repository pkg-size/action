# pkg-size-action [![Latest version](https://badgen.net/npm/v/pkg-size-action)](https://npm.im/pkg-size-action) [![Monthly downloads](https://badgen.net/npm/dm/pkg-size-action)](https://npm.im/pkg-size-action) [![Install size](https://packagephobia.now.sh/badge?p=pkg-size-action)](https://packagephobia.now.sh/result?p=pkg-size-action)

Report npm package size changes on your pull-requests using [pkg-size](https://github.com/privatenumber/pkg-size).

<Screenshot>

<sub>If you like this project, please star it & [follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🙋‍♂️ Why?
- **Automatically detect publish files** Uses the same logic as `npm publish` to determine distribution files!
- **Fully customizable**
- **Supports npm, yarn, and pnpm** 

- **🔥 Hot** Too hot!
- **⚡️ Blazing fast** Can't keep up!
- **🙌 Awesome support** Best in the world!

## 🚦 Quick Setup
1. Create the following file in your repo: `.github/workflows/pkg-size-report.yml`:

    ```yaml
    name: Package Size Report

    on:
      pull_request:
        branches: [ master, develop ] # Add other branches you want size checks on

    jobs:
      pkg-size-report:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout
            uses: actions/checkout@v2

          - name: Package size report
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

2. Try making a PR! You'll see a comment on your PR reporting the difference package size. This comment will be updated as you make changes to your PR.

## 👨🏻‍🏫 Examples


## ⚙️ Options
- `build-command` Command to build the package with. (Default: auto-detect `npm run build`)
- `comment-report` Whether to comment the build size report on the PR or not: true, false
- `file-size-standard` Standard unit of measure: iec or jedec
- `unchanged-files` Whether to show unchanged files: show, collapse, hide
- `sort-by` Which property to sort by: delta (size difference), headSize, baseSize, path
- `sort-order` Sort order: desc, asc

## 💁‍♀️ FAQ
