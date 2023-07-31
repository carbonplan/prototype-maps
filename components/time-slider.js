import { Column, Row, Slider } from '@carbonplan/components'
import { DAYS } from '../data/coordinates'
import { useAppContext } from './app-context'

const TimeSlider = ({ disabled }) => {
  const { time, setTime } = useAppContext()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Time
      </Column>
      <Column start={2} width={2}>
        <Slider
          disabled={disabled}
          min={DAYS[0]}
          max={DAYS[1]}
          step={1}
          sx={{
            width: '100%',
            display: 'inline-block',
            '&:disabled': { color: 'muted' },
          }}
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
      </Column>
    </Row>
  )
}

export default TimeSlider
