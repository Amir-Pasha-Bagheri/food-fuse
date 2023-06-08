import { Grid, Skeleton } from '@mui/material'

export default function Loading() {
  return (
    <>
      {Array.from(new Array(6)).map((item, index) => (
        <Grid item key={index} xs={6}>
          <Skeleton variant='rounded' height={220} />
        </Grid>
      ))}
    </>
  )
}
