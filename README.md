# pkg-size-action

Report npm package size changes on your pull-requests using [pkg-size](https://github.com/privatenumber/pkg-size).

<Screenshot>

<sub>If you like this project, please star it & [follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🙋‍♂️ Why?
- **Auto-detect distribution assets** Uses the same logic as `npm publish` to determine published files!
- **Fully customizable**
- **Supports npm, yarn, and pnpm** 


## 🚦 Quick Setup
1. Create the following file in your repo: `.github/workflows/package-size-report.yml`:

    ```yaml
    name: Package Size Report

    on:
      pull_request:
        branches: [ master, develop ] # Add other branches you want size checks on

    jobs:
      pkg-size-report:
        name: Package Size Report
        runs-on: ubuntu-latest

        steps:
          - name: Checkout
            uses: actions/checkout@v2

          - name: Package size report
            uses: privatenumber/pkg-size-action@develop
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

2. Try making a PR! You'll see a comment on your PR reporting the difference package size. This comment will be updated as you make changes to your PR.

## 👨🏻‍🏫 Examples

<details>
  <summary><strong>Set a build command to produce distribution assets</strong></summary>
  <br>

By default, pkg-size-action detects whether a "npm run build" script exists. If not, it assumes your repo doesn't have a build step and won't even install dependencies (disable this auto-check behavior by passing in `false`).

If your repo has a different build script, specify one via `build-command`.

```yaml
name: Package Size Report

on:
  pull_request:
    branches: [ master, develop ]

jobs:
  pkg-size-report:
    name: Package Size Report
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Package size report
        uses: privatenumber/pkg-size-action@develop
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          build-command: npm run prod-build # Set a different build script here
```
</details>

<details>
  <summary><strong>Hiding source-map changes from report</strong></summary>
  <br>

Source-maps can be a negligible when considering distribution size. Hide them from your report to reduce the noise using a glob.

```yaml
name: Package Size Report

on:
  pull_request:
    branches: [ master, develop ]

jobs:
  pkg-size-report:
    name: Package Size Report
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Package size report
        uses: privatenumber/pkg-size-action@develop
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          hide-files: '*.{js,css}.map' # Set a glob to filter out irrelevant files
```
</details>

<details>
  <summary><strong>Show unchanged & changed files in the same table</strong></summary>
  <br>

```yaml
name: Package Size Report

on:
  pull_request:
    branches: [ master, develop ]

jobs:
  pkg-size-report:
    name: Package Size Report
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Package size report
        uses: privatenumber/pkg-size-action@develop
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          unchanged-files: show # Make unchanged files appear in the same table
```
</details>

## ⚙️ Options
- `build-command` Command to build the package with. (Default: auto-detects `npm run build`)
- `comment-report` Whether to comment the build size report on the PR or not: true, false
- `unchanged-files` Whether to show unchanged files: show, collapse, hide
- `sort-by` Which property to sort by: delta (size difference), headSize, baseSize, path
- `sort-order` Sort order: desc, asc
- `hide-files` Glob pattern to hide files with
