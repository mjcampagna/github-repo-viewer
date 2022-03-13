import { useCallback, useEffect, useMemo } from 'react'

import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import Issue from './Issue'

import type { TransformedIssuesData } from './types'

type Props = {
  issues: TransformedIssuesData
  setIssues: React.Dispatch<React.SetStateAction<TransformedIssuesData>>
}

const IssuesList = ({ issues, setIssues }: Props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: any) {
    const {active, over} = event

    if (active.id !== over.id) {
      setIssues((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        const updatedItems = arrayMove(items, oldIndex, newIndex)
        
        return updatedItems
      })
    }
  }

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={issues}
        strategy={verticalListSortingStrategy}
      >
        {issues.map((issue) => (
          <Issue issue={issue} id={issue.id} key={issue.id} />
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default IssuesList
