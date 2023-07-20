import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl'
import { Box, Container, useThemeUI } from 'theme-ui'
import axios from 'axios'
import getConfig from 'next/config'

const querystring = require('querystring');
const { publicRuntimeConfig } = getConfig()

mapboxgl.accessToken = publicRuntimeConfig.MAPBOX_TOKEN
const XARRAY_TILER_ENDPOINT = 'https://dev-titiler-xarray.delta-backend.com/tilejson.json'
const API_STAC_ENDPOINT = 'https://staging-stac.delta-backend.com/'
const stacCollectionID = 'oco2-geos-l3-daily'

const tileData = {
    resampling_method:'bilinear',
    variable:'XCO2',
    colormap_name:'rdylbu_r',
    rescale:'0.00039394,0.000420'
}

export default function SimpleMap() {
  const mapRef = useRef(null);
  const [zarrTileParams, setZarrTileParams] = useState('')
  const [mapStyle, setMapStyle] = useState(undefined)
  const [baseStyle, setBaseStyle] = useState(undefined);
  
  useEffect(() => {
    if (!mapRef.current) return
    const mbMap = new mapboxgl.Map({
      container: mapRef.current,
      attributionControl: false,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 4
    });
    mapRef.current = mbMap;
    const controller = new AbortController();
    async function getTileParams() {
        const stacRes = await axios.get(`${API_STAC_ENDPOINT}/collections/${stacCollectionID}`, {
            signal: controller.signal
         });
        const zarrAssetUrl = stacRes.data.assets.zarr.href;

        const tileParams = {
            url: zarrAssetUrl,
            time_slice: '2015-01-01T05%3A00%3A00.000Z', // Fixing time for now
            ...tileData
        }
        setZarrTileParams(querystring.stringify(tileParams))
    }
    getTileParams()
    return () => {
        controller.abort();
      };
  }, [])

  useEffect(() => {
    if (!zarrTileParams || !mapRef.current) return
    const zarrSource = {
        type: 'raster',
        url: `${XARRAY_TILER_ENDPOINT}?${zarrTileParams}`
      };

      const zarrLayer = {
        id: 'zarr',
        type: 'raster',
        source: 'zarr',
        metadata: {
          layerOrderPosition: 'raster'
        }
      };

    //   const sources = {
    //     'zarr': zarrSource
    //   };
    //   const layers = [zarrLayer];
      
      mapRef.current.addSource('zarr', zarrSource)
      mapRef.current.addLayer(zarrLayer)

  },[zarrTileParams])


  return <Box sx={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
    <div style={{width: '100%', height: '100%'}} ref={mapRef}></div>
  </Box>
}