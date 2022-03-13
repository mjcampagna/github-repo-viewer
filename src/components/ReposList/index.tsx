import { useMemo, useState } from 'react'
import { Octokit } from 'octokit'
import useLocalStorage from 'hooks/useLocalStorage'
import { compareSort } from 'utils/compareSort'

import IssuesList from 'components/IssuesList'
import Repo from './Repo'

import { styled } from 'design-system'
import { Button } from 'design-system'

import type { Data } from 'components/RequestForm'
import type { TransformedIssuesData } from 'components/IssuesList/types'

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

  '@iPadPortrait': {
    flex: '1 0 auto',
    width: '100%',
  },

  variants: {
    hasRepoId: {
      true: {
        '@iPadPortrait': {
          display: 'none',
        },      
      },
    },
  },
})

const BackButton = styled(Button, {
  display: 'none',

  variants: {
    hasRepoId: {
      true: {
        '@iPadPortrait': {
          display: 'block',
        },      
      },
    },
  },
})

const ClearButton = styled(Button, {
  variants: {
    hasRepoId: {
      true: {
        '@iPadPortrait': {
          display: 'none',
        },      
      },
    },
  },
})

const ReposList = ({ repos, setRepos }: Props) => {
  const octokit = useMemo(() => new Octokit({
    auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN,
  }), [])

  const [sequences, setSequences] = useLocalStorage('sequences', {})
  const [selectedRepoId, setSelectedRepoId] = useState(-1)
  const [issues, setIssues] = useState<TransformedIssuesData>([])

  const handleBack = () => {
    setIssues([])
    setSelectedRepoId(-1)
  }

  const handleClear = () => {
    setIssues([])
    setRepos([])
    setSelectedRepoId(-1)
  }

  const handleRepoOnClick = async (owner: string, repo: string, id: number) => {
    // clear any previous selection
    setIssues([])

    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    })

    if (response.data.length > 0) {
      setSelectedRepoId(id)

      // sort issues
      const sortedIssues = compareSort(response.data, sequences, id)
  
      setIssues(sortedIssues)
    }
  }

  return (
    <Container>
      <Header>
        <Owner>{repos[0].owner.login}</Owner>
        <BackButton
          hasRepoId={selectedRepoId !== -1}
          onClick={handleBack}
          type="button"
        >
          Back
        </BackButton>
        <ClearButton
          hasRepoId={selectedRepoId !== -1}
          onClick={handleClear}
          type="button"
        >
          Clear
        </ClearButton>
      </Header>

      <Main>
        <Column hasRepoId={selectedRepoId !== -1}>
          <ul>
            {repos.map((repo) => (
              <Repo
                handleRepoOnClick={handleRepoOnClick}
                key={repo.id}
                repo={repo}
                selectedRepoId={selectedRepoId}
              />
            ))}
          </ul>
        </Column>
        {issues.length > 0 && (
          <Column>
            <IssuesList issues={issues} selectedRepoId={selectedRepoId} setIssues={setIssues} />
          </Column>
        )}
      </Main>
    </Container>
  )
}

export default ReposList
