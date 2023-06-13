import { Column, Row, Slider } from '@carbonplan/components'
import { MONTHS } from '../data/coordinates'
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
          max={MONTHS.length - 1}
          step={1}
          sx={{ width: '100%', display: 'inline-block' }}
          value={MONTHS.indexOf(time)}
          onChange={(e) => setTime(MONTHS[e.target.value])}
        />
      </Column>
    </Row>
  )
}

export default TimeSlider
