import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../assets/theme'
import Suspensor from './suspensor'
import DefaultLoader from './loaders/DefaultLoader'

const Area = React.lazy(() => import('./Area'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspensor fallback={<DefaultLoader />}>
        <Area />
      </Suspensor>
    </ThemeProvider>
  )
}

export default App
