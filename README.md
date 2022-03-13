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

- [x] selecting a repository should load all of the repository's associated issues

- [x] the loading of issues should change the interface from single column layout to a two-column interface, with repositories in the left column, and issues for the selected repository in the right column

- [x] each issue should display the following: assignee avatar (40x40), title, created time (format: dd/mm/yyyy), and last updated (example: 2 hours or 3 days ago)

- [x] a user should be able to reorder issues into whatever priority they wish (overriding the default sort order of the issues)

- [x] the customized order should be able to be persisted in a current client-side session so that if you refresh the page, the order will remain (unnecessary to sync this customized order back to the api)

- [ ] include at least one Jest test

- [ ] app is responsive; include at least one layout change at a breakpoint

## Tech

A non-exhaustive list.

- [React](https://reactjs.org/)
- [Stitches](https://stitches.dev/) (styled components)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool and HMR)

## Could-do

Not a to-do list, because I am unlikely to take this further, but a "could-do" list, if I were to spend more time polishing this into shape for public release. Not an exhaustive list, of course, but these are probably the things I would focus on as next steps.

### Better handling of error responses and edge cases

For example, when selecting a repo with no issues, the app just doesn't do anything. Instead, we should message to the user that the repo contains no issues.

### UX enhancements

The two columns should scroll independently.

Full application state could be made persistent so that refreshing the page would not return you to the lookup form.

### Refactor / code cleanup

Code could be reorganized and made more DRY. For example, I would probably want to consolidate my API calls into one file and import them into components for use, rather than inlining the data-fetching.

I would probably also want to create an `useOctokit` hook and context provider, that would allow me to instantiate `const octokit = new Octokit()` just once at the top of the app, then access the `octokit` const via a hook in all the places I need it.

Type declarations could also be better organized.

### Flesh out the design system

Declare more values and create more components within the design system, then convert various parts of the application to use these reusable items, as appropriate.
