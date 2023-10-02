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
  const { variable, showRegionPicker, setShowRegionPicker, regionData } =
    useAppContext()

  const { data, range, domain } = useMemo(() => {
    if (!regionData?.value || !variable) {
      return {}
    }

    let domain = [Infinity, -Infinity]
    let range = [Infinity, -Infinity]
    const data = Object.keys(regionData.value[variable]).map((key) => {
      const values = regionData.value[variable][key]
      const filtered = values.filter((d) => d !== 9.969209968386869e36)
      const sum = filtered.reduce((a, d) => a + d, 0)
      const value = sum / filtered.length

      range = [Math.min(range[0], value), Math.max(range[1], value)]
      domain = [Math.min(domain[0], key), Math.max(domain[1], key)]
      return [Number(key), value]
    })

    return { data, range, domain }
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
        {regionData?.value && domain && (
          <Chart x={domain} y={range}>
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
