import { useState } from 'react'
import { useThemeUI } from 'theme-ui'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
import { useAppContext } from '../../components/app-context'
import { V2_DATASETS, V3_DATASETS } from '../../data/direct-client'
import EmptyState from '../../components/empty-state'
import { useRouter } from 'next/router'

const bucket = 'https://storage.googleapis.com/carbonplan-maps/'

const ZarrV2 = ({ version, dataset }) => {
  const { theme } = useThemeUI()
  const [colormapName, setColormapName] = useState('warm')
  const colormap = useThemedColormap(colormapName)
  const { time } = useAppContext()
  const router = useRouter()
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })

  if (!dataset) {
    return <EmptyState />
  }

  const { source, clim, variable } = dataset

  return (
    <Map zoom={2} center={[0, 0]} key={router.asPath}>
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
        key={source}
        colormap={colormap}
        clim={clim}
        mode={'texture'}
        source={source}
        variable={variable}
        version={version}
        projection={version === 'v3' ? 'equirectangular' : 'mercator'}
        selector={{ time }}
        regionOptions={{ setData: setRegionData }}
      />
    </Map>
  )
}

export default ZarrV2

export function getStaticPaths() {
  return {
    paths: [
      ...V2_DATASETS.map((d) => ({
        params: {
          slug: ['v2', d.id],
        },
      })),
      ...V3_DATASETS.map((d) => ({
        params: {
          slug: ['v3', d.id],
        },
      })),
      {
        params: {
          slug: ['v2'],
        },
      },
      {
        params: {
          slug: ['v3'],
        },
      },
    ],
    fallback: false,
  }
}

export function getStaticProps({ params: { slug } }) {
  const [version, id] = slug
  const datasets = version === 'v3' ? V3_DATASETS : V2_DATASETS
  return {
    props: {
      id: `Zarr ${version}`,
      version,
      dataset: datasets.find((d) => d.id === id) ?? null,
      datasets: datasets,
    },
  }
}
