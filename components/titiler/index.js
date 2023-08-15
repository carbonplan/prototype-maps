import React from 'react'
import MapboxMap from './mapbox-map'


const ZARR_TILER_URL = 'https://dev-titiler-xarray.delta-backend.com/tilejson.json'

export default function ZarrTitlerLayer() {
  return (
  <>
  <MapboxMap />
  </>)
}