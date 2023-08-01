import { Column, Row, Slider } from '@carbonplan/components'
import { useAppContext } from './app-context'

const TimeSlider = ({ disabled }) => {
  const { dataset, time, setTime } = useAppContext()

  if (time == null) return null

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Time
      </Column>
      <Column start={2} width={2}>
        <Slider
          disabled={disabled}
          min={dataset.selectors.time[0]}
          max={dataset.selectors.time[1]}
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
