import { useMemo, useState } from 'react'
import { Octokit } from 'octokit'

import IssuesList from 'components/IssuesList'
import Repo from './Repo'

import { styled } from 'design-system'
import { Button } from 'design-system'

import type { Data } from 'components/RequestForm'
import type { ReposOwnerRepoIssuesResponse } from 'components/IssuesList'

type Props = {
  repos: Data
  setRepos: React.Dispatch<React.SetStateAction<Data>>
}

const Container = styled('div', {
  backgroundColor: '$white',
  border: '0 solid $grey300',
  borderWidth: '0 1px',
  boxShadow: '$basic',
  display: 'flex',
  margin: '0 auto',
  maxWidth: 1024,
  minHeight: '100vh',
  paddingTop: 72,
  width: '100%',
})

const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$white',
  borderBottom: '2px solid $grey300',
  display: 'flex',
  height: 72,
  justifyContent: 'space-between',
  maxWidth: 1024,
  padding: '0 $s',
  position: 'fixed',
  top: 0,
  width: '100%',
})

const Owner = styled('span', {
  fontSize: '$body1',
  fontWeight: '$bold',
  lineHeight: '$body1',
})

const Main = styled('main', {
  display: 'flex',
  flex: '1 1 50%',
  maxWidth: '100%',
})

const Column = styled('div', {
  border: '1px solid $grey300',
  flex: '1 1 auto',
  minWidth: '50%',
})

const ReposList = ({ repos, setRepos }: Props) => {
  const octokit = useMemo(() => new Octokit({
    auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN,
  }), [])

  const [issues, setIssues] = useState<ReposOwnerRepoIssuesResponse['data']>([])

  const handleRepoOnClick = async (owner: string, repo: string) => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    })
    setIssues(response.data)
  }

  return (
    <Container>
      <Header>
        <Owner>{repos[0].owner.login}</Owner>
        <Button onClick={() => setRepos([])} type="button">Clear</Button>
      </Header>

      <Main>
        <Column>
          <ul>
            {repos.map((repo) => (
              <Repo
                handleRepoOnClick={handleRepoOnClick}
                key={repo.id}
                repo={repo}
              />
            ))}
          </ul>
        </Column>
        {issues.length > 0 && (
          <Column>
            <IssuesList issues={issues} />
          </Column>
        )}
      </Main>
    </Container>
  )
}

export default ReposList
