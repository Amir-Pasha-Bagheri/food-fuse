import React from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop } from 'react-dnd'
import DroppedRole from './DroppedRole'
import { BoxType, AreaRoleType } from '../../types/Area.type'

type ContainerProps = {
  droppedRoles: AreaRoleType[]
  pick: (id: string) => void
  move: ({ id, left, top }: Omit<AreaRoleType, 'title'>) => void
}

const styles: React.CSSProperties = {
  width: 500,
  height: 500,
  overflow: 'hidden',
  border: '1px solid black',
  position: 'relative',
}

export default function Container({
  droppedRoles,
  pick,
  move,
}: ContainerProps) {
  const [, drop] = useDrop(
    () => ({
      accept: BoxType.BOX,
      drop(item: AreaRoleType, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        move({ id: item.id, left, top })
        return undefined
      },
    }),
    [move]
  )

  return (
    <div ref={drop} style={styles}>
      {droppedRoles.map((role) => {
        return (
          <DroppedRole key={role.id} pick={pick} hideSourceOnDrag {...role}>
            {role.title}
          </DroppedRole>
        )
      })}
    </div>
  )
}
