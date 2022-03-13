import useLocalStorage from 'hooks/useLocalStorage'

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
  selectedRepoId: number
  setIssues: React.Dispatch<React.SetStateAction<TransformedIssuesData>>
}

const IssuesList = ({ issues, selectedRepoId, setIssues }: Props) => {
  const [sequences, setSequences] = useLocalStorage('sequences', {})

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

        // store custom sort in localStorage
        const sortOrder = updatedItems.map((item) => item.id)
        setSequences({
          ...sequences,
          [selectedRepoId]: sortOrder,
        })

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
