import { useMemo } from 'react'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

import { format } from 'date-fns'
import TimeAgo from 'timeago-react'

import { styled } from 'design-system'

import type { IssueData } from './types'

type Props = {
  id: string
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

const Issue = ({ id, issue }: Props) => {
  const createdAt = useMemo(() => {
    return format(new Date(issue.created_at), 'dd/MM/yyyy')
  }, [issue])

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Item
      css={style}
      key={issue.id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
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
