import React from 'react'

import Container from './Container'
import DraggableItem from './DraggableItem'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { FacilitiesType } from 'src/types/RoomFacilities.type'

export default function RoomFacilities() {
  const [facilities, setFacilities] = React.useState<FacilitiesType[]>([
    // { top: 20, left: 80, title: 'Smoke Here', id: 'smoke' },
    // { top: 80, left: 20, title: 'Dance Here', id: 'dance' },
  ])

  return (
    <DndProvider backend={HTML5Backend}>
      <Container facilities={facilities} setFacilities={setFacilities} />

      <DraggableItem setFacilities={setFacilities}>Smoke</DraggableItem>
      <DraggableItem setFacilities={setFacilities}>Dance</DraggableItem>
    </DndProvider>
  )
}
