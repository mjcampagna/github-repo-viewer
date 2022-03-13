import { useEffect } from 'react'

import Repo from './Repo'

import { styled } from 'design-system'
import { Button } from 'design-system'

import type { Data } from 'components/RequestForm'

type Props = {
  repos: Data
  setRepos: React.Dispatch<React.SetStateAction<Data>>
}

const Container = styled('div', {
  backgroundColor: '$white',
  boxShadow: '$basic',
  display: 'flex',
  margin: '0 auto',
  maxWidth: 1024,
  minHeight: '100vh',
  paddingTop: 72,
  paddingBottom: 72,
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
})

const Column = styled('div', {
  flex: '1 1 50%',
})

const ReposList = ({ repos, setRepos }: Props) => {
  useEffect(() => {
    console.log(repos)
  }, [repos])

  const handleRepoOnClick = (id: number) => {
    console.log(id)
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
      </Main>
    </Container>
  )
}

export default ReposList