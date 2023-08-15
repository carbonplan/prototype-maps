export const tileData = [
  {
    id: 'cmip6',

    tilerParams: {
      url:
        's3://nasa-eodc-data-store/600_1440_1_no-coord-chunks/CMIP6_daily_GISS-E2-1-G_tas.zarr',
      variable: 'tas',
      rescale: '200,300',
      maxzoom: 11,
    },
    selectors: {
      // non-spatial dimensions
      time: ['2021-01-01T05%3A00%3A00.000Z'],
    },
  },
  {
    id: 'cmip6-test',
    tilerParams: {
      url:
        's3://nasa-eodc-data-store/600_1440_1_no-coord-chunks/CMIP6_daily_GISS-E2-1-G_tas.zarr',
      variable: 'tas',
      rescale: '200,1300',
      maxzoom: 11,
    },
    selectors: {
      // non-spatial dimensions
      time: ['2021-01-01T05%3A00%3A00.000Z'],
    },
  },
]
