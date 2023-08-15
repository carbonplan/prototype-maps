import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { Box, Container, useThemeUI } from 'theme-ui'
import getConfig from 'next/config'
import { useAppContext } from '../app-context'

const querystring = require('querystring')

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const zarr_layer_id = 'zarr_layer'
const zarr_source_id = 'zarr_source'

// https://dev-titiler-xarray.delta-backend.com/map?url=s3://nasa-eodc-data-store/600_1440_1_no-coord-chunks/CMIP6_daily_GISS-E2-1-G_tas.zarr&variable=tas&rescale=200,300
const XARRAY_TILER_ENDPOINT =
  'https://dev-titiler-xarray.delta-backend.com/tilejson.json'

export default function SimpleMap() {
  const mapRef = useRef(null)

  const { dataset } = useAppContext()

  useEffect(() => {
    if (!mapRef.current) return
    const mbMap = new mapboxgl.Map({
      container: mapRef.current,
      attributionControl: false,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 4,
    })
    mapRef.current = mbMap

    mapRef.current.on('load', () => {
      const zarrSource = {
        type: 'raster',
        url: `${XARRAY_TILER_ENDPOINT}?${querystring.stringify(
          dataset.tilerParams
        )}`,
      }

      const zarrLayer = {
        id: zarr_layer_id,
        type: 'raster',
        source: zarr_source_id,
        metadata: {
          layerOrderPosition: 'raster',
        },
      }

      mapRef.current.addSource(zarr_source_id, zarrSource)
      mapRef.current.addLayer(zarrLayer)
    })

    return () => {
      mapRef.current = null
      if (mapRef.current?.getSource(zarr_source_id)) {
        mapRef.current.removeLayer(zarr_layer_id)
        mapRef.current.removeSource(zarr_source_id)
      }
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return
    const zarrSource = mapRef.current.getSource(zarr_source_id)
    if (!zarrSource) return

    const urlToUpdate = `${XARRAY_TILER_ENDPOINT}?${querystring.stringify(
      dataset.tilerParams
    )}`

    zarrSource.setUrl(urlToUpdate)
  }, [JSON.stringify(dataset)])

  return (
    <Box sx={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
      <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>
    </Box>
  )
}
