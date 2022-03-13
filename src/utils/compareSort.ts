import type { IssuesData, TransformedIssuesData } from 'components/IssuesList/types'

export const compareSort = (data: IssuesData, sequences: Record<string, string[]>, id: number) => {
  // transform type of id:number to id:string;
  // necessary for "sortable" functionality
  const issues: TransformedIssuesData = data.map((item) => (
    { ...item, id: `${item.id}` }
  ))

  if (sequences[id]) {
    const sortedIssues = sequences[id].map((id) => {
      const itemIndex = issues.findIndex((issue) => issue.id === id)
      const item = issues.splice(itemIndex, 1)[0]
      return item
    })

    return [
      ...sortedIssues, // sorted issues
      ...issues, // the leftovers; new issues not in our sequence array
    ]
  }

  return issues
}
