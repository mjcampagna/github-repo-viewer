import React, { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'

type UsersUserReposResponse = Endpoints['GET /users/{username}/repos']['response']

const RequestForm = () => {
  const [repos, setRepos] = useState<UsersUserReposResponse['data']>([])
  const [username, setUsername] = useState('fancyapps')

  console.log(repos)

  useEffect(() => {
    const fn = async () => {
      const octokit = new Octokit({ auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN })
      const response = await octokit.request('GET /users/{username}/repos', {
        username,
      })

      setRepos(response.data)
    }
    fn()
  }, [username])

  return (
    <>
      <p>Hi, {username}.</p>
      <p>{`${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`}</p>

        <code>
      <pre>
          {JSON.stringify(repos, null, 2)}
      </pre>
        </code>
    </>
  )
}

export default RequestForm
