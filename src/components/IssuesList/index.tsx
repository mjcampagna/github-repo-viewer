import { useEffect } from 'react'

import Issue from './Issue'

import type { IssuesData } from './types'

type Props = {
  issues: IssuesData
}

const IssuesList = ({ issues }: Props) => {
  useEffect(() => {
    console.log(issues)
  }, [issues])

  return (
    <ul>
      {issues.map((issue) => (
        <Issue issue={issue} key={issue.id} />
      ))}
    </ul>
  )
}

export default IssuesList
