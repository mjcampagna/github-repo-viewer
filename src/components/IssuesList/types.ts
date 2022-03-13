import type { Endpoints } from '@octokit/types'

type ReposOwnerRepoIssuesResponse = Endpoints['GET /repos/{owner}/{repo}/issues']['response']

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export type IssuesData = ReposOwnerRepoIssuesResponse['data']

export type IssueData = Omit<ArrayElement<IssuesData>, 'id'> & {
  id: string
}

export type TransformedIssuesData = IssueData[]