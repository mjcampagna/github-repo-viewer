import { fireEvent, render, screen } from '@testing-library/react'
import Repo from './Repo'

const repoData = {
  allow_forking: true,
  archive_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/{archive_format}{/ref}",
  archived: false,
  assignees_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/assignees{/user}",
  blobs_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/git/blobs{/sha}",
  branches_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/branches{/branch}",
  clone_url: "https://github.com/mjcampagna/webpack-react-boilerplate.git",
  collaborators_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/collaborators{/collaborator}",
  comments_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/comments{/number}",
  commits_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/commits{/sha}",
  compare_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/compare/{base}...{head}",
  contents_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/contents/{+path}",
  contributors_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/contributors",
  created_at: "2018-08-12T03:38:46Z",
  default_branch: "master",
  deployments_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/deployments",
  description: null,
  disabled: false,
  downloads_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/downloads",
  events_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/events",
  fork: false,
  forks: 0,
  forks_count: 0,
  forks_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/forks",
  full_name: "mjcampagna/webpack-react-boilerplate",
  git_commits_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/git/commits{/sha}",
  git_refs_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/git/refs{/sha}",
  git_tags_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/git/tags{/sha}",
  git_url: "git://github.com/mjcampagna/webpack-react-boilerplate.git",
  has_downloads: true,
  has_issues: true,
  has_pages: false,
  has_projects: true,
  has_wiki: true,
  homepage: null,
  hooks_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/hooks",
  html_url: "https://github.com/mjcampagna/webpack-react-boilerplate",
  id: 144435318,
  is_template: false,
  issue_comment_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/issues/comments{/number}",
  issue_events_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/issues/events{/number}",
  issues_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/issues{/number}",
  keys_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/keys{/key_id}",
  labels_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/labels{/name}",
  language: "JavaScript",
  languages_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/languages",
  license: null,
  merges_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/merges",
  milestones_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/milestones{/number}",
  mirror_url: null,
  name: "webpack-react-boilerplate",
  node_id: "MDEwOlJlcG9zaXRvcnkxNDQ0MzUzMTg=",
  notifications_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/notifications{?since,all,participating}",
  open_issues: 0,
  open_issues_count: 0,
  owner: {
    avatar_url: "https://avatars.githubusercontent.com/u/1414181?v=4",
    events_url: "https://api.github.com/users/mjcampagna/events{/privacy}",
    followers_url: "https://api.github.com/users/mjcampagna/followers",
    following_url: "https://api.github.com/users/mjcampagna/following{/other_user}",
    gists_url: "https://api.github.com/users/mjcampagna/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/mjcampagna",
    id: 1414181,
    login: "mjcampagna",
    node_id: "MDQ6VXNlcjE0MTQxODE=",
    organizations_url: "https://api.github.com/users/mjcampagna/orgs",
    received_events_url: "https://api.github.com/users/mjcampagna/received_events",
    repos_url: "https://api.github.com/users/mjcampagna/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/mjcampagna/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mjcampagna/subscriptions",
    type: "User",
    url: "https://api.github.com/users/mjcampagna"            ,
  },
  permissions: {admin: true, maintain: true, push: true, triage: true, pull: true},
  private: false,
  pulls_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/pulls{/number}",
  pushed_at: "2018-10-13T03:11:34Z",
  releases_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/releases{/id}",
  size: 2065,
  ssh_url: "git@github.com:mjcampagna/webpack-react-boilerplate.git",
  stargazers_count: 0,
  stargazers_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/stargazers",
  statuses_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/statuses/{sha}",
  subscribers_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/subscribers",
  subscription_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/subscription",
  svn_url: "https://github.com/mjcampagna/webpack-react-boilerplate",
  tags_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/tags",
  teams_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/teams",
  topics: [],
  trees_url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate/git/trees{/sha}",
  updated_at: "2018-10-13T03:11:35Z",
  url: "https://api.github.com/repos/mjcampagna/webpack-react-boilerplate",
  visibility: "public",
  watchers: 0,
  watchers_count: 0,
}

describe('Repo', () => {
  it('should render the repo name', () => {
    render(
      <Repo
        handleRepoOnClick={() => jest.fn()}
        repo={repoData}
        selectedRepoId={-1}
      />
    )

    expect(screen.getByText(/webpack-react-boilerplate/i)).toBeInTheDocument()
  })

  it('should call click handler with correct arguments', () => {
    const mockHandler = jest.fn()

    render(
      <Repo
        handleRepoOnClick={mockHandler}
        repo={repoData}
        selectedRepoId={-1}
      />
    )
    fireEvent.click(screen.getByText(/webpack-react-boilerplate/i))

    expect(mockHandler).toHaveBeenCalledWith(
      repoData.owner.login,
      repoData.name,
      repoData.id,
    )
  })
})
