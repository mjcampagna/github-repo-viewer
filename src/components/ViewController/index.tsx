import { useEffect, useState } from 'react'
import { Button, Form, Input, Label, Ul, Select } from 'design-system'

import RequestForm from 'components/RequestForm'

import type {
  OrgsOrgReposResponse,
  UserReposResponse,
  UsersUsernameReposResponse,
} from 'components/RequestForm'

const ViewController = () => {
  const [repos, setRepos] = useState<OrgsOrgReposResponse['data'] | UserReposResponse['data'] | UsersUsernameReposResponse['data']>([])

  useEffect(() => {
    console.log(repos)
  }, [repos])

  return (
    <>
      <RequestForm setRepos={setRepos} />

      {repos.map((repo) => (
        <Ul key={repo.id}>
          <li>{repo.id}</li>
          <li>{repo.name}</li>
          <li>{repo.description}</li>
        </Ul>
      ))}
    </>
  )
}

export default ViewController
