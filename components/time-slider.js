import { Column, Row, Slider } from '@carbonplan/components'
import { DAYS } from '../data/coordinates'
import { useAppContext } from './app-context'

const TimeSlider = () => {
  const { time, setTime } = useAppContext()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Time
      </Column>
      <Column start={2} width={2}>
        <Slider
          min={0}
          max={DAYS.length - 1}
          step={1}
          sx={{ width: '100%', display: 'inline-block' }}
          value={DAYS.indexOf(time)}
          onChange={(e) => setTime(DAYS[e.target.value])}
        />
      </Column>
    </Row>
  )
}

export default TimeSlider
