import { Grid } from '@mui/material'

import AnimationType from '../../types/AnimationType.type'

type AnimationsProps = {
  list: AnimationType[]
}

function Animations({ list }: AnimationsProps) {
  return (
    <>
      {list.map((animation) => (
        <Grid item key={animation.id} xs={6}>
          {animation.reviewsTitle}
        </Grid>
      ))}
    </>
  )
}

export default Animations
