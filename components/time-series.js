import {
  AxisLabel,
  Chart,
  Grid,
  Line,
  Plot,
  TickLabels,
} from '@carbonplan/charts'
import { Box } from 'theme-ui'
import { useMemo } from 'react'

import { useAppContext } from './app-context'
import ExpandingSection from './expanding-section'

const TimeSeries = () => {
  const {
    dataset,
    variable,
    showRegionPicker,
    setShowRegionPicker,
    regionData,
  } = useAppContext()

  const { data, range } = useMemo(() => {
    if (!regionData?.value || !variable) {
      return []
    }

    let range = [Infinity, -Infinity]
    const data = Object.keys(regionData.value[variable]).map((key) => {
      const values = regionData.value[variable][key]
      const filtered = values.filter((d) => d !== 9.969209968386869e36)
      const sum = filtered.reduce((a, d) => a + d, 0)
      const value = sum / filtered.length

      range = [Math.min(range[0], value), Math.max(range[1], value)]
      return [Number(key), value]
    })

    return { data, range }
  }, [regionData, variable])

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
          <Chart x={[0, dataset.timeChunks - 1]} y={range}>
            <Grid horizontal />
            <Grid vertical />
            <TickLabels left bottom />
            <AxisLabel left>{variable}</AxisLabel>
            <AxisLabel bottom>Time step</AxisLabel>
            <Plot>
              <Line data={data} />
            </Plot>
          </Chart>
        )}
      </Box>
    </ExpandingSection>
  )
}

export default TimeSeries
