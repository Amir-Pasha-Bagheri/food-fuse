import React from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import DroppedItem from './DroppedItem'
import { BoxType, FacilitiesType } from '../../types/RoomFacilities.type'

type ContainerProps = {
  facilities: FacilitiesType[]
  setFacilities: React.Dispatch<React.SetStateAction<FacilitiesType[]>>
}

const styles: React.CSSProperties = {
  width: 300,
  height: 300,
  overflow: 'hidden',
  border: '1px solid black',
  position: 'relative',
}

export default function Container({
  facilities,
  setFacilities,
}: ContainerProps) {
  const moveBox = React.useCallback(
    ({ id, left, top }: Omit<FacilitiesType, 'title'> & { id: string }) => {
      const copyFacilities = [...facilities]
      const currentFacility = copyFacilities.findIndex(
        (facility) => facility.id === id
      )

      copyFacilities[currentFacility] = {
        ...copyFacilities[currentFacility],
        left,
        top,
      }

      setFacilities(copyFacilities)
    },
    [facilities, setFacilities]
  )

  const [, drop] = useDrop(
    () => ({
      accept: BoxType.BOX,
      drop(item: FacilitiesType, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox({ id: item.id, left, top })
        return undefined
      },
    }),
    [moveBox]
  )

  return (
    <div ref={drop} style={styles}>
      {facilities.map((key) => {
        return (
          <DroppedItem key={key.id} hideSourceOnDrag {...key}>
            {key.title}
          </DroppedItem>
        )
      })}
    </div>
  )
}
