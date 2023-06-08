import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import AnimationType from '../../types/AnimationType.type'
import { ReactComponent as Star } from '../../icons/vuesax_linear_star.svg'

type AnimationsProps = {
  list: AnimationType[]
}

function Animations({ list }: AnimationsProps) {
  return (
    <>
      {list.map((animation) => (
        <Grid item key={animation.id} xs={6}>
          <Card elevation={0}>
            <CardMedia
              sx={{ height: 240, borderRadius: 6 }}
              image={animation.reviewsThumbnailUrl}
              title={animation.reviewsTitle}
            />
            <CardContent sx={{ padding: 0.5 }}>
              <Typography gutterBottom variant='subtitle1'>
                {animation.reviewsTitle}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Star style={{ marginLeft: 5 }} />
                {animation.reviewsRate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default Animations
