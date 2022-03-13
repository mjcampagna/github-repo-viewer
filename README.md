# github-repo-viewer

A simple application that interfaces with Github, and allows for prioritization of issues for a chosen repository.

## Setup

Clone the repo, then:

```
$ cd github-repo-viewer
$ npm install
$ npm run dev
```

To view your own repos, [create a personal access token](https://github.com/settings/tokens).

You can paste this into the application, or create and add it to your `.env` file.

**.env**
```
VITE_PERSONAL_ACCESS_TOKEN=[your personal access token]
```

The app can be used without a personal access token, in which case, you can view public repos by searching for an organization or username.

## Acceptance Criteria

- [ ] selecting a repository should load all of the repository's associated issues

- [ ] the loading of issues should change the interface from single column layout to a
two-column interface, with repositories in the left column, and issues for the selected
repository in the right column

- [ ] each issue should display the following: assignee avatar (40x40), title, created
time (format: dd/mm/yyyy), and last updated (example: 2 hours or 3 days ago)

- [ ] a user should be able to reorder issues into whatever priority they wish (overriding
the default sort order of the issues)

- [ ] the customized order should be able to be persisted in a current client-side
session so that if you refresh the page, the order will remain (unnecessary to sync this customized order back to the api)

## Tech

- [React](https://reactjs.org/)
- [SortableJS](https://github.com/SortableJS/react-sortablejs)
- [Stitches](https://stitches.dev/) (styled components)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool and HMR)

