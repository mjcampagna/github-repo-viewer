import { useMemo } from 'react'

import { format } from 'date-fns'
import TimeAgo from 'timeago-react'

import { styled } from 'design-system'

import type { IssueData } from './types'

type Props = {
  issue: IssueData
}

const Item = styled('li', {
  alignItems: 'center',
  borderBottom: '1px solid $grey300',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$body2',
  justifyContent: 'space-between',
  lineHeight: '$body2',
  padding: '$s',

  '&:hover': {
    backgroundColor: '$grey100',
  },
})

const AssigneeAvatar = styled('div', {
  borderRadius: 20,
  boxShadow: '$basic',
  flex: '0 0 auto',
  height: 40,
  marginRight: '$s',
  overflow: 'hidden',
  width: 40,
})

const IssueTitle = styled('p', {
  fontSize: '$body2',
  fontWeight: '$bold',
  lineHeight: '$body2',
})

const IssueMetadata = styled('p', {
  fontSize: '$body3',
  lineHeight: '$body3',
})

const Issue = ({ issue }: Props) => {
  const createdAt = useMemo(() => {
    return format(new Date(issue.created_at), 'dd/MM/yyyy')
  }, [issue])

  return (
    <Item key={issue.id}>
      {issue.assignee && (
        <AssigneeAvatar>
          <img
            alt={`${issue.assignee.login}'s avatar`}
            src={issue.assignee.avatar_url}
          />
        </AssigneeAvatar>
      )}
      <div>
        <IssueTitle>{issue.title}</IssueTitle>
        <IssueMetadata>
          Created {createdAt}
        </IssueMetadata>
        <IssueMetadata>
          Updated <TimeAgo datetime={issue.updated_at} locale="en" />
        </IssueMetadata>
      </div>
    </Item>
  )
}

export default Issue
