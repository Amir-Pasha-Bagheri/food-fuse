import React from 'react'

import Container from './Container'
import DraggableRole from './DraggableRole'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useDnD from 'src/utils/hooks/useDnD'

const items = [
  {
    id: 'smoke',
    title: 'Smoke Here',
    left: 0,
    top: 0,
  },
  {
    id: 'alcohol',
    title: 'Alcohol Here',
    left: 0,
    top: 0,
  },
  {
    id: 'pet',
    title: 'Pet Here',
    left: 0,
    top: 0,
  },
]

export default function Area() {
  const { itemsToDrop, droppedItems, drop, pick, move } = useDnD(items)

  return (
    <DndProvider backend={HTML5Backend}>
      <Container droppedRoles={droppedItems} pick={pick} move={move} />

      {itemsToDrop.map((item) => (
        <DraggableRole key={item.id} drop={drop} id={item.id}>
          {item.title}
        </DraggableRole>
      ))}
    </DndProvider>
  )
}
