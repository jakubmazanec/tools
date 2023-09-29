<!-- header -->
<div align="center">

# @jakubmazanec/carson

Tool for managing workspace and project configuration.

</div>
<!-- header -->

## Installation

```sh
npm install @jakubmazanec/carson
```

⚠️ This is an [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) package!
It cannot be required from a CommonJS module.

Usually you also need a package containing Carson templates. Until you
[create your own](#carson-templates), you can use mine:

```sh
npm install @jakubmazanec/carson-templates
```

⚠️ If you want to create new workspaces, you need to install both Carson and your template package
globally:

```sh
npm install @jakubmazanec/carson @jakubmazanec/carson-templates -g
```

#### Prerequisites

- Node.js 16 or later

## Usage

Software development is constantly evolving and best practices often change. If you want to migrate
to a new tool, or merely update some settings, it can be time-consuming to do it in multiple
repositories. Instead, Carson lets you write and use a template that defines what files should exist
and what content should they have. Instead of updating files in your repositories manually, you
change only the template and Carson handles the updates automatically for you, and keeps every
repository in sync. With a template, creating new projects is also super fast and simple.

### Quick overview

Update workspace:

```sh
npx carson update workspace
```

Create a new project in an existing workspace:

```sh
npx carson create project
```

See [CLI documentation](#cli) for the complete overview.

### How it works

Carson assumes your codebase is organized in a workspace, which is simply a directory, and also
usually a Git repository, that contains one or multiple projects. A project is a self-contained
piece of code, e.g. a package, or an app.

> ⚠️ Currently only Node.js projects are supported.

Take a look at this simplified example of a workspace:

```
workspace/
├── .carson/
│   ├── workspace.snapshot
│   └── workspace.json
├── packages/
│   ├── foo/
│   │   ├── .carson/
│   │   │   ├── project.snapshot
│   │   │   └── project.json
│   │   ├── src/
│   │   │   └── main.js
│   │   └── package.json
│   └── bar/
│       ├── .carson/
│       │   ├── project.snapshot
│       │   └── project.json
│       ├── src/
│       │   └── main.js
│       └── package.json
└── package.json
```

Notice that the workspace and each of the two packages in it (`foo` and `bar`) have a directory
named `.carson` with 2 files:

1. Configuration file, which specifies the ID of the Carson template that is used to define the
   files (or just some parts of the files) in the workspace or the project.
2. Snapshots file with all the information necessary to revert any changes.

Let's say config files `workspace/packages/foo/.carson/project.json` and
`workspace/packages/bar/.carson/project.json` both contain this:

```json
{
  "template": "carson-templates:project"
}
```

That means they're using a Carson template named `project` from a package named `carson-templates`.
Carson template is just a directory containing `*.ejs` files parsed and rendered via
`@jakubmazanec/template` package; these files are actually [EJS](https://ejs.co/) templates with
YAML front matter. Please read [`@jakubmazanec/template` documentation](../template/README.md) to
find out in more detail how they work. Simply, they're for generating content using JavaScript as a
templating language.

> Yes, each "Carson template" is composed of multiple template files, and each of these files
> contains an "EJS template". Hopefully, the existence of these two different templates "types"
> isn't very confusing.

Take a look at this simplified example of `carson-templates` with two templates named `workspace`
and `project`:

```
carson-templates@1.0.0
└── templates
    ├── project
    │   └── package.json.ejs
    └── workspace
        └── package.json.ejs
```

Because we're interested in the `project` template, let's see file
`carson-templates@1.0.0/templates/project/package.json.ejs`:

```
---
to: 'package.json'
strategy: merge
---
{
  "repository": {
    "directory": "<%- project.relativePath %>"
  },
  "type": "module",
  "exports": "./dist/main.js",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "swc src -d dist"
  },
  "devDependencies": {
    "@swc/cli": "^0.1.62",
    "@swc/core": "^1.3.56"
  }
}
```

When Carson performs a workspace update, `carson-templates:project` template is rendered for each
project that uses it, and `foo`, and `bar` have their files changed accordingly. In this example
that means `foo/package.json` and `bar/package.json` are recursively merged with the JSONs obtained
from the EJS template above (SWC is added to development dependencies, field `repository.directory`
is set to always be the value of a variable `project.relativePath`, i.e. `'packages/foo'` or
`'packages/bar'`, and so on). Updating the workspace works the same way (although using a different
Carson template, e.g. `carson-templates:workspace`).

When you install a newer version of `carson-templates` that e.g. replaces SWC with another tool,
before Carson does a fresh update, it first uses saved (and committed to Git) snapshots from the
previous update to revert all its changes. This way you don't need to keep the previous version of
`carson-templates` around and the updates can be always done automatically from the current state of
the workspace.

The fact that EJS templates are just JavaScript means Carson can support almost any use case. For
that, there are also more Carson template features you need to learn than this example showcases:
mainly additional strategies (you can e.g. instead of merging simply overwrite the whole file, or
just create a file with some default content and then let the user change it freely) and what
variables with what information is available during EJS template rendering. Please read
[Carson templates documentation](#carson-templates) to find out in more detail how they work, or see
[`@jakubmazanec/carson-templates`](../template/README.md) for examples.

## Documentation

### API

See [API reference](./docs) for auto-generated documentation.

### Configuration

Carson configuration files are located in a directory named `.carson`. Files named `workspace.json`
and `project.json` are used to configure the workspace and project respectively (in the case of
single-project workspace they're both in the same `.carson` directory).

You can add arbitrary data to these JSONs in addition to the options described below. Because
workspace and project configurations are available as JavaScript variables during the rendering of
Carson templates, they can be used to store ad-hoc data or to allow custom, per-project
configuration.

#### `workspace.json`

| Option   | Type   | Description        |
| -------- | ------ | ------------------ |
| template | string | Carson template ID |

#### `project.json`

| Option   | Type   | Description        |
| -------- | ------ | ------------------ |
| template | string | Carson template ID |

### CLI

#### `update workspace [<options>]`

Updates workspace and all projects using the configured Carson templates.

> ⚠️ Make sure to have committed all changes to Git, in case the update doesn't work as you expect.

| Option | Description                                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --path | Path to the workspace. A relative path is appended to the current working directory. The file system is traversed up to the root when looking for a workspace. |

#### `create project [<options>]`

Creates a new project in a workspace.

| Option     | Description                                                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --path     | Path to the workspace in which the project should be created. A relative path is appended to the current working directory. The file system is traversed up to the root when looking for a workspace. |
| --template | ID of the Carson template used to create the project.                                                                                                                                                 |
| --name     | Project name.                                                                                                                                                                                         |

#### `create workspace [<options>]`

Creates new workspace.

| Option     | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| --path     | Path where the workspace should be created. A relative path is appended to the current working directory. |
| --template | ID of the Carson template used to create the workspace.                                                   |

### Carson templates

Carson template is just a directory containing `*.ejs` files and `config.json` file. The purpose of
a Carson template is to describe what files with what content should exist in a project or workspace
the template is applied to.

Carson templates are identified using a template ID consisting of two colon-separated parts: a bare
module specifier and a template name, e.g. `@jakubmazanec/carson-templates:projects/library`.

Because of this, you should organize your Carson templates by putting all of them into a single
package that has to look like this:

```
carson-templates@1.0.0/
├── src/
│   └── main.js
├── templates/
│   ├── projects/
│   │   ├── app/
│   │   │   ├── config.json
│   │   │   └── package.json.ejs
│   │   └── library/
│   │       ├── config.json
│   │       └── package.json.ejs
│   └── workspace/
│       ├── config.json
│       └── package.json.ejs
└── package.json
```

This package must export `package.json` and right next to it contain a directory named `templates`
in which each template is located (under a path that corresponds to its name). In the example above,
there are 3 templates (for simplicity, each contains only one `*.ejs` file and a config file):

1. `carson-templates:projects/app` located in `templates/projects/app`.
2. `carson-templates:projects/library` located in `templates/projects/library`.
3. `carson-templates:workspace` located in `templates/workspace`.

The package can also export some JavaScript code (defined in the `package.json` as usual); all named
export are available as global variables during the rendering of the template files.

> ⚠️ Do NOT use asynchronous functions in the template files. Templates are rendered synchronously.

#### Template files

All those `*.ejs` files are parsed and rendered via `@jakubmazanec/template` package; they are
actually [EJS](https://ejs.co/) templates with YAML front matter. Please read
[`@jakubmazanec/template` documentation](../template/README.md) to find out in more detail how they
work. Simply, they're for generating content using JavaScript as a templating language.

For a quick overview, look at the file `templates/projects/library/package.json.ejs`:

```
---
to: 'package.json'
strategy: merge
---
{
  "repository": {
    "directory": "<%- project.relativePath %>"
  },
  "type": "module",
  "exports": "./dist/main.js",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "swc src -d dist"
  },
  "devDependencies": {
    "@swc/cli": "^0.1.62",
    "@swc/core": "^1.3.56"
  }
}
```

The YAML front matter contains metadata describing what to do with the content generated during the
rendering of the EJS template.

Attribute `to` is the path of the target file the resulting template render is supposed to be
written into. The path is appended to the project or workspace path. The extension is also used for
file format detection by Prettier.

Attribute `strategy` describes how exactly should the template render be written, or whether it
should be written at all.

| Strategy name | Example `strategy` value | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Create        | `'create'`               | The template render is written to the target file, but only when the Carson template is used to create a new workspace or project; when Carson performs an update, the template files with this strategy are not even rendered. If the target file already exists and its format is JSON or YAML, the template render is merged with the target file's existing content (otherwise it's overwritten). Only simple objects, not arrays, are merged recursively. |
| Ensure        | `'ensure'`               | The template render is written to the target file, but only when the target file doesn't exist; if it does, it is left unchanged.                                                                                                                                                                                                                                                                                                                              |
| Overwrite     | `'overwrite'`            | The template render is written to the target file, overwriting its existing content.                                                                                                                                                                                                                                                                                                                                                                           |
| Merge         | `'merge'`                | The template render is merged with the target file's existing content. Only simple objects, not arrays, are merged recursively. The only supported file formats are JSON and YAML. If the target file doesn't exist, it is created.                                                                                                                                                                                                                            |
| Check         | `'check'`                | Only the target file's existence is checked, the template render is discarded; when Carson doesn't perform an update, the template files with this strategy are not even rendered.                                                                                                                                                                                                                                                                             |
| Insert        | `['insert', <string>]`   | The template render is inserted between the first and last occurrence of an HTML comment containing configured string, e.g. `<!-- foobar -->`. The only supported file format is Markdown.                                                                                                                                                                                                                                                                     |

The rest of the template file after the front matter is the actual EJS template. Please read
[`ejs` documentation](https://ejs.co/#docs) to find out in more detail how they work.

> ⚠️ Because EJS templates can contain arbitrary JavaScript code which Carson will run, you
> shouldn't use Carson templates from untrusted sources! Only use templates that you've written or
> extensively reviewed.

Global variables available during the rendering:

| Variable name | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| `workspace`   | The workspace Carson is being run in.                                                 |
| `project`     | The project Carson is creating or updating; is undefined when working on a workspace. |
| `args`        | Parsed command line arguments that were used to execute Carson.                       |

#### Carson template config

Currently, the config isn't used for anything yet.

### Carson philosophy

The fact that Carson templates are just JavaScript gives you a lot of freedom, but it may lead you
to use Carson just as a simple config generator. Because you can add arbitrary data to the workspace
and project configs, it is tempting to use them as a source of values for "parameters" of
configurations of various tools.

For example, you can add `"useSwc": true` or `"useSwc": false` to a project config and then use this
value in a template that generates build configuration for either SWC, or Babel. But this makes
updates little bit harder, because if you later remove Babel support, you have to remember to remove
now useless setting from the project config. It also makes the logic of the Carson template more
complex; it is better to have separate templates for projects that use Babel and for project that
use SWC.

Another approach that is not recommended is using project config to specify "overrides" for various
config files:

```json
{
  "template": "@jakubmazanec/carson-templates:projects/library",

  "tsconfig": {
    "compilerOptions": {
      "strict": false
    }
  }
}
```

The `tsconfig` object is then recursively merged with the defaults during the template rendering of
the resulting `tsconfig.json`, thus allowing you to change TypeScript configuration per project.
This is not ideal, because now the Carson template isn't the only thing that defines the project
configuration, which makes updates more unpredictable.

Generally, do not push the data onto the templates, let the templates pull the data they need. Since
you create your own templates, it should be easy to do.

## Contributing

If you want to contribute, see [CONTRIBUTING](./CONTRIBUTING.md) for details.

## License

This package is licensed under the GNU Affero General Public License v3. See [LICENSE](./LICENSE.md)
for details.
