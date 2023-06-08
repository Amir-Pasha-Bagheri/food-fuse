import {
  styled,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'

import { ReactComponent as Check } from '../../icons/check.svg'
import { ReactComponent as UnCheck } from '../../icons/un_check.svg'
import SortParameterType from '../../types/SortParametet.type'

type SortProps = {
  sortParameter: SortParameterType
  onSortParameterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const sortableItems = [
  { label: 'بیشترین امتیاز', value: 'rate' },
  { label: 'بیشترین بازدید', value: 'view' },
  { label: 'جدیدترین', value: 'newest' },
]

const Bar = styled('div')(({ theme }) => ({
  height: 5,
  width: 48,
  backgroundColor: theme.palette.divider,
  margin: theme.spacing(2, 'auto'),
  borderRadius: 3,
  cursor: 'move',
}))

function Sort({ sortParameter, onSortParameterChange }: SortProps) {
  return (
    <>
      <Bar />
      <Typography paddingY={1} paddingX={2.5} marginBottom='16px' variant='h6'>
        مرتب سازی بر اساس
      </Typography>
      <RadioGroup
        value={sortParameter}
        onChange={onSortParameterChange}
        sx={{ paddingBottom: 3 }}
      >
        {sortableItems.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio icon={<UnCheck />} checkedIcon={<Check />} />}
            label={<Typography color='secondary.dark'>{item.label}</Typography>}
            sx={{
              marginX: 0,
              marginY: 0.5,
              paddingX: 1.5,
            }}
          />
        ))}
      </RadioGroup>
    </>
  )
}

export default Sort
