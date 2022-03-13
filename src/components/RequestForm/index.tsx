import React, { useMemo, useState } from 'react'
import { Octokit } from 'octokit'
import { SubmitHandler, useForm } from 'react-hook-form'

import { styled } from 'design-system'
import { Button, Form, Input, Label, Select } from 'design-system'

import type { Endpoints } from '@octokit/types'

export type OrgsOrgReposResponse = Endpoints['GET /orgs/{org}/repos']['response']
export type UserReposResponse = Endpoints['GET /user/repos']['response']
export type UsersUsernameReposResponse = Endpoints['GET /users/{username}/repos']['response']

export type Data = OrgsOrgReposResponse['data'] | UserReposResponse['data'] | UsersUsernameReposResponse['data']

type Inputs = {
  name: string
  queryType: 'organization' | 'personalAccessToken' | 'username'
}

type Props = {
  setRepos: React.Dispatch<React.SetStateAction<Data>>
}

const ErrorMessage = styled('p', {
  color: '$red500',
  fontWeight: '$bold',
  margin: '$xxl 0 $s',
})

const FormContainer = styled('div', {
  flex: '0 0 auto',
  width: '100%',
})

const RequestForm = ({ setRepos }: Props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const octokit = useMemo(() => new Octokit({
    auth: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN,
  }), [])

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      name: import.meta.env.VITE_PERSONAL_ACCESS_TOKEN as string || '',
      queryType: 'personalAccessToken',
    },
  })
  const queryType = watch('queryType')
  const nameLabel = useMemo(() => {
    setErrorMessage('')

    let result = ''

    switch(queryType) {
      case 'organization':
        result = 'Organization Name'
        setValue('name', '')
        break
      case 'personalAccessToken': 
        result = 'Your Personal Access Token'
        setValue('name', import.meta.env.VITE_PERSONAL_ACCESS_TOKEN as string || '')
        break
      case 'username': 
        result = 'Username'
        setValue('name', '')
        break
    }

    return result
  }, [queryType])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true)

    if (data.queryType === 'organization') {
        try {
          const response: OrgsOrgReposResponse = await octokit.request('GET /orgs/{org}/repos', {
            org: data.name,
          })
          setRepos(response.data)
        } catch (error: any) {
          setErrorMessage(error?.message || 'Error')
        }
      }
  
      if (data.queryType === 'personalAccessToken') {
        const response: UserReposResponse = await octokit.request('GET /user/repos')
        setRepos(response.data)
      }
  
      if (data.queryType === 'username') {
        const response: UsersUsernameReposResponse = await octokit.request('GET /users/{username}/repos', {
          username: data.name,
        })
        setRepos(response.data)
      }

    setIsLoading(false)
  }

  return (
    <FormContainer>
      <Form
        css={{
          backgroundColor: '$white',
          borderRadius: '$s',
          boxShadow: '$basic',
          maxWidth: 512,
          padding: '$s',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="queryType">Lookup by</Label>
        <Select
          id="queryType"
          {...register('queryType', { required: true })}
        >
          <option value="organization">Organization</option>
          <option value="personalAccessToken">Personal Access Token</option>
          <option value="username">Username</option>
        </Select>

        <Label htmlFor="name">{nameLabel}</Label>
        <Input
          id="name"
          {...register('name', { required: true })}
        />

        <Button disabled={isLoading}>
          {isLoading ? 'Fetching repos ...' : 'Submit'}
        </Button>

        {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
      </Form>
    </FormContainer>
  )
}

export default RequestForm
