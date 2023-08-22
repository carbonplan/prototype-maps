import { useThemeUI } from 'theme-ui'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
import { useAppContext } from '../../components/app-context'
import { DATASETS } from '../../data/dynamic-client'
import EmptyState from '../../components/empty-state'

const bucket = 'https://storage.googleapis.com/carbonplan-maps/'
const base =
  'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/'

const DynamicClient = ({ dataset }) => {
  const { theme } = useThemeUI()
  const {
    time,
    variable,
    clim,
    colormapName,
    showRegionPicker,
    setRegionData,
  } = useAppContext()
  const { id, version, projection } = dataset || {}
  const colormap = useThemedColormap(colormapName)
  const router = useRouter()
  const selector = useMemo(() => {
    if (!dataset) {
      return null
    }

    const start = Math.floor(time / dataset.timeChunks) * dataset.timeChunks
    return {
      time: Array(dataset.timeChunks)
        .fill(null)
        .map((d, i) => start + i),
    }
  }, [dataset, time])

  if (!dataset || !variable) {
    return <EmptyState />
  }

  return (
    <Map zoom={0} center={[0, 0]} key={router.asPath}>
      <Fill
        color={theme.rawColors.background}
        source={bucket + 'basemaps/ocean'}
        variable={'ocean'}
      />
      <Line
        color={theme.rawColors.primary}
        source={bucket + 'basemaps/land'}
        variable={'land'}
      />
      <Raster
        key={id}
        colormap={colormap}
        clim={clim}
        mode={'texture'}
        source={base + id}
        variable={variable}
        version={version}
        projection={projection}
        selector={selector}
        regionOptions={{ setData: setRegionData }}
      />
      {showRegionPicker && (
        <RegionPicker
          color={theme.colors.primary}
          backgroundColor={theme.colors.background}
          fontFamily={theme.fonts.mono}
          fontSize={'14px'}
          maxRadius={2000}
        />
      )}
    </Map>
  )
}

export default DynamicClient

export function getStaticPaths() {
  return {
    paths: DATASETS.map((d) => ({
      params: {
        dataset: d.id,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params: { dataset } }) {
  return {
    props: {
      id: 'Dynamic client',
      dataset: DATASETS.find((d) => d.id === dataset) ?? null,
      datasets: DATASETS.filter((d) => !d.hideInDropdown),
    },
  }
}
