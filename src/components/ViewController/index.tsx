import { useState } from 'react'

import ReposList from 'components/ReposList'
import RequestForm from 'components/RequestForm'

import type { Data } from 'components/RequestForm'

const ViewController = () => {
  const [repos, setRepos] = useState<Data>([])

  return (
    <>
      {repos.length === 0 ? (
        <RequestForm setRepos={setRepos} />
      ) : (
        <ReposList repos={repos} setRepos={setRepos} />
      )}
    </>
  )
}

export default ViewController
