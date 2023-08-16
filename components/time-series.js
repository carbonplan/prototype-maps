import { AxisLabel, Chart, Grid, TickLabels } from '@carbonplan/charts'
import { Box } from 'theme-ui'
import { useAppContext } from './app-context'
import ExpandingSection from './expanding-section'

const TimeSeries = () => {
  const { dataset, showRegionPicker, setShowRegionPicker, regionData } =
    useAppContext()

  return (
    <ExpandingSection
      label='Time series'
      onClick={() => setShowRegionPicker(!showRegionPicker)}
    >
      <Box
        sx={{
          width: '100%',
          height: ['200px', '200px', '125px', '200px'],
          position: 'relative',
        }}
      >
        {regionData?.value && (
          <Chart x={[0, 10]} y={[0, 100]}>
            <Grid horizontal />
            <Grid vertical />
            <TickLabels left bottom />
            <AxisLabel left>{dataset.variable}</AxisLabel>
            <AxisLabel bottom>Time step</AxisLabel>
          </Chart>
        )}
      </Box>
    </ExpandingSection>
  )
}

export default TimeSeries
