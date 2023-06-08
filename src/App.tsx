import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

import Navbar from './components/Navbar'
import theme from './theme'
import Header from './components/page/Header'
import SortParameterType from './types/SortParametet.type'
import ControllerType from './types/ControllerType.type'
import AnimationType from './types/AnimationType.type'
import Animations from './components/page/Animations'
import Loading from './components/page/Loading'

function App() {
  const [loading, setLoading] = React.useState<boolean>(true)

  const [sortParameter, setSortParameter] =
    React.useState<SortParameterType>(null)
  const [page, setPage] = React.useState<number>(1)

  const [controller, setController] = React.useState<ControllerType>({
    abort: (): void => {},
    signal: null,
  })

  const [animationList, setAnimationList] = React.useState<AnimationType[]>([])

  const onSortParameterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value as SortParameterType

    setSortParameter(newValue)
    fetchAnimationLists(newValue)
  }

  const fetchAnimationLists = React.useCallback(
    async (
      sortbyParam: SortParameterType = sortParameter,
      pageParam: number = page
    ) => {
      try {
        setLoading(true)

        controller.abort()
        const newController = new AbortController()

        setController(newController)

        await axios
          .get(
            'https://kodoumo.ir/wp-json/api/v2/reviews-category/animations',
            {
              params: {
                sortby: sortbyParam,
                page: pageParam,
              },
              signal: newController.signal,
            }
          )
          .then(({ data }) => {
            setAnimationList(data.data)
          })
          .catch(() => {
            console.log('Request Failed')
          })
          .finally(() => {
            setLoading(false)
          })
      } catch {
        console.log('Request Cancelled')
      }
    },
    [controller, page, sortParameter]
  )

  React.useEffect(() => {
    fetchAnimationLists()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Container maxWidth='sm'>
        <Header
          sortParameter={sortParameter}
          onSortParameterChange={onSortParameterChange}
        />

        <Grid container spacing={1.5} marginTop={2} marginBottom={1}>
          {loading ? <Loading /> : <Animations list={animationList} />}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
