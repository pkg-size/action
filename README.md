<p align="center"> 
  <img src="/.github/logo.svg" width="112px">
</p>

<h1 align="center">pkg-size action</h1>

Get npm package size reports on your pull-requests.

<img src="/.github/screenshot.png" width="80%">

<sub>If you like this project, please star it & [follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🙋‍♂️ Why?
- 🎩 **Auto-detect distribution assets** Uses the same logic as `npm publish`!
- 🙌 **Supports npm, yarn, and pnpm** Auto CI/frozen-lock installs across package installers!
- 🔥 **Fully customizable report comment** Configure the default template or bring your own!

## 🚦 Quick Setup
1. Create the following file in your repo: `.github/workflows/package-size-report.yml`:

    ```yaml
    name: Package Size Report

    on:
      pull_request:
        branches: [ master, develop ] # ⬅ Add other branches you want size checks on

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

2. Try making a PR against one of the designated branches! You'll see a comment on your PR reporting the difference package size. This comment will be automatically updated as you push changes to your PR.

## 👨🏻‍🏫 Examples

<details>
  <summary><strong>Set a custom build command to produce distribution assets</strong></summary>
  <br>

By default, pkg-size-action detects whether `npm run build` works. If not, it assumes your repo doesn't have a build step and won't even install dependencies.

If your repo has a different build script, specify one via `build-command`. Disable producing a build by passing in `false`.

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
          build-command: npm run prod-build # ⬅ Set a different build script here
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
          unchanged-files: show # ⬅ Make unchanged files appear in the same table
```
</details>

## ⚙️ Options

### build-command
Default: `npm run build` if exists in `package.json`

Command to build the package and produce distribution files with. Pass in `false` to disable attempting to produce a build.

### comment-report
Default: `true`

Possible values: `true`, `false`

Whether to comment the build size report on the PR or not.

### mode
Default: `regression`

Possible values: `regression`, `head-only`

Sets the size report mode:
- `regression`: Builds both `head` and `base` branch and compares difference.
- `head-only`: Only builds and reports on `head` branch.

### display-size
Default: `uncompressed`

Possible values: `uncompressed`, `gzip`, `brotli`

Which size to show. Pass in a comma-separated list for multiple.

### unchanged-files
Default: `collapse`

Possible values: `show`, `collapse`, `hide`

Whether to show unchanged files.

### sort-by
Default: `delta`

Possible values: `delta`, `headSize`, `baseSize`, `path`

Which property to sort the files list by. `delta` is the size difference.

### sort-order
Default: `desc`

Possible values: `desc`, `asc`

Files list sort order.

### hide-files
Glob pattern to hide files. For example, if you want to hide source-maps:

```yml
hide-files: '*.{js,css}.map'
```


## 💼 License
MIT © Hiroki Osame

Logo made by <a href="https://www.flaticon.com/free-icon/report_1055644" title="Freepik">Freepik</a>
